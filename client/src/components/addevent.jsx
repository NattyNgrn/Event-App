import { addEvent } from "../server_functions";
import { useState } from "react";

function Addevent() {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [favorite, setFavorite] = useState(true);
    
    function submit(e){
        e.preventDefault();
        addEvent(name, description, date, favorite);
        setName("")
        setDate("")
        setDescription("")
    }

    return (
        <div>
            <form method="post" onSubmit={submit}>
                <label>
                    Name: <input type="text" value={name} onChange={(e) => {setName(e.target.value)}}/>
                </label>
    
                <label>
                    Date: <input type="date" value={date} onChange={(e) => {setDate(e.target.value)}}/>
                </label>

                <label>
                    Description: <input type="text" value={description} onChange={(e) => {setDescription(e.target.value)}}/> 
                </label>
                <button onClick={(e) => {setFavorite(!favorite)}} >Fave</button>

                <button type="submit" onSubmit={submit}>Save</button>
            </form>
        </div>
    )
}

export default Addevent;