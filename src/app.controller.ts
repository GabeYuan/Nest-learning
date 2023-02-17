import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('user')
  getUser(): string {
    return this.appService.getuser();
  }

  @Get('promise')
  async findAll(): Promise<any[]> {
    return [];
  }
}
