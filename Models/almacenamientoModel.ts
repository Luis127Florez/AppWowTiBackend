import {  DataTypes } from "sequelize";
import db from "../conexion/db";

const Almacenamientos = db.define('almacenamientos',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true
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

});

export default Almacenamientos;