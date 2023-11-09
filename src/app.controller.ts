import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('test')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('get_hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('getTest')
  getTest(): string {
    return this.appService.getTest();
  }
}
