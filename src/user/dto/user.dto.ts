import { IsEmail, IsNotEmpty, IsNumber, } from 'class-validator';
export class CreateUserInput {

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;

    @IsNumber()
    @IsNotEmpty()
    age: number
}