"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const asignacion_1 = require("../Controllers/asignacion");
const asignacionesRoutes = (0, express_1.Router)();
asignacionesRoutes.get('/', asignacion_1.GetAsignacion);
asignacionesRoutes.get('/:idUser', asignacion_1.GetAsignacionByIdUser);
asignacionesRoutes.post('/', asignacion_1.PostAsignacion);
asignacionesRoutes.put('/:id', asignacion_1.UpdateAsignacion);
asignacionesRoutes.delete('/:id', asignacion_1.DeleteAsignacion);
exports.default = asignacionesRoutes;
//# sourceMappingURL=asignaciones.js.map