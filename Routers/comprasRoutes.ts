import { Router } from "express";
import { GetCompras, GetDetalleCompraById } from "../Controllers/comprasControls";

const comprasRoutes = Router();

comprasRoutes.get('/', GetCompras);
comprasRoutes.get('/:idCompra', GetDetalleCompraById);

export  default comprasRoutes;