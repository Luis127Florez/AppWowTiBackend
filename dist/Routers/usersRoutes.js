"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersControls_1 = require("../Controllers/usersControls");
const userRoutes = (0, express_1.Router)();
userRoutes.get('/', usersControls_1.GetUser);
userRoutes.get('/:id', usersControls_1.GetUserByid);
userRoutes.post('/', usersControls_1.PostUser);
userRoutes.patch('/', usersControls_1.PatchUser);
userRoutes.put('/:id', usersControls_1.UpdateUser);
userRoutes.delete('/:id', usersControls_1.DeleteUser);
exports.default = userRoutes;
//# sourceMappingURL=usersRoutes.js.map