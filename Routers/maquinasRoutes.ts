import { Router } from "express";
import { getAllProductMaquinas, getMaquina, getMaquinas, pacthMaquina } from "../Controllers/maquinasControls";

const maquinasRoutes = Router();

maquinasRoutes.get('/', getMaquinas);
maquinasRoutes.get('/products', getAllProductMaquinas);
maquinasRoutes.get('/:id', getMaquina);
maquinasRoutes.patch('/:id',pacthMaquina);

export  default maquinasRoutes;