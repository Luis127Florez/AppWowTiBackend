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
exports.DeleteAsignacion = exports.UpdateAsignacion = exports.PostAsignacion = exports.GetAsignacionByIdUser = exports.GetAsignacion = void 0;
const asignacionModel_1 = __importDefault(require("../Models/asignacionModel"));
const usersModel_1 = __importDefault(require("../Models/usersModel"));
const axios_1 = __importDefault(require("axios"));
const GetAsignacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    asignacionModel_1.default.belongsTo(usersModel_1.default, {
        foreignKey: "idUser",
        targetKey: 'id'
    });
    try {
        const asignacion = yield asignacionModel_1.default.findAll({ include: [{ model: usersModel_1.default }] });
        res.json(asignacion);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: "hable con el admin" });
    }
});
exports.GetAsignacion = GetAsignacion;
const GetAsignacionByIdUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idUser } = req.params;
    const { access_token_contabo } = req.headers;
    const dataMaquina = [];
    try {
        const asignacion = yield asignacionModel_1.default.findAll({
            where: {
                idUser: idUser
            }
        });
        let Idmaquina;
        for (let i = 0; i < asignacion.length; i++) {
            Idmaquina = asignacion[i].dataValues.idProducto;
            const data = yield (0, axios_1.default)({
                method: 'get',
                url: `https://api.contabo.com/v1/compute/instances/${Idmaquina}`,
                headers: {
                    "Authorization": `Bearer ${access_token_contabo}`,
                    "x-request-id": "51A87ECD-754E-4104-9C54-D01AD0F83409",
                    "x-trace-id": "123214"
                },
            });
            dataMaquina.push(data.data.data[0]);
        }
        res.json(dataMaquina);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: "hable con el admin" });
    }
});
exports.GetAsignacionByIdUser = GetAsignacionByIdUser;
const PostAsignacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const asignacion = asignacionModel_1.default.build(body);
        yield asignacion.save();
        res.json(asignacion);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: "hable con el admin" });
    }
});
exports.PostAsignacion = PostAsignacion;
const UpdateAsignacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const asignacion = yield asignacionModel_1.default.findByPk(id);
        if (!asignacion)
            return res.status(404).json("no se encontro un user con ese id");
        asignacion.update(body);
        res.json(asignacion);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: "hable con el admin" });
    }
});
exports.UpdateAsignacion = UpdateAsignacion;
const DeleteAsignacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const asignacion = yield asignacionModel_1.default.findByPk(id);
        if (!asignacion)
            return res.status(404).json("no se encontro un user con ese id");
        asignacion.destroy();
        res.json({ msg: "asignacion eliminada con exito" });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: "hable con el admin" });
    }
});
exports.DeleteAsignacion = DeleteAsignacion;
//# sourceMappingURL=asignacionControls.js.map