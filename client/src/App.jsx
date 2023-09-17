import './App.css'
import Addevent from './components/addevent'
import Bar from './components/bar'
import Eventlist from './components/eventlist'
import Searchbar from './components/searchbar'

function App() {

  return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    }}>
        <h1>Eventonica</h1>
        <button onClick={Addevent} text="Call Component">Add Event</button>
        <Searchbar></Searchbar>
        <Bar></Bar>
        <Eventlist name={""} date={""} description={""}></Eventlist>
      </div>
  )
}

export default App
