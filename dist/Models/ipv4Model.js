"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../conexion/db"));
const Ipv4 = db_1.default.define('ipv4s', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    cantidad: {
        type: sequelize_1.DataTypes.INTEGER
    },
    precio: {
        type: sequelize_1.DataTypes.FLOAT
    }
});
exports.default = Ipv4;
//# sourceMappingURL=ipv4Model.js.map