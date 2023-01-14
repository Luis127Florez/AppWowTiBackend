import { Request, Response } from "express";
import Almacenamientos from "../Models/almacenamientoModel";
import Maquinas from "../Models/maquinasModel";



export const getMaquinas =async(req: Request,res:Response)=>{
    try {
        Maquinas.belongsTo(Almacenamientos,{
            foreignKey: 'id_almacenamiento',
            targetKey: 'id'
        });
        /* Maquinas.belongsTo(Almacenamientos,{
            foreignKey: 'almacenamiento',
            targetKey: 'id'
        });
 */
        const maquinas = await Maquinas.findAll({
            include:[{model: Almacenamientos}]
        });
        res.json({maquinas})
    } catch (error) {
        console.log({error});
        res.status(500).json({
            msg:'Hable con el admin del servidor'
        })
        
    }
    
}