import {DataTypes} from 'sequelize';
import db from '../conexion/db';


const BandWidth = db.define('bandWidths',{
    id:{
       type: DataTypes.INTEGER,
       primaryKey: true  
    },
    descripcion:{
        type: DataTypes.STRING
    },
    detalles:{
        type: DataTypes.STRING
    },
    precio:{
        type: DataTypes.FLOAT
    }
});

export default BandWidth;