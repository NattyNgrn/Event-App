import { useState } from 'react';
import './App.css'
import Addevent from './components/addevent'
import Bar from './components/bar';
import Event from './components/event';
import {getEvents} from './server_functions';
import Edit from './components/edit';

function App() {

  const [events, setEvents] = useState([]);
  const [isShown, setIsShown] = useState(false);
  const [editId, setEditId] = useState(-1);
  const [searchName, setSearchName] = useState("");

  async function refresh(){
    const tempEvents = await getEvents();
    setEvents(tempEvents);
  }

  const handleClick = event => setIsShown(current => !current)

  return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}>
        
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            height: '100%',
        }}>
          <h1 style={{margin: '20px'}}>Eventonica</h1>
          <button style={{margin: '20px'}} onClick={handleClick}>Add Event</button>
          {isShown ? <Addevent refesh={refresh}></Addevent> : <div></div>}
        </div>

        <div>
          Search <input type="text" name="search" value={searchName} onChange={(e)=>setSearchName(e.target.value)}/>
        </div>
        <button onClick={refresh}>refresh</button>

        <Bar></Bar>

        {events.map((event) => 
          searchName == event.name ? 
          event.id == editId ? 
            <Edit id={event.id} sName={event.name} sDate={event.date.substring(0,10)} sDescription={event.description} sFavorite={event.favorite} refresh={refresh} setEditId={setEditId}>
            </Edit> :
            <Event id={event.id} name={event.name} date={event.date.substring(0,10)} description={event.description} favorite={event.favorite} refresh={refresh} setEditId={setEditId}>
            </Event>
          :
          <div></div>
        )}

      </div>
  )
}

export default App;
