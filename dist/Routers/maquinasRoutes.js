"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const maquinasControls_1 = require("../Controllers/maquinasControls");
const maquinasRoutes = (0, express_1.Router)();
maquinasRoutes.get('/', maquinasControls_1.getMaquinas);
maquinasRoutes.get('/:id', maquinasControls_1.getMaquina);
exports.default = maquinasRoutes;
//# sourceMappingURL=maquinasRoutes.js.map