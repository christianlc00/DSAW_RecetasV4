"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
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
exports.RecetaSchema = new mongoose.Schema({
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
//# sourceMappingURL=receta.schema.js.map