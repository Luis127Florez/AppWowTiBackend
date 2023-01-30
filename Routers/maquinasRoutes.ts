import { Router } from "express";
import { GetAllMaquinasContabo, getAllProductMaquinas, getMaquina, pacthMaquina, postMaquina } from "../Controllers/maquinasControls";
import { GetTokenContabo } from "../helpers/authjwtcontabo";

const maquinasRoutes = Router();

maquinasRoutes.get('/products', getAllProductMaquinas);
maquinasRoutes.get('/AllmaquinaContabo', GetTokenContabo ,GetAllMaquinasContabo);
maquinasRoutes.get('/:id', getMaquina);
maquinasRoutes.patch('/:id',pacthMaquina);
maquinasRoutes.post('/', postMaquina);

export default maquinasRoutes;