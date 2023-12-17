import dotenv from 'dotenv'
import path from "path";
// again my application folder in container stays at /usr/src/app
dotenv.config({ path: path.resolve('../app/.env') })

export const information =  {
    host : process.env.PMA_HOST_DATABASE,
    user : process.env.SQLD_USERNAME,
    password : process.env.SQLD_PASSWORD ,
    port : process.env.PMA_PORT_DATABASE,
    database : process.env.SQLD_DATABASE
}

