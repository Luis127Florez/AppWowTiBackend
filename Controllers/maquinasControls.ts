import axios from "axios";
import { Request, Response } from "express";
import Almacenamientos from "../Models/almacenamientoModel";
import backupspaces from "../Models/backupspaceModel";
import BandWidth from "../Models/bandWidthModel";
import Complementos from "../Models/complementosMoldel";
import Compras from "../Models/comprasModel";
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

    Complementos.belongsTo(Almacenamientos, {
      foreignKey: "ObjectStorage",
      targetKey: "id",
    });

    RedesComplemento.belongsTo(RedesPrivadas, {
      foreignKey: "id_redPrivada",
      targetKey: "id",
    });
    RedesComplemento.belongsTo(RedesPrivadas, {
      foreignKey: "id_redPrivada",
      targetKey: "id",
    });
    RedesComplemento.belongsTo(Ipv4, {
      foreignKey: "id_ipv4",
      targetKey: "id",
    });
    RedesComplemento.belongsTo(BandWidth, {
      foreignKey: "id_bandwidth",
      targetKey: "id",
    });

    const maquina = await Maquinas.findByPk(id, {
      include: [
        { model: Almacenamientos },
        { model: sistemaOs },
        { model: Regiones },
        { model: ProductMaquinas },
        {
          model: Complementos,
          include: [{ model: servermanagement }, { model: Almacenamientos }],
        },
        {
          model: RedesComplemento,
          include: [
            { model: RedesPrivadas },
            { model: Ipv4 },
            { model: BandWidth },
          ],
        },
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
    const almacenamiento = await Almacenamientos.findAll();
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
      !sistemaOperativo ||
      !almacenamiento
    )
      return res.status(401).json({
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
      almacenamiento,
    });
  } catch (error) {
    console.log({ error });
    res.status(500).json({
      msg: "Hable con el admin del servidor",
    });
  }
};

export const postMaquina = (req: Request, res: Response) => {
  console.log(req.body);
  const { body } = req;
  try {
    if (!body?.idUser)
      return res.status(401).json({
        url: "/login",
        msg: "usuario tiene que antes haber iniciado session",
      });
    const complementos = Complementos.build({
      ObjectStorage: body?.ObjectStorage,
      BackupSpace: body?.BackupSpace,
      ServerManagement: body?.ServerManagement,
      Monitoring: body?.Monitoring,
      sll_: body?.sll_,
    });

    const redesComplemento = RedesComplemento.build({
      id_redPrivada: body?.id_redPrivada,
      id_bandwidth: body?.id_bandwidth,
      id_ipv4: body?.id_ipv4,
    });

    const maquinas = Maquinas.build({
      region: body?.region,
      id_almacenamiento: body?.id_almacenamiento,
      sistemaOperativo: body?.sistemaOperativo,
      redes: redesComplemento.dataValues.id,
      complementos: complementos.dataValues.id,
      duracionPlazo: body?.duracionPlazo,
      id_producMaquina: body?.id_producMaquina,
    });

    const compras = Compras.build({
      idUser: body?.idUser,
      total: body?.total,
    });

    res.json({
      msg: "listo",
    });
  } catch (error) {
    console.log({ error });
    res.status(500).json({
      msg: "Hable con el admin del servidor",
    });
  }
};


export const GetAllMaquinasContabo = async(req: Request, res: Response)=>{
  try {
    const {access_token_contabo}=req.headers;
    const data = await axios({
      method: 'get',
      url: `https://api.contabo.com/v1/compute/instances`,
      headers: {
          "Authorization": `Bearer ${access_token_contabo}`,
          "x-request-id":"51A87ECD-754E-4104-9C54-D01AD0F83409",
          "x-trace-id":"123214"
      },
    })
    res.json(data.data);
  } catch (error) {
    res.json('habla con el  admin')
    console.log(error);
    
  }
}
