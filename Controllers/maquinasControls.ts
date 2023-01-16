import { Request, Response } from "express";
import Almacenamientos from "../Models/almacenamientoModel";
import backupspaces from "../Models/backupspaceModel";
import BandWidth from "../Models/bandWidthModel";
import Complementos from "../Models/complementosMoldel";
import Ipv4 from "../Models/ipv4Model";
import Maquinas from "../Models/maquinasModel";
import monitorings from "../Models/monitoringModel";
import objectstorages from "../Models/objectstorageModel";
import RedesComplemento from "../Models/redesComplementoModel";
import RedesPrivadas from "../Models/redesPrivadas";
import Regiones from "../Models/regionesModel";
import servermanagement from "../Models/servermanagementModel";
import sistemaOs from "../Models/sistemOsModel";
import Sll from "../Models/sllModel";



export const getMaquinas =async(req: Request,res:Response)=>{
    try {
        //maquinas
        Maquinas.belongsTo(Almacenamientos,{
            foreignKey: 'id_almacenamiento',
            targetKey: 'id'
        });
        Maquinas.belongsTo(sistemaOs,{
            foreignKey: 'sistemaOperativo',
            targetKey: 'id'
        });

        Maquinas.belongsTo(Regiones,{
            foreignKey: 'region',
            targetKey: 'id'
        });


        //Redes
        RedesComplemento.belongsTo(RedesPrivadas,{
            foreignKey: 'id_redPrivada',
            targetKey: 'id'
        });

        RedesComplemento.belongsTo(BandWidth,{
            foreignKey:'id_bandWidth',
            targetKey: 'id'
        });

        RedesComplemento.belongsTo(Ipv4,{
            foreignKey:'id_ipv4',
            targetKey:'id'
        });

        //complementos
        Complementos.belongsTo(objectstorages,{
            foreignKey:'ObjectStorage',
            targetKey:'id'
        });
        Complementos.belongsTo(backupspaces,{
            foreignKey:'BackupSpace',
            targetKey:'id'
        });
        Complementos.belongsTo(servermanagement,{
            foreignKey:'ServerManagement',
            targetKey:'id'
        });
        Complementos.belongsTo(monitorings,{
            foreignKey:'Monitoring',
            targetKey:'id'
        });
        Complementos.belongsTo(Sll,{
            foreignKey:'sll_',
            targetKey:'id'
        })

        //obtencion de datos maquinas, redes
        const maquinas = await Maquinas.findAll({
            include:[{model: Almacenamientos},{model: sistemaOs},{model: Regiones}]
        });

        const redes = await RedesComplemento.findAll({
            include:[{model:RedesPrivadas},{model:BandWidth},{model:Ipv4}]
        })

        const complementos = await Complementos.findAll({
            include:[{model:objectstorages},{model:backupspaces},{model:servermanagement},{model:monitorings},{model:Sll}]
        })
        res.json({maquinas,redes,complementos})
    } catch (error) {
        console.log({error});
        res.status(500).json({
            msg:'Hable con el admin del servidor'
        })
        
    }
    
}

export const getMaquina=async(req:Request,res:Response)=>{
    const {id} = req.params;
    try {
        //maquina
        Maquinas.belongsTo(Almacenamientos,{
            foreignKey: 'id_almacenamiento',
            targetKey: 'id'
        });
        Maquinas.belongsTo(sistemaOs,{
            foreignKey: 'sistemaOperativo',
            targetKey: 'id'
        });

        Maquinas.belongsTo(Regiones,{
            foreignKey: 'region',
            targetKey: 'id'
        });

        //redes
        RedesComplemento.belongsTo(RedesPrivadas,{
            foreignKey: 'id_redPrivada',
            targetKey: 'id'
        });

        RedesComplemento.belongsTo(BandWidth,{
            foreignKey:'id_bandWidth',
            targetKey: 'id'
        });

        RedesComplemento.belongsTo(Ipv4,{
            foreignKey:'id_ipv4',
            targetKey:'id'
        });
        
        //complementos
        Complementos.belongsTo(objectstorages,{
            foreignKey:'ObjectStorage',
            targetKey:'id'
        });
        Complementos.belongsTo(backupspaces,{
            foreignKey:'BackupSpace',
            targetKey:'id'
        });
        Complementos.belongsTo(servermanagement,{
            foreignKey:'ServerManagement',
            targetKey:'id'
        });
        Complementos.belongsTo(monitorings,{
            foreignKey:'Monitoring',
            targetKey:'id'
        });
        Complementos.belongsTo(Sll,{
            foreignKey:'sll_',
            targetKey:'id'
        });

        const maquina = await Maquinas.findByPk(id,{
            include:[{model:Almacenamientos},{model:sistemaOs},{model:Regiones}]
        });
        const redes = await RedesComplemento.findByPk(maquina?.dataValues.id,{
            include:[{model:RedesPrivadas},{model:BandWidth},{model:Ipv4}]
        });
        const complemento = await Complementos.findByPk(maquina?.dataValues.id,{
            include:[{model:objectstorages},{model:backupspaces},{model:servermanagement},{model:monitorings},{model:Sll}]
        })
        res.json({maquina,redes,complemento});
    } catch (error) {
        console.log({error});
        res.status(500).json({
            msg:'Hable con el admin del servidor'
        })
    }
} 