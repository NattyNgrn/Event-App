function Addevent() {
    
    /*function handleSubmit(e){
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
    }*/

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

                <button type="submit" >Save</button>
            </form>
        </div>
    )
}

export default Addevent;