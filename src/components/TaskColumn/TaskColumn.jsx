/* eslint-disable react/prop-types */
import "./TaskColumn.css"

import Card from "../Card/Card";

const TaskColumn = ({title, tasks, from, to, color}) => {
    return(
        <div className="pt-8 overflow-y-auto overflow-x-hidden task-column">
             <div className="flex items-center gap-2">
              {/* color block */}
              <div style={{backgroundColor: color}} className="w-6 h-6 rounded-l-full"></div>
             <h3 className="text-lg font-bold text-gray-500"> {title} </h3>
             </div>

             {/* tasks */}
             <div className="flex flex-col justify-center gap-4">
              {
                tasks?.slice(from, to)?.map(task=> <Card key={task?.name} task={task}/>)
              }
             </div>
        </div>
    )}
export default TaskColumn;