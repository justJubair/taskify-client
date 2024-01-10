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
        <TaskColumn title="Incomplete" tasks={tasks} from={0} to={4} />

        {/* to do column */}
        <TaskColumn title="To Do" tasks={tasks} from={5} to={6} />

        {/* doing column */}
        <TaskColumn title="Doing" tasks={tasks} from={8} to={10} />

        {/* under review column */}
        <TaskColumn title="Under Review" tasks={tasks} from={0} to={3} />

        {/* completed column */}
        <TaskColumn title="Completed" tasks={tasks} from={4} to={9}/>

        {/* overview */}
        <TaskColumn title="Overview" tasks={tasks} from={0} to={2} />
      </div>
    </>
  );
}

export default App;
