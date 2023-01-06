import { Router } from "express";
import { GetUser, GetUserByid, PatchUser, PostUser, UpdateUser,DeleteUser } from "../Controllers/usersControls";


const userRoutes = Router();

userRoutes.get('/', GetUser);
userRoutes.get('/:id', GetUserByid);
userRoutes.post('/', PostUser);
userRoutes.patch('/',PatchUser);
userRoutes.put('/:id',UpdateUser);
userRoutes.delete('/:id', DeleteUser )

export default userRoutes;
