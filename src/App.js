import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

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

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : 'No Tasks To Show'}
    </div>
  );
}

export default App;
