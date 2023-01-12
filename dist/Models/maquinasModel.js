"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../conexion/db"));
const maquinas = db_1.default.define('maquinas', {
    region: {
        type: sequelize_1.DataTypes.STRING
    },
    almacenamiento: {
        type: sequelize_1.DataTypes.STRING
    },
    sistemaOperativo: {
        type: sequelize_1.DataTypes.STRING
    },
    redes: {
        type: sequelize_1.DataTypes.STRING
    },
    complementos: {
        type: sequelize_1.DataTypes.STRING
    },
    duracionPlazo: {
        type: sequelize_1.DataTypes.STRING
    }
});
exports.default = maquinas;
//# sourceMappingURL=maquinasModel.js.map