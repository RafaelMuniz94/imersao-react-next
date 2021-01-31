//Lambda server - Feature do next
import {NextApiRequest,NextApiResponse} from 'next'
import db from "../../db.json";
export default function Server(req:NextApiRequest, resp:NextApiResponse) {
  //Config para evitar que requisicoes publicas tenham problemas para acessar

  if (req.method === "OPTIONS") {
    resp.status(200).end();
    return;
  }

  resp.setHeader(`Access-Control-Allow-Credentials`,'true')
  resp.setHeader(`Access-Control-Allow-Origin`,'*')
  resp.setHeader(`Access-Control-Allow-Methods`,'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  resp.json(db);
}
