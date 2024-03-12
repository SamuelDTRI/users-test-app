import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {} //okeyyyyyy

  @Get()
  getHello(): string {
    console.log('Hola mundo');

    return this.appService.getHello();
  }
}
