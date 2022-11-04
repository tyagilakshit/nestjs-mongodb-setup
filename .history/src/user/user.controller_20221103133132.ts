import { Post, Controller, Body, Get } from '@nestjs/common';
import { createUserInput } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }
    @Get()
    async users() {
        return await this.userService.FindAll();
    }

    @Post()
    async createUser(@Body('createUserInput') createUserInput: createUserInput) {
        // return await this.userService.createUser(createUserInput);


        return "aaa";
    }
}
