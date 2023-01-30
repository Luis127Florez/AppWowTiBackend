import { Request, Response , NextFunction} from "express";
import Jwt from "jsonwebtoken";
import Users from "../Models/usersModel";
import { TypeJwt } from "./types";
import  dotenv from "dotenv";
dotenv.config();


export const verificarToken = async (req: Request, res: Response, next:NextFunction) =>{
    try {
        const {token}:any = req.headers
        if(!token)return res.status(403).json({user:null , msg:"token null"});
        const decode = Jwt.verify(token ,`${process.env.PALABRACLAVE}`) as TypeJwt
        const user = await Users.findByPk(decode.id);   
        if (!user)return res.status(404).json({user:null , msg:"Not user found"});
        next();
    } catch (error) {
        console.log(error);
        res.status(404).json("token not foud");    
    }
    
}

export const verificarTokenADMiN = async(req: Request, res:Response, next:NextFunction)=>{
    try {
        const {token}:any = req.headers
        if(!token)return res.status(403).json({user:null , msg:"token null"});
        const decode = Jwt.verify(token , 'wowti') as TypeJwt
        const user = await Users.findByPk(decode.id);   
        if (!user)return res.status(404).json({user:null , msg:"Not user found"});
        if (user.dataValues.role !== "ADMIN") return res.status(404).json({user, msg:"user is not ADMIN"});
        next();    
    } catch (error) {
        console.log(error);
        res.status(404).json("token not foud");    
    }
    
        
}