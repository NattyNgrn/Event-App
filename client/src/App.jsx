import { useState } from 'react'
import './App.css'
import Addevent from './components/addevent'
import Bar from './components/bar'
import Event from './components/event'
import Searchbar from './components/searchbar'
import {getEvents} from './server_functions';

function App() {

  const [events, setEvents] = useState([]);

  getEvents().then((result)=>setEvents(result));


  return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    }}>
        <h1>Eventonica</h1>
        <button>Add Event</button>
        <Addevent></Addevent>
        <Searchbar></Searchbar>
        <Bar></Bar>
        {events.map((event) => 
          <Event name={event.name} date={event.date.substring(0,10)} description={event.description} favorite={event.favorite}>
          </Event>
        )}
      </div>
  )
}

export default App
