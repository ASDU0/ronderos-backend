import {Prop} from "@nestjs/mongoose";

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
    // user:UserSchema
}