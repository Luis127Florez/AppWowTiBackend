"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../conexion/db"));
const Complementos = db_1.default.define('complementos', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    ObjectStorage: {
        type: sequelize_1.DataTypes.INTEGER
    },
    BackupSpace: {
        type: sequelize_1.DataTypes.INTEGER
    },
    ServerManagement: {
        type: sequelize_1.DataTypes.INTEGER
    },
    Monitoring: {
        type: sequelize_1.DataTypes.INTEGER
    },
    sll_: {
        type: sequelize_1.DataTypes.INTEGER
    }
});
exports.default = Complementos;
//# sourceMappingURL=complementosMoldel.js.map