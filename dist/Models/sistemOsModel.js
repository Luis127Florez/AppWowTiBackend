"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../conexion/db"));
const sistemaOs = db_1.default.define('sistemaOs', {
    id: {
        type: sequelize_1.DataTypes.INTEGER
    },
    tipo: {
        type: sequelize_1.DataTypes.STRING
    },
    versionSo: {
        type: sequelize_1.DataTypes.STRING
    },
    precio: {
        type: sequelize_1.DataTypes.FLOAT
    }
});
exports.default = sistemaOs;
//# sourceMappingURL=sistemOsModel.js.map