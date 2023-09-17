import Edit from "./edit.jsx";
import { deleteEvent } from "../server_functions";

function Event({id, name, date, description, favorite}) {
    function del(){
        deleteEvent(id);
    }
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            height: '100%',
            padding: ""
        }}>
            <button style={{margin: '20px'}}>{favorite}</button>
            <h2>{id}</h2>
            <h2 style={{margin: '20px'}}>{name}</h2>
            <h2 style={{margin: '20px'}}>{date}</h2>
            <h2 style={{margin: '20px'}}>{description}</h2>
            <button onClick={Edit} type="Call Component" style={{margin: '20px'}}>Edit</button>
            <button type="delete" onClick={del} >Delete</button>
        </div>
    )
}

export default Event;