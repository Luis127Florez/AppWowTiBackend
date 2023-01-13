import { DataTypes } from "sequelize";
import db from "../conexion/db";

const monitorings = db.define('monitoring',{
    tipo:{
        type: DataTypes.STRING
    },
    precio:{
        type: DataTypes.FLOAT
    }
});

export default monitorings;

