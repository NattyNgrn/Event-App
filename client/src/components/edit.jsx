import { editEvent } from "../server_functions";
import { useState } from "react";

function Edit({id, sName, sDate, sDescription, sFavorite, refresh, setEditId}) {
    const [name, setName] = useState(sName);
    const [date, setDate] = useState(sDate);
    const [description, setDescription] = useState(sDescription);
    const [favorite, setFavorite] = useState(sFavorite);
    
    async function submit(e){
        e.preventDefault();
        const result = await editEvent(id, name, description, date, favorite);
        await refresh();
        
        setEditId(-1);
    }

    return (
        <div>
            <form>
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

                <button onClick={submit}>Save</button>
            </form>
        </div>
    )
}

export default Edit;