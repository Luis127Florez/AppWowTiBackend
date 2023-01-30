import { Request, Response , NextFunction} from "express";
import axios from "axios";


export const GetTokenContabo = async(req:Request, res:Response, next:NextFunction)=>{
    try {
        const data = await axios({
            method: 'post',
            url: 'https://auth.contabo.com/auth/realms/contabo/protocol/openid-connect/token',
            headers: {"Content-Type": "application/x-www-form-urlencoded"},
            data: {
                client_id: "INT-11681840",
                client_secret: "FY6OIAAms6kq6CiSwhosdiLsqwgKkUMW",
                username: "wowti@wowdesarrollos.com",
                password: "IvB6EvI1993ns$eBNMB4sHTZg4lFm!",
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