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
exports.postMaquina = exports.pacthMaquina = exports.getMaquina = exports.getAllProductMaquinas = void 0;
const almacenamientoModel_1 = __importDefault(require("../Models/almacenamientoModel"));
const backupspaceModel_1 = __importDefault(require("../Models/backupspaceModel"));
const bandWidthModel_1 = __importDefault(require("../Models/bandWidthModel"));
const complementosMoldel_1 = __importDefault(require("../Models/complementosMoldel"));
const comprasModel_1 = __importDefault(require("../Models/comprasModel"));
const ipv4Model_1 = __importDefault(require("../Models/ipv4Model"));
const maquinasModel_1 = __importDefault(require("../Models/maquinasModel"));
const monitoringModel_1 = __importDefault(require("../Models/monitoringModel"));
const objectstorageModel_1 = __importDefault(require("../Models/objectstorageModel"));
const productMaquinasModel_1 = __importDefault(require("../Models/productMaquinasModel"));
const redesComplementoModel_1 = __importDefault(require("../Models/redesComplementoModel"));
const redesPrivadas_1 = __importDefault(require("../Models/redesPrivadas"));
const regionesModel_1 = __importDefault(require("../Models/regionesModel"));
const servermanagementModel_1 = __importDefault(require("../Models/servermanagementModel"));
const sistemOsModel_1 = __importDefault(require("../Models/sistemOsModel"));
const sllModel_1 = __importDefault(require("../Models/sllModel"));
const getAllProductMaquinas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productMaquina = yield productMaquinasModel_1.default.findAll();
        if (!productMaquina) {
            return res.status(401).json({
                msg: "Sin productos en la tabla",
            });
        }
        res.json({ productMaquina });
    }
    catch (error) {
        res.status(500).json({
            msg: "Problema con el server",
        });
    }
});
exports.getAllProductMaquinas = getAllProductMaquinas;
const getMaquina = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        //maquina
        maquinasModel_1.default.belongsTo(almacenamientoModel_1.default, {
            foreignKey: "id_almacenamiento",
            targetKey: "id",
        });
        maquinasModel_1.default.belongsTo(sistemOsModel_1.default, {
            foreignKey: "sistemaOperativo",
            targetKey: "id",
        });
        maquinasModel_1.default.belongsTo(regionesModel_1.default, {
            foreignKey: "region",
            targetKey: "id",
        });
        maquinasModel_1.default.belongsTo(productMaquinasModel_1.default, {
            foreignKey: "id_producMaquina",
            targetKey: "id",
        });
        //redes
        redesComplementoModel_1.default.belongsTo(redesPrivadas_1.default, {
            foreignKey: "id_redPrivada",
            targetKey: "id",
        });
        redesComplementoModel_1.default.belongsTo(bandWidthModel_1.default, {
            foreignKey: "id_bandWidth",
            targetKey: "id",
        });
        redesComplementoModel_1.default.belongsTo(ipv4Model_1.default, {
            foreignKey: "id_ipv4",
            targetKey: "id",
        });
        //complementos
        complementosMoldel_1.default.belongsTo(objectstorageModel_1.default, {
            foreignKey: "ObjectStorage",
            targetKey: "id",
        });
        complementosMoldel_1.default.belongsTo(backupspaceModel_1.default, {
            foreignKey: "BackupSpace",
            targetKey: "id",
        });
        complementosMoldel_1.default.belongsTo(servermanagementModel_1.default, {
            foreignKey: "ServerManagement",
            targetKey: "id",
        });
        complementosMoldel_1.default.belongsTo(monitoringModel_1.default, {
            foreignKey: "Monitoring",
            targetKey: "id",
        });
        complementosMoldel_1.default.belongsTo(sllModel_1.default, {
            foreignKey: "sll_",
            targetKey: "id",
        });
        const maquina = yield maquinasModel_1.default.findByPk(id, {
            include: [
                { model: almacenamientoModel_1.default },
                { model: sistemOsModel_1.default },
                { model: regionesModel_1.default },
                { model: productMaquinasModel_1.default },
            ],
        });
        const redes = yield redesComplementoModel_1.default.findByPk(maquina === null || maquina === void 0 ? void 0 : maquina.dataValues.id, {
            include: [
                { model: redesPrivadas_1.default },
                { model: bandWidthModel_1.default },
                { model: ipv4Model_1.default },
            ],
        });
        const complemento = yield complementosMoldel_1.default.findByPk(maquina === null || maquina === void 0 ? void 0 : maquina.dataValues.id, {
            include: [
                { model: objectstorageModel_1.default },
                { model: backupspaceModel_1.default },
                { model: servermanagementModel_1.default },
                { model: monitoringModel_1.default },
                { model: sllModel_1.default },
            ],
        });
        if (!maquina)
            return res.status(401).json({
                msg: "no exiten datos de la maquina",
            });
        if (!redes)
            return res.status(401).json({
                msg: "no exiten datos de la redes de esta maquina",
            });
        if (!complemento)
            return res.status(401).json({
                msg: "no exiten complementos de esta maquina",
            });
        res.json({ maquina, redes, complemento });
    }
    catch (error) {
        console.log({ error });
        res.status(500).json({
            msg: "Hable con el admin del servidor",
        });
    }
});
exports.getMaquina = getMaquina;
const pacthMaquina = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        //maquina
        maquinasModel_1.default.belongsTo(almacenamientoModel_1.default, {
            foreignKey: "id_almacenamiento",
            targetKey: "id",
        });
        maquinasModel_1.default.belongsTo(sistemOsModel_1.default, {
            foreignKey: "sistemaOperativo",
            targetKey: "id",
        });
        maquinasModel_1.default.belongsTo(regionesModel_1.default, {
            foreignKey: "region",
            targetKey: "id",
        });
        maquinasModel_1.default.belongsTo(complementosMoldel_1.default, {
            foreignKey: "complementos",
            targetKey: "id",
        });
        maquinasModel_1.default.belongsTo(productMaquinasModel_1.default, {
            foreignKey: "id_producMaquina",
            targetKey: "id",
        });
        maquinasModel_1.default.belongsTo(redesComplementoModel_1.default, {
            foreignKey: "redes",
            targetKey: "id",
        });
        complementosMoldel_1.default.belongsTo(servermanagementModel_1.default, {
            foreignKey: "ServerManagement",
            targetKey: "id",
        });
        complementosMoldel_1.default.belongsTo(almacenamientoModel_1.default, {
            foreignKey: "ObjectStorage",
            targetKey: "id",
        });
        redesComplementoModel_1.default.belongsTo(redesPrivadas_1.default, {
            foreignKey: "id_redPrivada",
            targetKey: "id",
        });
        redesComplementoModel_1.default.belongsTo(redesPrivadas_1.default, {
            foreignKey: "id_redPrivada",
            targetKey: "id",
        });
        redesComplementoModel_1.default.belongsTo(ipv4Model_1.default, {
            foreignKey: "id_ipv4",
            targetKey: "id",
        });
        redesComplementoModel_1.default.belongsTo(bandWidthModel_1.default, {
            foreignKey: "id_bandwidth",
            targetKey: "id",
        });
        const maquina = yield maquinasModel_1.default.findByPk(id, {
            include: [
                { model: almacenamientoModel_1.default },
                { model: sistemOsModel_1.default },
                { model: regionesModel_1.default },
                { model: productMaquinasModel_1.default },
                {
                    model: complementosMoldel_1.default,
                    include: [{ model: servermanagementModel_1.default }, { model: almacenamientoModel_1.default }],
                },
                {
                    model: redesComplementoModel_1.default,
                    include: [
                        { model: redesPrivadas_1.default },
                        { model: ipv4Model_1.default },
                        { model: bandWidthModel_1.default },
                    ],
                },
            ],
        });
        const region = yield regionesModel_1.default.findAll();
        const bandWidth = yield bandWidthModel_1.default.findAll();
        const ipv4 = yield ipv4Model_1.default.findAll();
        const redesPrivadas = yield redesPrivadas_1.default.findAll();
        const BackupSpace = yield backupspaceModel_1.default.findAll();
        const ObjectStorage = yield objectstorageModel_1.default.findAll();
        const ServerManagement = yield servermanagementModel_1.default.findAll();
        const Monitoring = yield monitoringModel_1.default.findAll();
        const sll_ = yield sllModel_1.default.findAll();
        const sistemaOperativo = yield sistemOsModel_1.default.findAll();
        const almacenamiento = yield almacenamientoModel_1.default.findAll();
        if (!maquina ||
            !region ||
            !bandWidth ||
            !ipv4 ||
            !redesPrivadas ||
            !BackupSpace ||
            !ObjectStorage ||
            !ServerManagement ||
            !Monitoring ||
            !sll_ ||
            !sistemaOperativo ||
            !almacenamiento)
            return res.status(401).json({
                msg: "no exiten datos de la maquina",
            });
        res.json({
            maquina,
            bandWidth,
            ipv4,
            region,
            redesPrivadas,
            BackupSpace,
            ObjectStorage,
            ServerManagement,
            Monitoring,
            sll_,
            sistemaOperativo,
            almacenamiento,
        });
    }
    catch (error) {
        console.log({ error });
        res.status(500).json({
            msg: "Hable con el admin del servidor",
        });
    }
});
exports.pacthMaquina = pacthMaquina;
const postMaquina = (req, res) => {
    console.log(req.body);
    const { body } = req;
    try {
        if (!(body === null || body === void 0 ? void 0 : body.idUser)) {
            console.log(body === null || body === void 0 ? void 0 : body.idUser);
            return res.status(401).json({ url: '/login', msg: 'usuario tiene que antes haber iniciado session' });
        }
        const complementos = complementosMoldel_1.default.build({
            ObjectStorage: body === null || body === void 0 ? void 0 : body.ObjectStorage,
            BackupSpace: body === null || body === void 0 ? void 0 : body.BackupSpace,
            ServerManagement: body === null || body === void 0 ? void 0 : body.ServerManagement,
            Monitoring: body === null || body === void 0 ? void 0 : body.Monitoring,
            sll_: body === null || body === void 0 ? void 0 : body.sll_,
        });
        const redesComplemento = redesComplementoModel_1.default.build({
            id_redPrivada: body === null || body === void 0 ? void 0 : body.id_redPrivada,
            id_bandwidth: body === null || body === void 0 ? void 0 : body.id_bandwidth,
            id_ipv4: body === null || body === void 0 ? void 0 : body.id_ipv4,
        });
        const maquinas = maquinasModel_1.default.build({
            region: body === null || body === void 0 ? void 0 : body.region,
            id_almacenamiento: body === null || body === void 0 ? void 0 : body.id_almacenamiento,
            sistemaOperativo: body === null || body === void 0 ? void 0 : body.sistemaOperativo,
            redes: redesComplemento.dataValues.id,
            complementos: complementos.dataValues.id,
            duracionPlazo: body === null || body === void 0 ? void 0 : body.duracionPlazo,
            id_producMaquina: body === null || body === void 0 ? void 0 : body.id_producMaquina
        });
        const compras = comprasModel_1.default.build({
            idUser: body === null || body === void 0 ? void 0 : body.idUser,
            total: body === null || body === void 0 ? void 0 : body.total
        });
        res.json({
            msg: "listo",
        });
    }
    catch (error) {
        console.log({ error });
        res.status(500).json({
            msg: "Hable con el admin del servidor",
        });
    }
};
exports.postMaquina = postMaquina;
//# sourceMappingURL=maquinasControls.js.map