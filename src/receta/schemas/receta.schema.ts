import * as mongoose from 'mongoose';

const ElementoSchema = new mongoose.Schema({
    ingrediente: {
        type: String,
        required: true,
        minlength: 3
    },
    cantidad: {
        type: Number,
        required: true,
        min: 1
    },
    unidad: {
        type: String,
        required: true,
        minlength: 5
    }
});

export const RecetaSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
        minlength: 5
    },
    comensales: {
        type: Number,
        required: true,
        min: 1
    },
    preparacion: {
        type: Number,
        required: true,
        min: 1
    },
    coccion: {
        type: Number,
        required: true,
        min: 0
    },
    descripcion: {
        type: String,
        required: true
    },
    imagen: {
        type: String
    },
    elementos: [ElementoSchema]
});