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
exports.GetTokenContabo = void 0;
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const GetTokenContabo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, axios_1.default)({
            method: 'post',
            url: 'https://auth.contabo.com/auth/realms/contabo/protocol/openid-connect/token',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            data: {
                client_id: `${process.env.CLIENTEIDCONTABO}`,
                client_secret: `${process.env.CLIENTESECRETCONTABO}`,
                username: `${process.env.USERNAMECONTABO}`,
                password: `${process.env.PASSWORDCONTABO}`,
                grant_type: "password"
            }
        });
        req.headers.access_token_contabo = data.data.access_token;
        next();
    }
    catch (error) {
        console.log(error);
        res.json({ msg: "error hable con el admin" });
    }
});
exports.GetTokenContabo = GetTokenContabo;
//# sourceMappingURL=authjwtcontabo.js.map