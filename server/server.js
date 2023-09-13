import { express } from "express";
import { cors } from "cors"
const app = express();
app.use(cors());

const port = process.env.PORT || 6666;
const DB = "";

async function getDate(DB){

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