
import { Get, Controller, UseGuards, UseFilters } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthExceptionFilter } from './auth.exception.filter';

@Controller('auth')
export class AuthController {

    @Get('auth_test')
    @UseGuards(AuthGuard('auth'))
    @UseFilters(new AuthExceptionFilter())
    getTest():string{
        return 'test';
    }
}
