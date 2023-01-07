import { Router } from "express";
import { DeleteAsignacion, GetAsignacion, GetAsignacionByIdUser, PostAsignacion, UpdateAsignacion } from "../Controllers/asignacion";

const asignacionesRoutes = Router();

asignacionesRoutes.get('/', GetAsignacion);
asignacionesRoutes.get('/:idUser', GetAsignacionByIdUser);
asignacionesRoutes.post('/', PostAsignacion);
asignacionesRoutes.put('/:id', UpdateAsignacion);
asignacionesRoutes.delete('/:id', DeleteAsignacion);

export default asignacionesRoutes;