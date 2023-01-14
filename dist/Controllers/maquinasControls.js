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
exports.getMaquinas = void 0;
const almacenamientoModel_1 = __importDefault(require("../Models/almacenamientoModel"));
const maquinasModel_1 = __importDefault(require("../Models/maquinasModel"));
const getMaquinas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        maquinasModel_1.default.belongsTo(almacenamientoModel_1.default, {
            foreignKey: 'id_almacenamiento',
            targetKey: 'id'
        });
        /* Maquinas.belongsTo(Almacenamientos,{
            foreignKey: 'almacenamiento',
            targetKey: 'id'
        });
 */
        const maquinas = yield maquinasModel_1.default.findAll({
            include: [{ model: almacenamientoModel_1.default }]
        });
        res.json({ maquinas });
    }
    catch (error) {
        console.log({ error });
        res.status(500).json({
            msg: 'Hable con el admin del servidor'
        });
    }
});
exports.getMaquinas = getMaquinas;
//# sourceMappingURL=maquinasControls.js.map