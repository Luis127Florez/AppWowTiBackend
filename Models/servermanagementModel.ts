import { DataTypes } from "sequelize";
import db from "../conexion/db";

const servermanagement = db.define('servermanagement',{
    tipo:{
        type: DataTypes.STRING
    },
    precio:{
        type: DataTypes.FLOAT
    }
});

export default servermanagement;
