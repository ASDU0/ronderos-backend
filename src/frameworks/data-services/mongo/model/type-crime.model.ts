import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose";

export type typeCrimeDocument= TypeCrime & Document;
@Schema()
export class TypeCrime {
    @Prop()
    typeCrime: string;
}

export const TypeCrimeSchema = SchemaFactory.createForClass(TypeCrime);