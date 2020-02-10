import { Controller, Get, Param } from '@nestjs/common';
import { RecetaService } from './receta.service';

@Controller('receta')
export class RecetaController {
    constructor(private readonly recetaService: RecetaService) { }

    @Get()
    async listar() {
        return this.recetaService.listar();
    }

    // GET /contacto/buscar/:id
    @Get('/:id')
    async listarId(@Param('id') id: string) {
        return this.recetaService.listarId(id);
    }
}
