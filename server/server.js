import express from "express";
import cors  from "cors"
import path from "path";
import dotenv from "dotenv";
import DB from "./databasepg.js"
import bodyParser from "body-parser";

dotenv.config();
const app = express();
const port = 8080;

//conifguring cors middleware
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

DB.connect();

app.get("/", (req, res) => {
    res.json("WELCOME");
});

app.get('/events', async (req, res) =>{
    try{
        const id = req.params.id;
        const result = await DB.query(`SELECT * FROM eventsTable;`);
        const rows = result.rows;
        res.send(rows);
    } catch(error){
        console.log(error);
        return res.status(400).json({error});
    }
});

app.get('/events/:id', async (req, res) =>{
    try{
        const id = req.params.id;
        const result = await DB.query(`SELECT * FROM eventsTable WHERE id=${id};`);
        const rows = result.rows;
        res.send(rows[0]);
    } catch(error){
        console.log(error);
        return res.status(400).json({error});
    }
});

app.post('/addEvent', async (req, res) => {
    try{
        const {name, date, description, favorite} = req.body;
        console.log(req.body);
        const result = await DB.query(`
            INSERT INTO eventsTable (name, date, description, favorite)
            VALUES ('${name}', '${date}', '${description}', '${favorite}');
        `);
        res.send("success");
    } catch(error){
        console.log(error);
        return res.status(400).json({error});
    
    }
});

app.put('/updateEvent/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const {name, date, description, favorite} = req.body;
        const result = await DB.query(`
            UPDATE eventsTable
            SET name=${name}, date=${date}, description=${description}, favorite=${favorite}
            WHERE id=${id};
        `);
        res.send(0);
    } catch(error){
        console.log(error);
        return res.status(400).json({error});
    }
});

app.delete('/delete/:id', async(req, res) => {
    try{
        const id = req.params.id;
        const result = await DB.query(`DELETE FROM eventsTable WHERE id=${id};`);
        res.send(0);
    } catch(error){
        console.log(error);
        return res.status(400).json({error});
    }
});

app.listen(port, () => console.log(`listening at http://localhost:${port}`));
