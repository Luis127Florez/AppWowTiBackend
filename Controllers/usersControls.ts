import { Request, Response } from "express";
import { usuario } from "../helpers/types";
import Users from "../Models/usersModel";
import jwt from "jsonwebtoken";

export const GetUser = async (req: Request, res: Response) => {
  try {
    const users = await Users.findAll();
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "hable con el admin" });
  }
};

export const PostUser = async (req: Request, res: Response) => {
  const { body } = req;
  const { email } = body;

  if (!email)
    return res
      .status(404)
      .json({ msg: "se requiere email para esta peticion" });

  try {
    const alreadyUser = await Users.findOne({
      where: {
        email: email,
      },
    });

    if (alreadyUser)
      return res
        .status(404)
        .json({ msg: "ya existe un usuario con ese email" });
    const users =  Users.build(body);
    console.log(users);
    await users.save();
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "hable con el admin" });
  }
};
export const GetUserByid = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await Users.findByPk(id);
    if (!user)
      return res
        .status(404)
        .json({ msg: "no se encontro un usuario con ese id" });
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "hable con el admin" });
  }
};

export const PatchUser = async (req: Request, res: Response) => {
  const { body } = req;
  const { email, contraseña } = body;

  if (!email || !contraseña)
    return res
      .status(404)
      .json({ msg: "se requiere email y contraseña para esta peticion" });

  try {
    const user = await Users.findOne({
      where: {
        email: email,
      },
    });
    if (!user)
      return res.status(404).json({ msg: "Usuario no registrado", user: null });

    if (contraseña !== user.dataValues.contraseña)
      return res.json({ msg: "contraseña erronea", user: null });

    console.log(user.dataValues.id);
    const token = jwt.sign(
      {
        id: user.dataValues.id,
      },
      "wowti",
      { expiresIn: 43200 }
    );

    res.json({ user, token, msg: "sign in" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "hable con el admin" });
  }
};

export const UpdateUser = async (req: Request, res: Response) => {
  const { body } = req;
  const { id } = req.params;
  try {
    const user = await Users.findByPk(id);
    if (!user)
      return res
        .status(404)
        .json({ msg: "no se encontro un usuario con ese id" });
    await user.update(body);
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "hable con el admin" });
  }
};

export const DeleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await Users.findByPk(id);
    if (!user)
      return res
        .status(404)
        .json({ msg: "no se encontro un usuario con ese id" });
    await user.update({ estado: false });
    res.json({ msg: "usuario eliminado" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "hable con el admin" });
  }
};
