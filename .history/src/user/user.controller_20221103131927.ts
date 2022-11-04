import { Body, Controller, Get, } from '@nestjs/common';
import { createUserInput } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }
    @Get()
    async users() {
        return await this.userService.FindAll();
    }

    @Get()
    async createUser(@Body() createUserInput: createUserInput) {
        return await this.userService.createUser(createUserInput);
    }

}
