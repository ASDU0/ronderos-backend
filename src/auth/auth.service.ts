import {
  Injectable,
  UnauthorizedException,
  NotFoundException,
  ConflictException,
  BadRequestException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import {
  encryptPassword,
  validatePassword,
} from '../users/utils/passwordManager';
import { LoginDto, RegisterDto } from '../dto/user.dto';
import { AuthResponse } from './auth.interfaces';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateToken(token: string): Promise<AuthResponse> {
    try {
      const { id } = await this.jwtService.verifyAsync(token);
      const user = await this.usersService.getOneById(id);
      if (!user) throw new BadRequestException('El usuario existe');
      return {
        token: await this.jwtService.signAsync({ id: user._id }),
        user: {
          email: user.email,
          username: user.username,
          gender: user.gender,
        },
      };
    } catch (error) {
      throw error;
    }
  }

  async login(loginDto: LoginDto): Promise<AuthResponse> {
    try {
      const { email, password } = loginDto;

      const user = await this.usersService.getOneByEmail(email);
      if (!user) {
        throw new NotFoundException(
          'Algo salió mal, revisa el email o la contraseña',
        );
      }
      const isPasswordValid = await validatePassword(password, user.password);
      if (!isPasswordValid) {
        throw new UnauthorizedException('Incorrecto email o contraseña');
      }
      return {
        token: await this.jwtService.signAsync({ id: user._id }),
        user: {
          email: user.email,
          username: user.username,
          gender: user.gender,
        },
      };
    } catch (error) {
      throw error;
    }
  }

  async register(registerDto: RegisterDto): Promise<AuthResponse> {
    try {
      const { email, password } = registerDto;

      const user = await this.usersService.getOneByEmail(email);
      if (user) {
        throw new ConflictException('Este email ya se ha registrado');
      }
      const hashedPassword = await encryptPassword(password);
      const newUser = await this.usersService.create({
        ...registerDto,
        password: hashedPassword,
      });
      return {
        token: await this.jwtService.signAsync({ id: newUser._id }),
        user: {
          email: newUser.email,
          username: newUser.username,
          gender: newUser.gender,
        },
      };
    } catch (error) {
      throw error;
    }
  }
}
