import { DataTypes } from "sequelize";
import db from "../conexion/db";

const Maquinas = db.define('maquinas',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nombre:{
        type:DataTypes.STRING
    },
    descripcion:{
        type:DataTypes.STRING
    },
    region:{
        type: DataTypes.INTEGER
    },
    id_almacenamiento:{
        type: DataTypes.INTEGER
    },
    sistemaOperativo:{
        type: DataTypes.INTEGER
    },
    redes:{
        type: DataTypes.INTEGER
    },
    complementos:{
        type: DataTypes.INTEGER
    },
    duracionPlazo:{
        type: DataTypes.STRING
    },
    precio:{
        type: DataTypes.FLOAT
    }
});

export default Maquinas;