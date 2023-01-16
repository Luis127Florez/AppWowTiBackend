import {DataType, DataTypes} from 'sequelize'
import db from '../conexion/db'


const RedesPrivadas = db.define('redesPrivadas',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    descripcion:{
        type: DataTypes.STRING
    },
    precio: {
        type: DataTypes.FLOAT
    }
});

export default RedesPrivadas;