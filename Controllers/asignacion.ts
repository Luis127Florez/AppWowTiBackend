import { Request, Response } from "express";
import Asignaciones from "../Models/asignacionModel";

export const GetAsignacion = async(req: Request, res: Response)=>{
    try {
        const asignacion = await Asignaciones.findAll();
        res.json(asignacion);
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "hable con el admin"})
    }
}

export const GetAsignacionByIdUser  = async(req: Request, res: Response)=>{
    const {idUser} = req.params
    try {
        const asignacion = await Asignaciones.findAll({
            where:{
                idUser: idUser
            }
        });
        res.json(asignacion);
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "hable con el admin"})
    }
}

export const PostAsignacion = async(req: Request, res: Response)=>{
    const {body} = req;
    try {
        const asignacion = Asignaciones.build(body);
        await asignacion.save();
        res.json(asignacion);
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "hable con el admin"})
    }
}

export const UpdateAsignacion = async(req: Request, res: Response)=>{
    const {id} = req.params
    const {body} = req
    try {
        const asignacion = await Asignaciones.findByPk(id);
        if(!asignacion) return res.status(404).json("no se encontro un user con ese id")
        asignacion.update(body);
        res.json(asignacion);
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "hable con el admin"})
    }
}

export const DeleteAsignacion = async(req: Request, res: Response)=>{
    const {id} = req.params
    try {
        const asignacion = await Asignaciones.findByPk(id);
        if(!asignacion) return res.status(404).json("no se encontro un user con ese id")
        asignacion.destroy();
        res.json({msg: "asignacion eliminada con exito"});
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "hable con el admin"})
    }
}