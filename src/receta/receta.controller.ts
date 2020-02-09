import { Controller, Get } from '@nestjs/common';
import { RecetaService } from './receta.service';

@Controller('receta')
export class RecetaController {
    constructor(private readonly recetaService: RecetaService) {}

    @Get()
    getRecetas(): string {
        return this.recetaService.getRecetas();
    }
}
