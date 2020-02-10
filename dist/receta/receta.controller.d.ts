import { RecetaService } from './receta.service';
export declare class RecetaController {
    private readonly recetaService;
    constructor(recetaService: RecetaService);
    listar(): Promise<import("./interfaces/receta.interface").Receta[]>;
    listarId(id: string): Promise<import("./interfaces/receta.interface").Receta[]>;
}
