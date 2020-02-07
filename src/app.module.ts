import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecetaModule } from './receta/receta.module';

@Module({
  imports: [RecetaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
