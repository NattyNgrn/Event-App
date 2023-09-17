import Edit from "./edit.jsx";


function Eventlist({name, date, description}) {

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            height: '100%',
            padding: ""
        }}>
            <button style={{margin: '20px'}}>favorite</button>
            <h2 style={{margin: '20px'}}>{name}</h2>
            <h2 style={{margin: '20px'}}>{date}</h2>
            <h2 style={{margin: '20px'}}>{description}</h2>
            <button onClick={Edit} type="Call Component" style={{margin: '20px'}}>Edit</button>
        </div>
    )
}

export default Eventlist;