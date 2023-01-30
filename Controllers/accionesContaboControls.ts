import { Response, Request } from "express";
import axios from 'axios';

export const AccionMaquinaContabo = async(req:Request ,res:Response)=>{
    const {access_token_contabo}=req.headers;
    const {idMaquina} = req.params
    const {accion} = req.params
    let respuestacontabo
    try {
        await axios({
            method: 'post',
            url: `https://api.contabo.com/v1/compute/instances/${idMaquina}/actions/${accion}`,
            headers: {
                "Authorization": `Bearer ${access_token_contabo}`,
                "x-request-id":"51A87ECD-754E-4104-9C54-D01AD0F83409",
                "x-trace-id":"123214"
            }
          }).then((resp)=> respuestacontabo = resp.data)

          res.json(respuestacontabo)
    } catch (error) {
        console.log(error);
        res.json({msg:"error hable con el admin"})
    }
}