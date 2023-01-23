import {  DataTypes } from "sequelize";
import db from "../conexion/db";

const Regiones = db.define('regiones',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nombre:{
        type:DataTypes.STRING
    },
    descripcion:{
        type:DataTypes.STRING
    },
    precio:{
        type: DataTypes.FLOAT
    }

})

export default Regiones;