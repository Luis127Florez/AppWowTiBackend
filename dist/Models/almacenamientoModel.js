"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../conexion/db"));
const Almacenamientos = db_1.default.define('almacenamientos', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    tamañoAlmacenamiento: {
        type: sequelize_1.DataTypes.STRING
    },
    precioAlmacenamiento: {
        type: sequelize_1.DataTypes.FLOAT
    }
});
exports.default = Almacenamientos;
//# sourceMappingURL=almacenamientoModel.js.map