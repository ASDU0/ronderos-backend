import {IsArray, IsBoolean, IsDate, IsNumber, IsString} from "class-validator";
import {Neighborhood, Objects, TypeCrime, User} from "../entities";

export class ComplaintDto{
    @IsString()
    title:string;
    @IsString()
    address:string;
    @IsDate()
    date:Date;
    @IsNumber()
    lostValue:number;
    @IsBoolean()
    madeComplaint:boolean;
    @IsString()
    details:string;
    @IsNumber()
    latitude:number;
    @IsNumber()
    longitude:number;
    @IsDate()
    registrationDate:Date;
    neighborhood:Neighborhood;
    user:User;
    typeCrime:TypeCrime;
    // @IsArray()
    object:Objects[];
}