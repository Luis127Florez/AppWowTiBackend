import { Router } from "express";
import { getMaquinas } from "../Controllers/maquinasControls";

const maquinasRoutes = Router();

maquinasRoutes.get('/', getMaquinas);

export  default maquinasRoutes;