import { Request, Response } from "express";
import Asignaciones from "../Models/asignacionModel";
import Users from "../Models/usersModel";
import axios from "axios";
import request from "request-promise"

export const GetAsignacion = async(req: Request, res: Response)=>{
    Asignaciones.belongsTo(Users,{
        foreignKey: "idUser",
        targetKey: 'id'
    });

    try {
        const asignacion = await Asignaciones.findAll({include:[{model:Users}]});
        res.json(asignacion);
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "hable con el admin"})
    }
}

export const GetAsignacionByIdUser  = async(req:Request, res: Response)=>{
    const {idUser} = req.params;
    const {access_token_contabo} = req.headers;
    const dataMaquina = [];

    try {
        const asignacion = await Asignaciones.findAll({
            where:{
                idUser: idUser
            }
        });
        let Idmaquina:Number
        for (let i = 0; i < asignacion.length; i++) {
            Idmaquina = asignacion[i].dataValues.idProducto;
            const data = await axios({
                method: 'get',
                url: `https://api.contabo.com/v1/compute/instances/${Idmaquina}`,
                headers: {
                    "Authorization": `Bearer ${access_token_contabo}`,
                    "x-request-id":"51A87ECD-754E-4104-9C54-D01AD0F83409",
                    "x-trace-id":"123214"
                },
              })          
            dataMaquina.push(data.data.data[0]);  
        }     
        res.json(dataMaquina); 
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
    const {id} = req.params;
    try {
        const asignacion = await Asignaciones.findByPk(id);
        if(!asignacion) return res.status(404).json("no se encontro un user con ese id");
        asignacion.destroy();
        res.json({msg: "asignacion eliminada con exito"});
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "hable con el admin"});
    }
}