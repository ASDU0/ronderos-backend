import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

export type TestDocument = Test & Document;
@Schema()
export class Test{
    @Prop()
    id:string;
    @Prop()
    name:string;
    @Prop()
    age:number;
}

export const TestSchema = SchemaFactory.createForClass(Test);