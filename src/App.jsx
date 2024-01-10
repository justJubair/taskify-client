import { useState } from "react";
import Card from "./components/Card/Card";
import { useEffect } from "react";
import TaskColumn from "./components/TaskColumn/TaskColumn";


function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(()=>{
    fetch("data.json")
    .then(res=> res.json())
    .then(data=> setTasks(data))
  },[])

  
  return (
    <>

   {/* manually create columns */}
   
   {/* to do column */}
    <TaskColumn title="Incomplete" tasks={tasks}/>
    <TaskColumn title="To Do" tasks={tasks}/>
    <TaskColumn title="Doing" tasks={tasks}/>
    <TaskColumn title="Under Review" tasks={tasks}/>
    <TaskColumn title="Completed" tasks={tasks}/>
    <TaskColumn title="Overview" tasks={tasks}/>
    </>
  );
}

export default App;
