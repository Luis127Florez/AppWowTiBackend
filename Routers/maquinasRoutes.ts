import { Router } from "express";
import { getAllProductMaquinas, getMaquina, pacthMaquina } from "../Controllers/maquinasControls";

const maquinasRoutes = Router();

maquinasRoutes.get('/products', getAllProductMaquinas);
maquinasRoutes.get('/:id', getMaquina);
maquinasRoutes.patch('/:id',pacthMaquina);

export  default maquinasRoutes;