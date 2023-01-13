import {  DataTypes } from "sequelize";
import db from "../conexion/db";

const RedesComplemento = db.define('redesComplemento',{
    id:{
        type: DataTypes.INTEGER
    },
    id_redPrivada:{
        type:DataTypes.INTEGER
    },
    id_bandwidth:{
        type: DataTypes.INTEGER
    },
    id_ipv4:{
        type: DataTypes.INTEGER
    }
})

export default RedesComplemento;