
import { editEvent } from "../server_functions";

function Edit() {
    

    return (
        <div>
            <form>
                <label>
                    Name <input type="text" name="name"/>
                </label>
                
                <label>
                    Date <input type="text" name="date"/>
                </label>
                
                <label>
                    Description <input type="text" name="descript"/>
                </label>
                
                <button type="submit" onClick={editEvent}>Save</button>
            </form>
        </div>
    )
}

export default Edit;