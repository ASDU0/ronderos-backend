import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

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
    // @Prop()
    // user:UserSchema
}

export const ComplaintSchema = SchemaFactory.createForClass(Complaint);