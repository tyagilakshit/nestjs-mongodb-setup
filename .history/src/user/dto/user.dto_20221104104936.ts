import { IsEmail, IsNotEmpty, } from 'class-validator';
export class CreateUserInput {

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;
    @IsNotEmpty()
    password: string;


    age: number
}