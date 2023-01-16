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
exports.getMaquina = exports.getMaquinas = void 0;
const almacenamientoModel_1 = __importDefault(require("../Models/almacenamientoModel"));
const backupspaceModel_1 = __importDefault(require("../Models/backupspaceModel"));
const bandWidthModel_1 = __importDefault(require("../Models/bandWidthModel"));
const complementosMoldel_1 = __importDefault(require("../Models/complementosMoldel"));
const ipv4Model_1 = __importDefault(require("../Models/ipv4Model"));
const maquinasModel_1 = __importDefault(require("../Models/maquinasModel"));
const monitoringModel_1 = __importDefault(require("../Models/monitoringModel"));
const objectstorageModel_1 = __importDefault(require("../Models/objectstorageModel"));
const redesComplementoModel_1 = __importDefault(require("../Models/redesComplementoModel"));
const redesPrivadas_1 = __importDefault(require("../Models/redesPrivadas"));
const regionesModel_1 = __importDefault(require("../Models/regionesModel"));
const servermanagementModel_1 = __importDefault(require("../Models/servermanagementModel"));
const sistemOsModel_1 = __importDefault(require("../Models/sistemOsModel"));
const sllModel_1 = __importDefault(require("../Models/sllModel"));
const getMaquinas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //maquinas
        maquinasModel_1.default.belongsTo(almacenamientoModel_1.default, {
            foreignKey: 'id_almacenamiento',
            targetKey: 'id'
        });
        maquinasModel_1.default.belongsTo(sistemOsModel_1.default, {
            foreignKey: 'sistemaOperativo',
            targetKey: 'id'
        });
        maquinasModel_1.default.belongsTo(regionesModel_1.default, {
            foreignKey: 'region',
            targetKey: 'id'
        });
        //Redes
        redesComplementoModel_1.default.belongsTo(redesPrivadas_1.default, {
            foreignKey: 'id_redPrivada',
            targetKey: 'id'
        });
        redesComplementoModel_1.default.belongsTo(bandWidthModel_1.default, {
            foreignKey: 'id_bandWidth',
            targetKey: 'id'
        });
        redesComplementoModel_1.default.belongsTo(ipv4Model_1.default, {
            foreignKey: 'id_ipv4',
            targetKey: 'id'
        });
        //complementos
        complementosMoldel_1.default.belongsTo(objectstorageModel_1.default, {
            foreignKey: 'ObjectStorage',
            targetKey: 'id'
        });
        complementosMoldel_1.default.belongsTo(backupspaceModel_1.default, {
            foreignKey: 'BackupSpace',
            targetKey: 'id'
        });
        complementosMoldel_1.default.belongsTo(servermanagementModel_1.default, {
            foreignKey: 'ServerManagement',
            targetKey: 'id'
        });
        complementosMoldel_1.default.belongsTo(monitoringModel_1.default, {
            foreignKey: 'Monitoring',
            targetKey: 'id'
        });
        complementosMoldel_1.default.belongsTo(sllModel_1.default, {
            foreignKey: 'sll_',
            targetKey: 'id'
        });
        //obtencion de datos maquinas, redes
        const maquinas = yield maquinasModel_1.default.findAll({
            include: [{ model: almacenamientoModel_1.default }, { model: sistemOsModel_1.default }, { model: regionesModel_1.default }]
        });
        const redes = yield redesComplementoModel_1.default.findAll({
            include: [{ model: redesPrivadas_1.default }, { model: bandWidthModel_1.default }, { model: ipv4Model_1.default }]
        });
        const complementos = yield complementosMoldel_1.default.findAll({
            include: [{ model: objectstorageModel_1.default }, { model: backupspaceModel_1.default }, { model: servermanagementModel_1.default }, { model: monitoringModel_1.default }, { model: sllModel_1.default }]
        });
        res.json({ maquinas, redes, complementos });
    }
    catch (error) {
        console.log({ error });
        res.status(500).json({
            msg: 'Hable con el admin del servidor'
        });
    }
});
exports.getMaquinas = getMaquinas;
const getMaquina = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        //maquina
        maquinasModel_1.default.belongsTo(almacenamientoModel_1.default, {
            foreignKey: 'id_almacenamiento',
            targetKey: 'id'
        });
        maquinasModel_1.default.belongsTo(sistemOsModel_1.default, {
            foreignKey: 'sistemaOperativo',
            targetKey: 'id'
        });
        maquinasModel_1.default.belongsTo(regionesModel_1.default, {
            foreignKey: 'region',
            targetKey: 'id'
        });
        //redes
        redesComplementoModel_1.default.belongsTo(redesPrivadas_1.default, {
            foreignKey: 'id_redPrivada',
            targetKey: 'id'
        });
        redesComplementoModel_1.default.belongsTo(bandWidthModel_1.default, {
            foreignKey: 'id_bandWidth',
            targetKey: 'id'
        });
        redesComplementoModel_1.default.belongsTo(ipv4Model_1.default, {
            foreignKey: 'id_ipv4',
            targetKey: 'id'
        });
        //complementos
        complementosMoldel_1.default.belongsTo(objectstorageModel_1.default, {
            foreignKey: 'ObjectStorage',
            targetKey: 'id'
        });
        complementosMoldel_1.default.belongsTo(backupspaceModel_1.default, {
            foreignKey: 'BackupSpace',
            targetKey: 'id'
        });
        complementosMoldel_1.default.belongsTo(servermanagementModel_1.default, {
            foreignKey: 'ServerManagement',
            targetKey: 'id'
        });
        complementosMoldel_1.default.belongsTo(monitoringModel_1.default, {
            foreignKey: 'Monitoring',
            targetKey: 'id'
        });
        complementosMoldel_1.default.belongsTo(sllModel_1.default, {
            foreignKey: 'sll_',
            targetKey: 'id'
        });
        const maquina = yield maquinasModel_1.default.findByPk(id, {
            include: [{ model: almacenamientoModel_1.default }, { model: sistemOsModel_1.default }, { model: regionesModel_1.default }]
        });
        const redes = yield redesComplementoModel_1.default.findByPk(maquina === null || maquina === void 0 ? void 0 : maquina.dataValues.id, {
            include: [{ model: redesPrivadas_1.default }, { model: bandWidthModel_1.default }, { model: ipv4Model_1.default }]
        });
        const complemento = yield complementosMoldel_1.default.findByPk(maquina === null || maquina === void 0 ? void 0 : maquina.dataValues.id, {
            include: [{ model: objectstorageModel_1.default }, { model: backupspaceModel_1.default }, { model: servermanagementModel_1.default }, { model: monitoringModel_1.default }, { model: sllModel_1.default }]
        });
        res.json({ maquina, redes, complemento });
    }
    catch (error) {
        console.log({ error });
        res.status(500).json({
            msg: 'Hable con el admin del servidor'
        });
    }
});
exports.getMaquina = getMaquina;
//# sourceMappingURL=maquinasControls.js.map