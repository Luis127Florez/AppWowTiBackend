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
exports.AccionMaquinaContabo = void 0;
const axios_1 = __importDefault(require("axios"));
const AccionMaquinaContabo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { access_token_contabo } = req.headers;
    const { idMaquina } = req.params;
    const { accion } = req.params;
    let respuestacontabo;
    try {
        yield (0, axios_1.default)({
            method: 'post',
            url: `https://api.contabo.com/v1/compute/instances/${idMaquina}/actions/${accion}`,
            headers: {
                "Authorization": `Bearer ${access_token_contabo}`,
                "x-request-id": "51A87ECD-754E-4104-9C54-D01AD0F83409",
                "x-trace-id": "123214"
            }
        }).then((resp) => respuestacontabo = resp.data);
        res.json(respuestacontabo);
    }
    catch (error) {
        console.log(error);
        res.json({ msg: "error hable con el admin" });
    }
});
exports.AccionMaquinaContabo = AccionMaquinaContabo;
//# sourceMappingURL=accionesContaboControls.js.map