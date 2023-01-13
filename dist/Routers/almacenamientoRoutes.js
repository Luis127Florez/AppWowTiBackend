"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const regionesControls_1 = require("../Controllers/regionesControls");
const authJwt_1 = require("../helpers/authJwt");
const almacenamientoRoutes = (0, express_1.Router)();
almacenamientoRoutes.get("/", authJwt_1.verificarToken, regionesControls_1.GetRegiones);
exports.default = almacenamientoRoutes;
//# sourceMappingURL=almacenamientoRoutes.js.map