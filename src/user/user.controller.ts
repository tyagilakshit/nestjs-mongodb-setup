import { Post, Controller, Get, Query, Body, NotFoundException, HttpException, BadRequestException } from '@nestjs/common';
import { Param } from '@nestjs/common/decorators';
import { ID } from '@nestjs/graphql';
import { CreateUserInput } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }
    @Get()
    async users() {
        return await this.userService.FindAll();
    }

    @Post()
    async createUser(@Body() body: CreateUserInput) {
        return await this.userService.createUser(body);
    }

    @Get(':id')
    async userById(@Param('id') userId) {
        try {
            return await this.userService.FindOne(userId)
        } catch (err) {
            return new BadRequestException(err.message)
        }
    }
}
