import express from "express";
import cors from "cors";
import DB from "./database.js";
const APP = express();
const PORT = 5000;
APP.use(cors());
APP.use(express.json());
DB.connect();

// Get all to-dos
APP.get("/todos", async(req, res) => {
    try {
        const ALL_TODOS = await DB.query(
            "SELECT * FROM todos"
        );
        res.json(ALL_TODOS.rows)
    } catch (err) {
        console.log(err.message);
    }
});
// Get to-do based on id
APP.get("/todos/:id", async (req, res) => {
    try {
        const REQUESTED_ID = req.params.id;
        console.log(REQUESTED_ID);
        const REQUESTED_TODO = await DB.query(
            "SELECT * FROM todos WHERE todo_id = $1",
            [REQUESTED_ID]
        );
        if (REQUESTED_TODO.rows.length === 0) {
            return res.status(404).json({ error: "Todo not found" });
        }
        res.json(REQUESTED_TODO.rows);
    } catch (err) {
        console.log(err.message);
    }
});

// Post a to-do
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