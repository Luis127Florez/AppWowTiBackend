import { Router } from "express";
import { getMaquina, getMaquinas } from "../Controllers/maquinasControls";

const maquinasRoutes = Router();

maquinasRoutes.get('/', getMaquinas);
maquinasRoutes.get('/:id', getMaquina);

export  default maquinasRoutes;