import express from "express";
import cors from "cors";
const APP = express();
const PORT = 5000;
APP.use(cors());
APP.use(express.json());

APP.listen(PORT, () => {
    console.log(`Server live on port: ${PORT}`);
});