"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const usersRoutes_1 = __importDefault(require("../Routers/usersRoutes"));
const db_1 = __importDefault(require("../conexion/db"));
const asignacionesRoutes_1 = __importDefault(require("../Routers/asignacionesRoutes"));
const comprasRoutes_1 = __importDefault(require("../Routers/comprasRoutes"));
const maquinasRoutes_1 = __importDefault(require("../Routers/maquinasRoutes"));
const accionesContaboRoutes_1 = __importDefault(require("../Routers/accionesContaboRoutes"));
class Server {
    constructor() {
        this.apiPaht = {
            users: '/app/users',
            asignaciones: '/app/asignaciones',
            comprasRoutes: '/app/compras',
            maquinas: '/app/maquinas'
        };
        this.App = (0, express_1.default)();
        this.Port = process.env.Port || '8002';
        this.midelwares();
        this.rutas();
        this.conexion();
    }
    listen() {
        this.App.listen(this.Port, () => {
            console.log(`el server esta corriendo en el puerto ${this.Port}`);
        });
    }
    midelwares() {
        this.App.use((0, cors_1.default)({
            origin: 'http://127.0.0.1:5173',
            credentials: true
        }));
        this.App.use(express_1.default.json());
        this.App.use(express_1.default.static("public"));
    }
    rutas() {
        this.App.use(this.apiPaht.users, usersRoutes_1.default);
        this.App.use(this.apiPaht.asignaciones, asignacionesRoutes_1.default);
        this.App.use(this.apiPaht.maquinas, maquinasRoutes_1.default);
        this.App.use(this.apiPaht.maquinas, accionesContaboRoutes_1.default);
        this.App.use(this.apiPaht.comprasRoutes, comprasRoutes_1.default);
    }
    conexion() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield db_1.default.authenticate();
                console.log("Connection has been established successfully.");
            }
            catch (error) {
                console.error("Unable to connect to the database:", error);
            }
        });
    }
}
exports.default = Server;
//# sourceMappingURL=Server.js.map