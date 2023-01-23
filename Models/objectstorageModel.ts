import { DataTypes } from "sequelize";
import db from "../conexion/db";

const objectstorages = db.define('objectstorages',{
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

export default objectstorages;