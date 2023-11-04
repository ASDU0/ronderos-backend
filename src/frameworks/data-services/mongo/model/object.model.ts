import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

export type ObjectsDocument=Objects & Document
@Schema()
export class Objects{
    @Prop()
    objectName:string;
}
export const ObjectsSchema = SchemaFactory.createForClass(Objects)
