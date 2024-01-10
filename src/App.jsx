import { useState } from "react";
import { useEffect } from "react";
import TaskColumn from "./components/TaskColumn/TaskColumn";
import { Toaster } from "react-hot-toast";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  return (
    <>
      {/* manually create columns */}

      <div className="px-10 h-screen grid grid-cols-6 gap-4 overflow-x-scroll w-[3200px]">
        {/* incomplete column */}
        <TaskColumn title="Incomplete" tasks={tasks} from={0} to={10} color="red"/>

        {/* to do column */}
        <TaskColumn title="To Do" tasks={tasks} from={25} to={35} color="blue"/>

        {/* doing column */}
        <TaskColumn title="Doing" tasks={tasks} from={11} to={18} color="yellow"/>

        {/* under review column */}
        <TaskColumn title="Under Review" tasks={tasks} from={36} to={42} color="violet"/>

        {/* completed column */}
        <TaskColumn title="Completed" tasks={tasks} from={45} to={55} color="green"/>

        {/* overview */}
        <TaskColumn title="Overview" tasks={tasks} from={56} to={60} color="orange"/>
      </div>
      <Toaster/>
    </>
  );
}

export default App;
