import { Request, Response } from "express";
import { json } from "sequelize";
import Almacenamientos from "../Models/almacenamientoModel";
import backupspaces from "../Models/backupspaceModel";
import BandWidth from "../Models/bandWidthModel";
import Complementos from "../Models/complementosMoldel";
import Ipv4 from "../Models/ipv4Model";
import Maquinas from "../Models/maquinasModel";
import monitorings from "../Models/monitoringModel";
import objectstorages from "../Models/objectstorageModel";
import ProductMaquinas from "../Models/productMaquinasModel";
import RedesComplemento from "../Models/redesComplementoModel";
import RedesPrivadas from "../Models/redesPrivadas";
import Regiones from "../Models/regionesModel";
import servermanagement from "../Models/servermanagementModel";
import sistemaOs from "../Models/sistemOsModel";
import Sll from "../Models/sllModel";

export const getAllProductMaquinas = async (req: Request, res: Response) => {
  try {
    const productMaquina = await ProductMaquinas.findAll();
    if (!productMaquina) {
      return res.status(401).json({
        msg: "Sin productos en la tabla",
      });
    }
    res.json({ productMaquina });
  } catch (error) {
    res.status(500).json({
      msg: "Problema con el server",
    });
  }
};

export const getMaquina = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    //maquina
    Maquinas.belongsTo(Almacenamientos, {
      foreignKey: "id_almacenamiento",
      targetKey: "id",
    });
    Maquinas.belongsTo(sistemaOs, {
      foreignKey: "sistemaOperativo",
      targetKey: "id",
    });

    Maquinas.belongsTo(Regiones, {
      foreignKey: "region",
      targetKey: "id",
    });

    Maquinas.belongsTo(ProductMaquinas, {
      foreignKey: "id_producMaquina",
      targetKey: "id",
    });

    //redes
    RedesComplemento.belongsTo(RedesPrivadas, {
      foreignKey: "id_redPrivada",
      targetKey: "id",
    });

    RedesComplemento.belongsTo(BandWidth, {
      foreignKey: "id_bandWidth",
      targetKey: "id",
    });

    RedesComplemento.belongsTo(Ipv4, {
      foreignKey: "id_ipv4",
      targetKey: "id",
    });

    //complementos
    Complementos.belongsTo(objectstorages, {
      foreignKey: "ObjectStorage",
      targetKey: "id",
    });
    Complementos.belongsTo(backupspaces, {
      foreignKey: "BackupSpace",
      targetKey: "id",
    });
    Complementos.belongsTo(servermanagement, {
      foreignKey: "ServerManagement",
      targetKey: "id",
    });
    Complementos.belongsTo(monitorings, {
      foreignKey: "Monitoring",
      targetKey: "id",
    });
    Complementos.belongsTo(Sll, {
      foreignKey: "sll_",
      targetKey: "id",
    });

    const maquina = await Maquinas.findByPk(id, {
      include: [
        { model: Almacenamientos },
        { model: sistemaOs },
        { model: Regiones },
        { model: ProductMaquinas },
      ],
    });
    const redes = await RedesComplemento.findByPk(maquina?.dataValues.id, {
      include: [
        { model: RedesPrivadas },
        { model: BandWidth },
        { model: Ipv4 },
      ],
    });
    const complemento = await Complementos.findByPk(maquina?.dataValues.id, {
      include: [
        { model: objectstorages },
        { model: backupspaces },
        { model: servermanagement },
        { model: monitorings },
        { model: Sll },
      ],
    });
    if (!maquina)
      return res.status(401).json({
        msg: "no exiten datos de la maquina",
      });
    if (!redes)
      return res.status(401).json({
        msg: "no exiten datos de la redes de esta maquina",
      });
    if (!complemento)
      return res.status(401).json({
        msg: "no exiten complementos de esta maquina",
      });

    res.json({ maquina, redes, complemento });
  } catch (error) {
    console.log({ error });
    res.status(500).json({
      msg: "Hable con el admin del servidor",
    });
  }
};

export const pacthMaquina = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    //maquina
    Maquinas.belongsTo(Almacenamientos, {
      foreignKey: "id_almacenamiento",
      targetKey: "id",
    });
    Maquinas.belongsTo(sistemaOs, {
      foreignKey: "sistemaOperativo",
      targetKey: "id",
    });

    Maquinas.belongsTo(Regiones, {
      foreignKey: "region",
      targetKey: "id",
    });

    Maquinas.belongsTo(Complementos, {
      foreignKey: "complementos",
      targetKey: "id",
    });

    Maquinas.belongsTo(ProductMaquinas, {
      foreignKey: "id_producMaquina",
      targetKey: "id",
    });
    
    Maquinas.belongsTo(RedesComplemento, {
      foreignKey: "redes",
      targetKey: "id",
    });

    Complementos.belongsTo(servermanagement, {
      foreignKey: "ServerManagement",
      targetKey: "id",
    });

    Complementos.belongsTo(Almacenamientos,{
      foreignKey:'ObjectStorage',
      targetKey:'id'
    });

    RedesComplemento.belongsTo(RedesPrivadas,{
      foreignKey: 'id_redPrivada',
      targetKey: 'id'
    })
    RedesComplemento.belongsTo(RedesPrivadas,{
      foreignKey: 'id_redPrivada',
      targetKey: 'id'
    })
    RedesComplemento.belongsTo(Ipv4,{
      foreignKey: 'id_ipv4',
      targetKey: 'id'
    })
    RedesComplemento.belongsTo(BandWidth,{
      foreignKey: 'id_bandwidth',
      targetKey: 'id'
    })

    const maquina = await Maquinas.findByPk(id, {
      include: [
        { model: Almacenamientos },
        { model: sistemaOs },
        { model: Regiones },
        { model: ProductMaquinas },
        {model: Complementos, include:[{model: servermanagement},{model: Almacenamientos}]},
        {model: RedesComplemento, include:[{model: RedesPrivadas},{model:Ipv4},{model:BandWidth}]}
      ],
    });
    const region = await Regiones.findAll();
    const bandWidth = await BandWidth.findAll();
    const ipv4 = await Ipv4.findAll();
    const redesPrivadas = await RedesPrivadas.findAll();
    const BackupSpace = await backupspaces.findAll();
    const ObjectStorage = await objectstorages.findAll();
    const ServerManagement = await servermanagement.findAll();
    const Monitoring = await monitorings.findAll();
    const sll_ = await Sll.findAll();
    const sistemaOperativo = await sistemaOs.findAll();
    if (
      !maquina ||
      !region ||
      !bandWidth ||
      !ipv4 ||
      !redesPrivadas ||
      !BackupSpace ||
      !ObjectStorage ||
      !ServerManagement ||
      !Monitoring ||
      !sll_ ||
      !sistemaOperativo
    ) return res.status(401).json({
        msg: "no exiten datos de la maquina",
      });

    res.json({
      maquina,
      bandWidth,
      ipv4,
      region,
      redesPrivadas,
      BackupSpace,
      ObjectStorage,
      ServerManagement,
      Monitoring,
      sll_,
      sistemaOperativo,
    });
  } catch (error) {
    console.log({ error });
    res.status(500).json({
      msg: "Hable con el admin del servidor",
    });
  }
};
