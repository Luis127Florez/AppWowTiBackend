"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const maquinasControls_1 = require("../Controllers/maquinasControls");
const maquinasRoutes = (0, express_1.Router)();
maquinasRoutes.get('/products', maquinasControls_1.getAllProductMaquinas);
maquinasRoutes.get('/:id', maquinasControls_1.getMaquina);
maquinasRoutes.patch('/:id', maquinasControls_1.pacthMaquina);
maquinasRoutes.post('/', maquinasControls_1.postMaquina);
exports.default = maquinasRoutes;
//# sourceMappingURL=maquinasRoutes.js.map