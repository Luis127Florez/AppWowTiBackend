import { DataTypes } from "sequelize";
import db from "../conexion/db";

const backupspaces = db.define('backupspace',{
    tamaño:{
        type: DataTypes.INTEGER
    },
    tipo:{
        type: DataTypes.STRING
    },
    descripcion:{
        type: DataTypes.STRING
    },
    precio:{
        type: DataTypes.FLOAT
    }
});

export default backupspaces;
