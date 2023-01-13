import {  DataTypes } from "sequelize";
import db from "../conexion/db";

const Regiones = db.define('regiones',{
    idRegiones:{
        type: DataTypes.INTEGER
    },
    nombreRegion:{
        type:DataTypes.STRING
    },
    precioUnitarioRegion:{
        type: DataTypes.FLOAT
    }

})

export default Regiones;