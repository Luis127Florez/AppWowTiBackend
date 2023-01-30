import { Router } from "express";
import { AccionMaquinaContabo } from "../Controllers/accionesContaboControls";
import { GetTokenContabo } from "../helpers/authjwtcontabo";

const accionesContaboRoutes = Router();

accionesContaboRoutes.post('/:accion/:idMaquina',GetTokenContabo, AccionMaquinaContabo);

export default accionesContaboRoutes;