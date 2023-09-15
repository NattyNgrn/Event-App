import Edit from "./edit.jsx";


function Eventlist(name, date, description) {

    return (
        <div>
            <button>favorite</button>
            <h2>{name}</h2>
            <h2>{date}</h2>
            <h2>{description}</h2>
            <button onClick={Edit} type="Call Component">Edit</button>
        </div>
    )
}

export default Eventlist;