import {IsString} from "class-validator";


export class UserDto{
    @IsString()
    username:string;
    @IsString()
    email:string;
    @IsString()
    gender:string;
    @IsString()
    password:string;
}