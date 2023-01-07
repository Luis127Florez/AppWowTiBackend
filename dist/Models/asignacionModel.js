"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../conexion/db"));
const Asignaciones = db_1.default.define('asignacions', {
    idProducto: {
        type: sequelize_1.DataTypes.INTEGER
    },
    idUser: {
        type: sequelize_1.DataTypes.INTEGER
    }
});
exports.default = Asignaciones;
//# sourceMappingURL=asignacionModel.js.map