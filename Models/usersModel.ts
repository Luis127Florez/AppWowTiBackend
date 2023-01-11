import {  DataTypes } from "sequelize";
import db from "../conexion/db";

const Users = db.define('usuarios',{
    nombre:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    contraseña:{
        type: DataTypes.STRING
    },
    N_identificacion:{
        type:DataTypes.INTEGER
    },
    estado:{
        type:DataTypes.BOOLEAN,
        defaultValue: true 
    },
    role:{
        type: DataTypes.STRING
    }
})

export default Users;