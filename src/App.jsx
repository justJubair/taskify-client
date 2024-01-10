import TaskColumn from "./components/TaskColumn/TaskColumn";
import { Toaster } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function App() {

  const {data, refetch} = useQuery({
    queryKey: ["tasks"],
    queryFn: async()=>{
      const res = await axios("https://taskify-server-xi.vercel.app/tasks")
      return res.data
    }
  })

  return (
    <>
      {/* manually create columns */}

      <div className="px-10 h-screen grid grid-cols-6 gap-4 overflow-x-scroll w-[3200px]">
        {/* incomplete column */}
        <TaskColumn title="Incomplete" tasks={data} from={0} to={10} color="red" refetch={refetch}/>

        {/* to do column */}
        <TaskColumn title="To Do" tasks={data} from={25} to={35} color="blue" refetch={refetch}/>

        {/* doing column */}
        <TaskColumn title="Doing" tasks={data} from={11} to={18} color="yellow" refetch={refetch}/>

        {/* under review column */}
        <TaskColumn title="Under Review" tasks={data} from={36} to={42} color="violet" refetch={refetch}/>

        {/* completed column */}
        <TaskColumn title="Completed" tasks={data} from={45} to={55} color="green" refetch={refetch}/>

        {/* overview */}
        <TaskColumn title="Overview" tasks={data} from={56} to={60} color="orange" refetch={refetch}/>
      </div>
      <Toaster/>
    </>
  );
}

export default App;
