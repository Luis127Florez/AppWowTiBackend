import { Request, Response , NextFunction} from "express";
import axios from "axios";
import  dotenv from "dotenv";
dotenv.config();


export const GetTokenContabo = async(req:Request, res:Response, next:NextFunction)=>{
    try {
        const data = await axios({
            method: 'post',
            url: 'https://auth.contabo.com/auth/realms/contabo/protocol/openid-connect/token',
            headers: {"Content-Type": "application/x-www-form-urlencoded"},
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
    } catch (error) {
        console.log(error);
        res.json({msg:"error hable con el admin"})
    }
    
}