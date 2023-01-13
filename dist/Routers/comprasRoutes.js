"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const comprasControls_1 = require("../Controllers/comprasControls");
const comprasRoutes = (0, express_1.Router)();
comprasRoutes.get('/', comprasControls_1.GetCompras);
exports.default = comprasRoutes;
//# sourceMappingURL=comprasRoutes.js.map