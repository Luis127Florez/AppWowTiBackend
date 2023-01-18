import { DataTypes } from "sequelize";
import db from "../conexion/db";

const ProductMaquinas = db.define('productMaquinas',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true
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

export default ProductMaquinas;