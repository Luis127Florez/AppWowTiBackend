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
exports.GetDetalleCompraById = exports.GetCompras = void 0;
const comprasModel_1 = __importDefault(require("../Models/comprasModel"));
const usersModel_1 = __importDefault(require("../Models/usersModel"));
const maquinasModel_1 = __importDefault(require("../Models/maquinasModel"));
const detallesComprasModels_1 = __importDefault(require("../Models/detallesComprasModels"));
const productMaquinasModel_1 = __importDefault(require("../Models/productMaquinasModel"));
const GetCompras = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        comprasModel_1.default.belongsTo(usersModel_1.default, {
            foreignKey: "idUser",
            targetKey: "id",
        });
        const compras = yield comprasModel_1.default.findAll({ include: [{ model: usersModel_1.default }] });
        res.json(compras);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: "hable con el admin" });
    }
});
exports.GetCompras = GetCompras;
const GetDetalleCompraById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idCompra } = req.params;
    try {
        detallesComprasModels_1.default.belongsTo(maquinasModel_1.default, {
            foreignKey: "idMaquina",
            targetKey: "id",
        });
        maquinasModel_1.default.belongsTo(productMaquinasModel_1.default, {
            foreignKey: "id_producMaquina",
            targetKey: "id",
        });
        const detallecompra = yield detallesComprasModels_1.default.findAll({ where: {
                id_compra: idCompra
            }, include: [{ model: maquinasModel_1.default, include: [{ model: productMaquinasModel_1.default }] }] });
        res.json(detallecompra);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: "hable con el admin" });
    }
});
exports.GetDetalleCompraById = GetDetalleCompraById;
//# sourceMappingURL=comprasControls.js.map