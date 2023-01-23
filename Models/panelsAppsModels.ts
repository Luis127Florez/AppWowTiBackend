import {  DataTypes } from "sequelize";
import db from "../conexion/db";

const PanelsApps = db.define('panelsapps',{
    id:{
        type: DataTypes.INTEGER
    },
    nombre:{
        type:DataTypes.STRING
    },
    descripcion:{
        type:DataTypes.STRING
    },
    precioAlmacenamiento:{
        type: DataTypes.FLOAT
    }

})

export default PanelsApps;