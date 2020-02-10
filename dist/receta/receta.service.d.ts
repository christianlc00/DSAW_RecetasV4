import { Model } from 'mongoose';
import { Receta } from './interfaces/receta.interface';
export declare class RecetaService {
    private readonly recetaModel;
    constructor(recetaModel: Model<Receta>);
    listar(): Promise<Receta[]>;
    listarId(id: string): Promise<Receta[]>;
}
