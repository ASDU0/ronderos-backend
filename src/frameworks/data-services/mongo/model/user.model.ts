import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import {Document} from "mongoose";


export type UserDocument = HydratedDocument<User & Document>;

@Schema({ timestamps: true })
export class User {
    @Prop({ required: true })
    username: string;

    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ required: false, default: '' })
    gender: string;

    @Prop({ required: true })
    password: string;
    @Prop({
        type:Map,
        of:{
            id: String,
            avatar: String
        },
        default: {}
    })
    socialMedia: Record<string,{id:string;avatar:string}>;
}

export const UserSchema = SchemaFactory.createForClass(User);