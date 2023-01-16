import { DataTypes } from "sequelize";
import db from "../conexion/db";

const Ipv4 = db.define('ipv4s',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    cantidad:{
        type: DataTypes.INTEGER
    },
    precio:{
        type: DataTypes.FLOAT
    }
});

export default Ipv4;
