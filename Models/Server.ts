import express, { Application } from 'express'
import cors from 'cors';
import userRoutes from '../Routers/usersRoutes';
import db from '../conexion/db';
import asignacionesRoutes from '../Routers/asignaciones';


class Server {
    private App: Application;
    private Port: string;
    private apiPaht={
        users: '/app/users',
        asignaciones: '/app/asignaciones'
    }
    constructor() {
        this.App = express();
        this.Port = process.env.Port || '8002';
        this.midelwares();
        this.rutas();
        this.conexion();
    }

    listen(){
        this.App.listen(this.Port,()=>{
            console.log(`el server esta corriendo en el puerto ${this.Port}`);
        });
    }
    midelwares(){
        this.App.use(cors());
        this.App.use(express.json());
        this.App.use(express.static('public'));
    }
    rutas(){
        this.App.use(this.apiPaht.users, userRoutes)
        this.App.use(this.apiPaht.asignaciones, asignacionesRoutes)
    }
    async conexion(){
        try{ 
        await db.authenticate();
        console.log('Connection has been established successfully.');
        } catch (error) {
        console.error('Unable to connect to the database:', error);
        }
    } 
}

export default Server;