import {IsEmail, IsNotEmpty, IsString, MinLength} from "class-validator";


export class UserDto{
    @IsString()
    username:string;
    @IsNotEmpty()
    @IsEmail({},{"message":"Email is not valid"})
    email:string;
    @IsString()
    gender:string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    password:string;

    socialMedia: Record<string, { id: string; avatar: string }>; // Información de redes sociales, opcional


}