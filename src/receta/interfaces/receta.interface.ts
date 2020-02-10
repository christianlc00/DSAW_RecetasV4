import { Elemento } from './elemento.interface';

export interface Receta {
    titulo: string;
    comensales: number;
    preparacion: number;
    coccion: number;
    descripcion: string
    imagen?: string;
    elementos?: [Elemento]
}