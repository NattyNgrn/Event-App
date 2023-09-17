function Edit() {
    async function deleteEvent(id) {
        const result = await fetch(API + `/delete/${id}`);
        console.log(result);
    }
    
    async function editEvent(id, name, description, date, favorite) {
        const result = await fetch(API + `/updateEvent/${id}`, {
            method: "PUT",
            body: JSON.stringify({
                name: name,
                description: description,
                date: date,
                favorite: favorite
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(result);
    }

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
                <button type="delete" onClick={deleteEvent} >Delete</button>
            </form>
        </div>
    )
}

export default Edit;