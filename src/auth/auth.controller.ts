
import { Get, Controller, UseGuards, UseFilters } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthExceptionFilter } from './auth.exception.filter';
import { AuthApiKeyGuard } from './auth.apikey.guard';


@Controller('auth')
export class AuthController {

    @Get('auth_test')
    @UseGuards(AuthApiKeyGuard,AuthGuard('auth_basic'))
    @UseFilters(new AuthExceptionFilter())
    getTest():string{
        return 'test';
    }
}
