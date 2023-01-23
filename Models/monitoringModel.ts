import { DataTypes } from "sequelize";
import db from "../conexion/db";

const monitorings = db.define('monitoring',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true
    },
    nombre:{
        type: DataTypes.STRING
    },
    descripcion:{
        type: DataTypes.STRING
    },
    precio:{
        type: DataTypes.FLOAT
    }
});

export default monitorings;

