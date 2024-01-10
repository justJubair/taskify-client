import { useState } from "react";
import { useEffect } from "react";
import TaskColumn from "./components/TaskColumn/TaskColumn";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  return (
    <>
      {/* manually create columns */}

      <div className="max-w-screen-xl mx-auto px-4">
        {/* incomplete column */}
        <TaskColumn title="Incomplete" tasks={tasks} from={0} to={4} color="red"/>

        {/* to do column */}
        <TaskColumn title="To Do" tasks={tasks} from={5} to={6} color="blue"/>

        {/* doing column */}
        <TaskColumn title="Doing" tasks={tasks} from={8} to={10} color="yellow"/>

        {/* under review column */}
        <TaskColumn title="Under Review" tasks={tasks} from={0} to={3} color="violet"/>

        {/* completed column */}
        <TaskColumn title="Completed" tasks={tasks} from={4} to={9} color="green"/>

        {/* overview */}
        <TaskColumn title="Overview" tasks={tasks} from={0} to={2} color="orange"/>
      </div>
    </>
  );
}

export default App;
