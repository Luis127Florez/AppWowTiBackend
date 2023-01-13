"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../conexion/db"));
const PanelsApps = db_1.default.define('panelsapps', {
    id: {
        type: sequelize_1.DataTypes.INTEGER
    },
    tipo: {
        type: sequelize_1.DataTypes.STRING
    },
    version: {
        type: sequelize_1.DataTypes.STRING
    },
    precioAlmacenamiento: {
        type: sequelize_1.DataTypes.FLOAT
    }
});
exports.default = PanelsApps;
//# sourceMappingURL=panelsAppsModels.js.map