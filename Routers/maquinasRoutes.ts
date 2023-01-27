import { Router } from "express";
import { getAllProductMaquinas, getMaquina, pacthMaquina, postMaquina } from "../Controllers/maquinasControls";

const maquinasRoutes = Router();

maquinasRoutes.get('/products', getAllProductMaquinas);
maquinasRoutes.get('/:id', getMaquina);
maquinasRoutes.patch('/:id',pacthMaquina);
maquinasRoutes.post('/', postMaquina);

export default maquinasRoutes;