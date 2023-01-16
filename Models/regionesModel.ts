import {  DataTypes } from "sequelize";
import db from "../conexion/db";

const Regiones = db.define('regiones',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nombreRegion:{
        type:DataTypes.STRING
    },
    precioUnitarioRegion:{
        type: DataTypes.FLOAT
    }

})

export default Regiones;