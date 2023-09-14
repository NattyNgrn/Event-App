import { express } from "express";
import { cors } from "cors"
import path, { dirname } from "path";
import dotenv from "dotenv";
dotenv.config({
    override: true,
    path: path.join(__dirname, "database.env")
})
const app = express();
app.use(cors());
import {pool, client} from "pg";

const pool = new pool({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT
});

const port = process.env.PORT || 6666;
const DB = "";

async function getData(){
    const client = await pool.connect();
    const {rows} = await client.query("SELECT * FROM week9")
    console.log(rows);
}

app.get("/", (req, res) => {
    res.send("WELCOME");
});

app.post(){

}

app.put(){

}

app.delete(){
    
}

app.listen(port, () => console.log(`listening at http://localhost:${port}`));