import pg from "pg";
import dotenv from "dotenv";
dotenv.config(); 

const DB = new pg.Client({
    user: process.env.DB_USER_NAME,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT,
});

export default DB;