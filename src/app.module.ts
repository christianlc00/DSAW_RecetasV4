import { Module } from '@nestjs/common';
import { RecetaModule } from './receta/receta.module';
import { RecetaController } from './receta/receta.controller';
import { RecetaService } from './receta/receta.service';

@Module({
  imports: [RecetaModule],
  controllers: [RecetaController],
  providers: [RecetaService],
})
export class AppModule {}
