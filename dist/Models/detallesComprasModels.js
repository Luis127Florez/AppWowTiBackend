"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../conexion/db"));
const detallesCompras = db_1.default.define('detallecompra', {
    id_compra: {
        type: sequelize_1.DataTypes.INTEGER
    },
    cantidad: {
        type: sequelize_1.DataTypes.INTEGER
    },
    idMaquina: {
        type: sequelize_1.DataTypes.INTEGER
    },
    precioUnitario: {
        type: sequelize_1.DataTypes.FLOAT
    },
    importe: {
        type: sequelize_1.DataTypes.FLOAT
    }
});
//# sourceMappingURL=detallesComprasModels.js.map