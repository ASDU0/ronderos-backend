import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import mongoose,{Document} from "mongoose";
import {City} from "./city.model";

export type NeighborhoodDocument=Neighborhood & Document
@Schema()
export class Neighborhood{
    @Prop()
    neighborhoodName:string;
    @Prop({type:mongoose.Schema.Types.ObjectId,ref:'City'})
    city:City;
}

export const NeighborhoodSchema = SchemaFactory.createForClass(Neighborhood)