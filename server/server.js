import express from "express";
import cors from "cors";
import DB from "./database.js";
const APP = express();
const PORT = 5000;
APP.use(cors());
APP.use(express.json());
DB.connect();

APP.post("/todos", async (req, res) => {
    try {
        const DESCRIPTION = req.body.description;
        const NEW_TODO = await DB.query(
            "INSERT INTO todos (description)\
            VALUES($1) RETURNING *",
            [DESCRIPTION]
        );
        res.json(NEW_TODO.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

APP.listen(PORT, () => {
    console.log(`Server live on port: ${PORT}`);
});