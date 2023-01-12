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
const asignaciones_1 = __importDefault(require("../Routers/asignaciones"));
class Server {
    constructor() {
        this.apiPaht = {
            users: "/app/users",
            asignaciones: "/app/asignaciones",
        };
        this.App = (0, express_1.default)();
        this.Port = process.env.Port || "8002";
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
        this.App.use(this.apiPaht.asignaciones, asignaciones_1.default);
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