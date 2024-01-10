/* eslint-disable react/prop-types */

import Card from "../Card/Card";

const TaskColumn = ({title, tasks, from, to}) => {
    return(
        <div>
             <h3 className="text-lg font-bold text-gray-500"> {title} </h3>

             {/* tasks */}
             <div >
              {
                tasks?.slice(from, to)?.map(task=> <Card key={task?.name} task={task}/>)
              }
             </div>
        </div>
    )}
export default TaskColumn;