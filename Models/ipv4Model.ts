import { DataTypes } from "sequelize";
import db from "../conexion/db";

const Ipv4 = db.define('ipv4s',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nombre:{
        type: DataTypes.STRING
    },
    descripcion:{
        type: DataTypes.STRING
    },
    cantidad:{
        type: DataTypes.INTEGER
    },
    precio:{
        type: DataTypes.FLOAT
    }
});

export default Ipv4;
