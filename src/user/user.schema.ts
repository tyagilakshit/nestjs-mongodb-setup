import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose";

export type UserDocument = User & mongoose.Document;

@Schema()
export class User {

    _id: string;

    @Prop({ required: true, unique: false })
    name: string;

    @Prop({ required: true, unique: false })
    email: string;

    @Prop({ required: true, unique: false })
    password: string;

    @Prop({ required: true })
    age: number

    @Prop()
    interests: Array<string>;

    @Prop({ required: true, type: [{ name: { type: String }, status: { type: Boolean } }] })
    permissions: { name: string, status: boolean }[]
}


export const UserSchema = SchemaFactory.createForClass(User);
