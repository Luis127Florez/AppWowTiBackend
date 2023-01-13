"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../conexion/db"));
const Regiones = db_1.default.define('regiones', {
    idRegiones: {
        type: sequelize_1.DataTypes.INTEGER
    },
    nombreRegion: {
        type: sequelize_1.DataTypes.STRING
    },
    precioUnitarioRegion: {
        type: sequelize_1.DataTypes.FLOAT
    }
});
exports.default = Regiones;
//# sourceMappingURL=regionesModel.js.map