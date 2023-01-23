import { DataTypes } from "sequelize";
import db from "../conexion/db";

const servermanagement = db.define('servermanagement',{
    id:{
        type:'id',
        primaryKey: true
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

export default servermanagement;
