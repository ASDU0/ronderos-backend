import {
  Injectable,
  NestMiddleware,
  BadRequestException,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { LoginDto, RegisterDto } from '../dto/user.dto';

@Injectable()
export class RegisterMiddleware implements NestMiddleware {
  use(req: Request<{}, {}, RegisterDto>, _res: Response, next: NextFunction) {
    try {
      const { username, email, password, passwordConfirmation } = req.body;

      if (!username)
        throw new BadRequestException('No se proporcionó el username');
      if (!email) throw new BadRequestException('No se proporcionó el email');
      if (!password)
        throw new BadRequestException('No se proporcionó el password');
      if (!passwordConfirmation)
        throw new BadRequestException(
          'No se proporcionó el passwordConfirmation',
        );
      if (password !== passwordConfirmation)
        throw new BadRequestException('Las contraseñas no coinciden');

      next();
    } catch (error) {
      throw error;
    }
  }
}

@Injectable()
export class LoginMiddleware implements NestMiddleware {
  use(req: Request<{}, {}, LoginDto>, _res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      if (!email) throw new BadRequestException('No se proporcionó el email');
      if (!password)
        throw new BadRequestException('No se proporcionó la contraseña');

      next();
    } catch (error) {
      throw error;
    }
  }
}
