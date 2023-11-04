import {IsEmail, IsString} from "class-validator";


export class UserDto{
    @IsString()
    username:string;
    @IsEmail()
    email:string;
    @IsString()
    gender:string;
    @IsString()
    password:string;
}