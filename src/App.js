import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'

function App() {

  const [tasks, setTasks] = useState([
    {
      "text": "Eat Food",
      "day": "this day",
      "reminder": false,
      "id": 1
    },
    {
      "text": "Eat Wet Ass Pussy",
      "day": "the day after tomorrow",
      "reminder": false,
      "id": 2
    },
    {
      "text": "Fuck chicks",
      "day": "Feb 15th",
      "reminder": false,
      "id": 3
    }
  ])
  
  return (
    <div className="container">
      <Header />
      <Tasks />
    </div>
  );
}

export default App;
