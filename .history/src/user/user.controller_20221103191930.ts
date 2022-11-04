import { Post, Controller, Get, Query, Body } from '@nestjs/common';
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
        // return await this.userService.createUser(createUserInput);
        console.log(body)
        return "aaa";
    }
}
