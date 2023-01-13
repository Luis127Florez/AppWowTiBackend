import { DataTypes } from "sequelize";
import db from "../conexion/db";

const Complementos = db.define('complementos',{
    ObjectStorage:{
        type: DataTypes.INTEGER
    },
    BackupSpace:{
        type: DataTypes.INTEGER
    },
    ServerManagement:{
        type: DataTypes.INTEGER
    },
    Monitoring:{
        type: DataTypes.INTEGER
    },
    SSL:{
        type: DataTypes.INTEGER
    }
});

export default Complementos;
