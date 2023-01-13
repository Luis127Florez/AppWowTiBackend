import { Request, Response } from "express";
import Compras from "../Models/comprasModel";

export const GetCompras = async(req: Request, res:Response) =>{
    try {
        const compras = await Compras.findAll();
        res.json(compras);
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "hable con el admin"})
    }
}