import { Router } from "express";
import { DeleteAsignacion, GetAsignacion, GetAsignacionByIdUser, PostAsignacion, UpdateAsignacion } from "../Controllers/asignacionControls";
import { GetTokenContabo } from "../helpers/authjwtcontabo";

const asignacionesRoutes = Router();

asignacionesRoutes.get('/', GetAsignacion);
asignacionesRoutes.post('/', PostAsignacion);
asignacionesRoutes.patch('/:idUser', GetTokenContabo ,GetAsignacionByIdUser);
asignacionesRoutes.put('/:id', UpdateAsignacion);
asignacionesRoutes.delete('/:id', DeleteAsignacion);

export default asignacionesRoutes;