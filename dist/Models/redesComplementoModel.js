"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../conexion/db"));
const RedesComplemento = db_1.default.define('redesComplemento', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    id_redPrivada: {
        type: sequelize_1.DataTypes.INTEGER
    },
    id_bandwidth: {
        type: sequelize_1.DataTypes.INTEGER
    },
    id_ipv4: {
        type: sequelize_1.DataTypes.INTEGER
    }
});
exports.default = RedesComplemento;
//# sourceMappingURL=redesComplementoModel.js.map