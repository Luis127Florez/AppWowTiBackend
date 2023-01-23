import { Router } from "express";
import { DeleteCompras, GetCompras, GetDetalleCompraById } from "../Controllers/comprasControls";

const comprasRoutes = Router();

comprasRoutes.get('/', GetCompras);
comprasRoutes.get('/:idCompra', GetDetalleCompraById);
comprasRoutes.delete('/:id', DeleteCompras)

export  default comprasRoutes;