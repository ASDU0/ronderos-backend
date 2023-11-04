import {IsString} from "class-validator";

export class TypeCrimeDto{
    @IsString()
    typeCrime:string;
}