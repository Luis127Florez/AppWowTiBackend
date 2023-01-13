import { Router } from "express";
import { GetCompras } from "../Controllers/comprasControls";

const comprasRoutes = Router();

comprasRoutes.get('/', GetCompras);

export  default comprasRoutes;