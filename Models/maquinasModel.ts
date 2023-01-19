import { DataTypes } from "sequelize";
import db from "../conexion/db";

const Maquinas = db.define('maquinas',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    id_producMaquina:{
        type: DataTypes.INTEGER
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
    
});

export default Maquinas;