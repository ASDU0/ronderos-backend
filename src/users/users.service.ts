import {
  Injectable,
  BadRequestException,
  ConflictException,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Document, Model, Types, Schema as MongooseSchema } from 'mongoose';
import { RegisterDto } from '../dto/user.dto';
import { User } from '../schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async getOneByEmail(email: string): Promise<
    Document<unknown, {}, User> &
      Omit<
        User & {
          _id: Types.ObjectId;
        },
        never
      >
  > {
    try {
      const user = await this.userModel.findOne({ email }).exec();
      return user;
    } catch (error) {
      throw error;
    }
  }

  async create(registerDto: RegisterDto): Promise<
    Document<unknown, {}, User> &
      Omit<
        User & {
          _id: Types.ObjectId;
        },
        never
      >
  > {
    try {
      const user = new this.userModel(registerDto);
      return user.save();
    } catch (error) {
      throw error;
    }
  }

  async getOneById(id: MongooseSchema.Types.ObjectId): Promise<
    Document<unknown, {}, User> &
      Omit<
        User & {
          _id: Types.ObjectId;
        },
        never
      >
  > {
    let user: Document<unknown, {}, User> &
      Omit<
        User & {
          _id: Types.ObjectId;
        },
        never
      >;
    try {
      user = await this.userModel.findById({ _id: id });
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }
}
