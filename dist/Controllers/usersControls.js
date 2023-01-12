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
exports.DeleteUser = exports.UpdateUser = exports.PatchUser = exports.GetUserByid = exports.PostUser = exports.GetUser = void 0;
const usersModel_1 = __importDefault(require("../Models/usersModel"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const GetUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield usersModel_1.default.findAll();
        res.json(users);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: "hable con el admin" });
    }
});
exports.GetUser = GetUser;
const PostUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { email } = body;
    if (!email)
        return res
            .status(404)
            .json({ msg: "se requiere email para esta peticion" });
    try {
        const alreadyUser = yield usersModel_1.default.findOne({
            where: {
                email: email,
            },
        });
        if (alreadyUser)
            return res
                .status(404)
                .json({ msg: "ya existe un usuario con ese email" });
        const users = yield usersModel_1.default.build(body);
        console.log(users);
        yield users.save();
        res.json(users);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: "hable con el admin" });
    }
});
exports.PostUser = PostUser;
const GetUserByid = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const user = yield usersModel_1.default.findByPk(id);
        if (!user)
            return res
                .status(404)
                .json({ msg: "no se encontro un usuario con ese id" });
        res.json(user);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: "hable con el admin" });
    }
});
exports.GetUserByid = GetUserByid;
const PatchUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { email, contraseña } = body;
    if (!email || !contraseña)
        return res
            .status(404)
            .json({ msg: "se requiere email y contraseña para esta peticion" });
    try {
        const user = yield usersModel_1.default.findOne({
            where: {
                email: email,
            },
        });
        if (!user)
            return res.status(404).json({ msg: "Usuario no registrado", user: null });
        if (contraseña !== user.dataValues.contraseña)
            return res.json({ msg: "contraseña erronea", user: null });
        console.log(user.dataValues.id);
        const token = jsonwebtoken_1.default.sign({
            id: user.dataValues.id,
        }, "wowti", { expiresIn: 43200 });
        res.json({ user, token, msg: "sign in" });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: "hable con el admin" });
    }
});
exports.PatchUser = PatchUser;
const UpdateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const user = yield usersModel_1.default.findByPk(id);
        if (!user)
            return res
                .status(404)
                .json({ msg: "no se encontro un usuario con ese id" });
        yield user.update(body);
        res.json(user);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: "hable con el admin" });
    }
});
exports.UpdateUser = UpdateUser;
const DeleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const user = yield usersModel_1.default.findByPk(id);
        if (!user)
            return res
                .status(404)
                .json({ msg: "no se encontro un usuario con ese id" });
        yield user.update({ estado: false });
        res.json({ msg: "usuario eliminado" });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: "hable con el admin" });
    }
});
exports.DeleteUser = DeleteUser;
//# sourceMappingURL=usersControls.js.map