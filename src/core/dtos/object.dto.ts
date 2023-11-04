import {IsString} from "class-validator";

export class ObjectDto{
    @IsString()
    objectName:string;
}