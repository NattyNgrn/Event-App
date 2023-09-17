import { addEvent } from "../server_functions";

function Addevent() {
    
    function submit(e){
        e.preventDefault();
        addEvent(name, description, date, favorite)
    }

    return (
        <div>
            <form method="post" onSubmit={submit}>
                <label>
                    Name: <input type="text" name="name"/>
                </label>
    
                <label>
                    Date: <input type="text" name="date"/>
                </label>

                <label>
                    Description: <input type="text" name="descript"/> 
                </label>

                <button type="submit" onClick={addEvent}>Save</button>
            </form>
        </div>
    )
}

export default Addevent;