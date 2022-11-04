import { Controller, Get } from '@nestjs/common';
import { brotliDecompressSync } from 'zlib';
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
    async createUser(@Body() createUserInput: createUserInput) {

    }

}
