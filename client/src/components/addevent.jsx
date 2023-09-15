function Addevent() {
    
    async function addEvent(name, description, date, favorite) {
        const result = await fetch(API + `/addEvent/`, {
            method: "POST",
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
            <form method="post" onSubmit={handleSubmit}>
                <label>
                    Name <input type="text" name="name"/>
                </label>
    
                <label>
                    Date <input type="text" name="date"/>
                </label>

                <label>
                    Description <input type="text" name="descript"/> 
                </label>

                <button type="submit" onClick={}>Save</button>
            </form>
        </div>
    )
}

export default Addevent;