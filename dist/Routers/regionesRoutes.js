"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const regionesControls_1 = require("../Controllers/regionesControls");
const authJwt_1 = require("../helpers/authJwt");
const regionesRoutes = (0, express_1.Router)();
regionesRoutes.get("/", authJwt_1.verificarToken, regionesControls_1.GetRegiones);
exports.default = regionesRoutes;
//# sourceMappingURL=regionesRoutes.js.map