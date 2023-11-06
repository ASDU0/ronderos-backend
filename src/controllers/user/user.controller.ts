import {Body, Controller, Get, HttpException, Post} from "@nestjs/common";
import {UserUseCase} from "../../use-cases/user/user.use-case";
import {UserDto} from "../../core";

@Controller('api/user')
export class UserController {
    constructor(private userUseCase: UserUseCase) {
    }

    @Get()
    async getUsers() {
        try {
            return await this.userUseCase.getUsers()
        } catch (error) {
            throw new HttpException({
                status: 500,
                error: error.message,
            }, 500, {
                cause: error,
            })
        }
    }

    @Post()
    async createUser(@Body() user: UserDto) {
        try {
           return await this.userUseCase.createUser(user)
        } catch (error) {
            throw new HttpException({
                status: 500,
                error: error.message,
            }, 500, {
                cause: error,
            })
        }
    }

    @Post('login')
    async login(@Body() user: UserDto) {
        try {
           return await this.userUseCase.login(user.email,user.password)
        } catch (error) {
            throw new HttpException({
                status: 500,
                error: error.message,
            }, 500, {
                cause: error,
            })
        }
    }
}