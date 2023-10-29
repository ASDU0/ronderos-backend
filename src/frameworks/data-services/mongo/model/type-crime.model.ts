import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

@Schema()
export class TypeCrime {
    @Prop()
    typeCrime: string;
}

export const TypeCrimeSchema = SchemaFactory.createForClass(TypeCrime);