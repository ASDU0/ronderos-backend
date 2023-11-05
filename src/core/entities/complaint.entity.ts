import {Prop} from "@nestjs/mongoose";
import {User} from "./user.entity";
import {TypeCrime} from "./type-crime.entity";
import {Objects} from "./object.entity";
import {Neighborhood} from "./neighborhood.entity";

export class Complaint {
    title: string;
    address: string;
    date: Date;
    lostValue: number;
    madeComplaint: boolean;
    details: string;
    latitude: number;
    longitude: number;
    registrationDate: Date;
    neighborhood: Neighborhood;
    user:User;
    typeCrime:TypeCrime;
    object: Objects[];
}