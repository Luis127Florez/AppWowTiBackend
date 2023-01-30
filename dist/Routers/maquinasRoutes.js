"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const maquinasControls_1 = require("../Controllers/maquinasControls");
const authjwtcontabo_1 = require("../helpers/authjwtcontabo");
const maquinasRoutes = (0, express_1.Router)();
maquinasRoutes.get('/products', maquinasControls_1.getAllProductMaquinas);
maquinasRoutes.get('/AllmaquinaContabo', authjwtcontabo_1.GetTokenContabo, maquinasControls_1.GetAllMaquinasContabo);
maquinasRoutes.get('/:id', maquinasControls_1.getMaquina);
maquinasRoutes.patch('/:id', maquinasControls_1.pacthMaquina);
maquinasRoutes.post('/', maquinasControls_1.postMaquina);
exports.default = maquinasRoutes;
//# sourceMappingURL=maquinasRoutes.js.map