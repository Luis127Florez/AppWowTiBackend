"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersControls_1 = require("../Controllers/usersControls");
const authJwt_1 = require("../helpers/authJwt");
const userRoutes = (0, express_1.Router)();
userRoutes.get("/", authJwt_1.verificarToken, usersControls_1.GetUser);
userRoutes.get("/:id", authJwt_1.verificarToken, usersControls_1.GetUserByid);
userRoutes.post("/", usersControls_1.PostUser);
userRoutes.patch("/", usersControls_1.PatchUser);
userRoutes.put("/:id", authJwt_1.verificarToken, usersControls_1.UpdateUser);
userRoutes.delete("/:id", authJwt_1.verificarTokenADMiN, usersControls_1.DeleteUser);
exports.default = userRoutes;
//# sourceMappingURL=usersRoutes.js.map