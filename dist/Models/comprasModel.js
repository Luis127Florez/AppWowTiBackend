"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../conexion/db"));
const Compras = db_1.default.define('compras', {
    idUser: {
        type: sequelize_1.DataTypes.INTEGER
    },
    total: {
        type: sequelize_1.DataTypes.FLOAT
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN
    }
});
exports.default = Compras;
//# sourceMappingURL=comprasModel.js.map