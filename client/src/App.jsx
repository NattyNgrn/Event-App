import './App.css'
import Addevent from './components/addevent'
import Bar from './components/bar'
import Eventlist from './components/eventlist'
import Searchbar from './components/searchbar'

function App() {

  return (
      <div>
        <h1>Eventonica</h1>
        <Addevent></Addevent>
        <Searchbar></Searchbar>
        <Bar></Bar>
        <Eventlist></Eventlist>
      </div>
  )
}

export default App
