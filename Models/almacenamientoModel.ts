import {  DataTypes } from "sequelize";
import db from "../conexion/db";

const Almacenamientos = db.define('almacenamientos',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true
    },
    tamañoAlmacenamiento:{
        type:DataTypes.STRING
    },
    precioAlmacenamiento:{
        type: DataTypes.FLOAT
    }

})

export default Almacenamientos;