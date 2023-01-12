import {  DataTypes } from "sequelize";
import db from "../conexion/db";

const Compras = db.define('compras',{
    idUser:{
        type: DataTypes.INTEGER
    },
    total:{
        type: DataTypes.FLOAT
    },
    estado:{
        type: DataTypes.BOOLEAN
    }
});


export default Compras;