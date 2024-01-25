import { Controller,Get } from '@nestjs/common';
import { StringifyOptions } from 'querystring';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get("id")
    getId():number
    {
        return this.userService.getId();
    }
}
