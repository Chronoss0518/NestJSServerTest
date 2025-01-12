import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AuthStrategy } from './auth.strategy'
import { AuthExceptionFilter } from './auth.exception.filter'

@Module({
  controllers: [AuthController],
  providers: [
    AuthExceptionFilter,
    AuthStrategy,
    AuthService,
  ],
})
export class AuthModule {}