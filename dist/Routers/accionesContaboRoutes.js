"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const accionesContaboControls_1 = require("../Controllers/accionesContaboControls");
const authjwtcontabo_1 = require("../helpers/authjwtcontabo");
const accionesContaboRoutes = (0, express_1.Router)();
accionesContaboRoutes.post('/:accion/:idMaquina', authjwtcontabo_1.GetTokenContabo, accionesContaboControls_1.AccionMaquinaContabo);
exports.default = accionesContaboRoutes;
//# sourceMappingURL=accionesContaboRoutes.js.map