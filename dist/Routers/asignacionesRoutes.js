"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const asignacionControls_1 = require("../Controllers/asignacionControls");
const authjwtcontabo_1 = require("../helpers/authjwtcontabo");
const asignacionesRoutes = (0, express_1.Router)();
asignacionesRoutes.get('/', asignacionControls_1.GetAsignacion);
asignacionesRoutes.post('/', asignacionControls_1.PostAsignacion);
asignacionesRoutes.patch('/:idUser', authjwtcontabo_1.GetTokenContabo, asignacionControls_1.GetAsignacionByIdUser);
asignacionesRoutes.put('/:id', asignacionControls_1.UpdateAsignacion);
asignacionesRoutes.delete('/:id', asignacionControls_1.DeleteAsignacion);
exports.default = asignacionesRoutes;
//# sourceMappingURL=asignacionesRoutes.js.map