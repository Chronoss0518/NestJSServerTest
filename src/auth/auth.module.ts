import { Module,MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AuthBasicStrategy } from './auth.basic.strategy'
import { AuthExceptionFilter } from './auth.exception.filter'

@Module({
  controllers: [AuthController],
  providers: [
    AuthExceptionFilter,
    AuthBasicStrategy,
    AuthService,
  ],
  imports:[
    ConfigModule.forRoot(),
  ],
})
export class AuthModule {}