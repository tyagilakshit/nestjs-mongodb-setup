import { Type } from 'class-transformer';
import { ArrayContains, ArrayNotEmpty, IsArray, IsBoolean, IsEmail, IsEmpty, IsNotEmpty, IsNumber, IsString, ValidateNested, } from 'class-validator';
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

    @IsArray()
    interests: [];

    @IsArray()
    @ArrayNotEmpty()
    @ValidateNested({ each: true })
    @Type(() => permissionType)
    permissions: []
}

export class permissionType {

    @IsString()
    name: string

    @IsBoolean()
    status: boolean
}