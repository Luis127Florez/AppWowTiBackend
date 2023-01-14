import { Request, Response } from "express";
import Compras from "../Models/comprasModel";
import Users from "../Models/usersModel";


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