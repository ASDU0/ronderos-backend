import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import mongoose, {Document} from "mongoose";
import {User, UserSchema} from "./user.model";

export type ComplaintDocument = Complaint & Document;
@Schema()
export class Complaint {
    @Prop()
    title: string;
    @Prop()
    address: string;
    @Prop()
    date: Date;
    @Prop()
    lostValue: number;
    @Prop()
    madeComplaint: boolean;
    @Prop()
    details: string;
    @Prop()
    latitude: number;
    @Prop()
    longitude: number;
    @Prop()
    registrationDate: Date;
    @Prop({type:mongoose.Schema.Types.ObjectId,ref:'User'})
    user:User;
}

export const ComplaintSchema = SchemaFactory.createForClass(Complaint);