function Addevent() {

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

                <button type="submit" >Save</button>
            </form>
        </div>
    )
}

export default Addevent;