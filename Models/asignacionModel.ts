import {  DataTypes } from "sequelize";
import db from "../conexion/db";

const Asignaciones = db.define('asignacions',{
    idProducto:{
        type: DataTypes.INTEGER
    },
    idUser:{
        type:DataTypes.INTEGER
    }
})

export default Asignaciones;