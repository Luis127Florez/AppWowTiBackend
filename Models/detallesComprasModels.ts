import { DataTypes } from "sequelize";
import db from "../conexion/db";

const detallesCompras = db.define('detallecompra',{
    id_compra:{
        type: DataTypes.INTEGER
    },
    cantidad:{
        type: DataTypes.INTEGER
    },
    idMaquina:{
        type: DataTypes.INTEGER
    },
    precioUnitario:{
        type: DataTypes.FLOAT
    },
    importe:{
        type: DataTypes.FLOAT
    }
})