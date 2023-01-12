import { Router } from "express";
import {
  GetUser,
  GetUserByid,
  PatchUser,
  PostUser,
  UpdateUser,
  DeleteUser,
} from "../Controllers/usersControls";
import { verificarToken, verificarTokenADMiN } from "../helpers/authJwt";

const userRoutes = Router();

userRoutes.get("/", verificarToken, GetUser);
userRoutes.get("/:id", verificarToken, GetUserByid);
userRoutes.post("/", PostUser);
userRoutes.patch("/", PatchUser);
userRoutes.put("/:id", verificarToken, UpdateUser);
userRoutes.delete("/:id", verificarTokenADMiN, DeleteUser);

export default userRoutes;
