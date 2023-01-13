import {  DataTypes } from "sequelize";
import db from "../conexion/db";

const Almacenamientos = db.define('almacenamientos',{
    idAlmacenamiento:{
        type: DataTypes.INTEGER
    },
    tamañoAlmacenamiento:{
        type:DataTypes.STRING
    },
    precioAlmacenamiento:{
        type: DataTypes.FLOAT
    }

})

export default Almacenamientos;