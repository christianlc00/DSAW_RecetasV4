import { Module } from '@nestjs/common';
import { RecetaModule } from './receta/receta.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    RecetaModule,
    MongooseModule.forRoot('mongodb://19ffe.l.time4vps.cloud:27020/recetasV3')
  ]
})
export class AppModule {}
