import { Field, InputType } from "@nestjs/graphql";


@InputType()
export class createUserInput {
    @Field()
    name: string;

    @Field()
    email: string;

    @Field()
    password: string;

    @Field()
    age: number
}