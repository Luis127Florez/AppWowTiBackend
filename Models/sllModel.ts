import { DataTypes } from "sequelize";
import db from "../conexion/db";

const Sll = db.define('slls',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true 
    },
    tipo:{
        type: DataTypes.STRING
    },
    precio:{
        type: DataTypes.FLOAT
    }
});

export default Sll;
