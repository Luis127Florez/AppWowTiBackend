import { DataTypes } from "sequelize";
import db from "../conexion/db";

const maquinas = db.define('maquinas',{
    region:{
        type: DataTypes.STRING
    },
    almacenamiento:{
        type: DataTypes.STRING
    },
    sistemaOperativo:{
        type: DataTypes.STRING
    },
    redes:{
        type: DataTypes.STRING
    },
    complementos:{
        type: DataTypes.STRING
    },
    duracionPlazo:{
        type: DataTypes.STRING
    }
});

export default maquinas;