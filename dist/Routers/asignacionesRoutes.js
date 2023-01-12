"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const asignacionControls_1 = require("../Controllers/asignacionControls");
const asignacionesRoutes = (0, express_1.Router)();
asignacionesRoutes.get('/', asignacionControls_1.GetAsignacion);
asignacionesRoutes.get('/:idUser', asignacionControls_1.GetAsignacionByIdUser);
asignacionesRoutes.post('/', asignacionControls_1.PostAsignacion);
asignacionesRoutes.put('/:id', asignacionControls_1.UpdateAsignacion);
asignacionesRoutes.delete('/:id', asignacionControls_1.DeleteAsignacion);
exports.default = asignacionesRoutes;
//# sourceMappingURL=asignacionesRoutes.js.map