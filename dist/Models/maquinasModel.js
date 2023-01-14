"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../conexion/db"));
const Maquinas = db_1.default.define('maquinas', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING
    },
    region: {
        type: sequelize_1.DataTypes.INTEGER
    },
    id_almacenamiento: {
        type: sequelize_1.DataTypes.INTEGER
    },
    sistemaOperativo: {
        type: sequelize_1.DataTypes.INTEGER
    },
    redes: {
        type: sequelize_1.DataTypes.INTEGER
    },
    complementos: {
        type: sequelize_1.DataTypes.INTEGER
    },
    duracionPlazo: {
        type: sequelize_1.DataTypes.STRING
    },
    precio: {
        type: sequelize_1.DataTypes.FLOAT
    }
});
exports.default = Maquinas;
//# sourceMappingURL=maquinasModel.js.map