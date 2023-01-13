import { DataTypes } from "sequelize";
import db from "../conexion/db";

const Sll = db.define('sll',{
    tipo:{
        type: DataTypes.STRING
    },
    precio:{
        type: DataTypes.FLOAT
    }
});

export default Sll;
