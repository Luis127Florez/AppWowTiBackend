import { Request, Response } from "express";
import Compras from "../Models/comprasModel";
import Users from "../Models/usersModel";
import Maquinas from "../Models/maquinasModel";
import detallesCompras from "../Models/detallesComprasModels";
import ProductMaquinas from "../Models/productMaquinasModel";


export const GetCompras = async(req: Request, res:Response) =>{
    try {
        Compras.belongsTo(Users,{
            foreignKey: "idUser",
            targetKey: "id",
        });
        const compras = await Compras.findAll({include:[{model: Users}]});
        res.json(compras);
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "hable con el admin"})
    }
}

export const GetDetalleCompraById = async(req: Request, res:Response) =>{
    const {idCompra} = req.params 
    try {
        detallesCompras.belongsTo(Maquinas,{
            foreignKey: "idMaquina",
            targetKey: "id",
        });

        Maquinas.belongsTo(ProductMaquinas,{
            foreignKey: "id_producMaquina",
            targetKey: "id",
        })

        const detallecompra = await detallesCompras.findAll({ where:{
            id_compra: idCompra
        },include:[{model: Maquinas , include:[{model: ProductMaquinas}]}]});
        
        res.json(detallecompra);
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "hable con el admin"})
    }
}