import { DataTypes } from "sequelize";
import db from "../conexion/db";

const objectstorages = db.define('objectstorage',{
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

export default objectstorages;