import {  DataTypes } from "sequelize";
import db from "../conexion/db";

const sistemaOs = db.define('sistemaOs',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true
    },
    nombre:{
        type:DataTypes.STRING
    },
    descripcion:{
        type: DataTypes.STRING
    },
    precio:{
        type: DataTypes.FLOAT
    }

})

export default sistemaOs;