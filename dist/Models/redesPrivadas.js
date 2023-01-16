"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../conexion/db"));
const RedesPrivadas = db_1.default.define('redesPrivadas', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING
    },
    precio: {
        type: sequelize_1.DataTypes.FLOAT
    }
});
exports.default = RedesPrivadas;
//# sourceMappingURL=redesPrivadas.js.map