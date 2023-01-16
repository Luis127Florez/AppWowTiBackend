import { DataTypes } from "sequelize";
import db from "../conexion/db";

const Complementos = db.define('complementos',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true
    },
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
    sll_:{
        type: DataTypes.INTEGER
    }
});

export default Complementos;
