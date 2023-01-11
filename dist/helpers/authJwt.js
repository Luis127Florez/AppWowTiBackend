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
exports.verificarTokenADMiN = exports.verificarToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const usersModel_1 = __importDefault(require("../Models/usersModel"));
const verificarToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { token } = req.headers;
        if (!token)
            return res.status(403).json({ user: null, msg: "token null" });
        const decode = jsonwebtoken_1.default.verify(token, 'wowti');
        const user = yield usersModel_1.default.findByPk(decode.id);
        if (!user)
            return res.status(404).json({ user: null, msg: "Not user found" });
        next();
    }
    catch (error) {
        console.log(error);
        res.status(404).json("token not foud");
    }
});
exports.verificarToken = verificarToken;
const verificarTokenADMiN = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { token } = req.headers;
        if (!token)
            return res.status(403).json({ user: null, msg: "token null" });
        const decode = jsonwebtoken_1.default.verify(token, 'wowti');
        const user = yield usersModel_1.default.findByPk(decode.id);
        if (!user)
            return res.status(404).json({ user: null, msg: "Not user found" });
        if (user.dataValues.role !== "ADMIN")
            return res.status(404).json({ user, msg: "user is not ADMIN" });
        next();
    }
    catch (error) {
        console.log(error);
        res.status(404).json("token not foud");
    }
});
exports.verificarTokenADMiN = verificarTokenADMiN;
//# sourceMappingURL=authJwt.js.map