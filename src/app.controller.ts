import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('receta')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getRecetas(): string {
    return this.appService.getHello();
  }
}
