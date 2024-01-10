/* eslint-disable react/prop-types */
// icons
import { LuFileStack } from "react-icons/lu";
import { FaCalendarAlt } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { AiOutlineLink } from "react-icons/ai";
import { FaCalendar } from "react-icons/fa";

const Card = ({task}) => {
  return (
    <div className="card w-[500px] bg-base-100 shadow-xl text-gray-500">
      <div className="card-body">
        <div className="flex items-center gap-2">
          <img
            className="w-12 rounded-full h-12 object-cover"
            src={task?.profile_image}
            alt={task?.name}
          />
          <p className="font-bold">{task?.name}</p>
        </div>

        {/* container of task details and task completed */}
        <div className="flex items-center justify-between mt-2">
          {/* task details with icon */}
          <div className="flex items-center gap-2 ">
            <LuFileStack size={20} />
            <p className="text-sm">{task?.task_details}</p>
          </div>

          {/* tasks completed */}
          <div className="flex items-center gap-1 bg-base-200 p-1">
            <FaCalendar size={20} />
            <p className="font-medium ">{`${task?.tasks_completed}/${task?.total_tasks}`}</p>
          </div>
        </div>

        {/* footer icons: attachments, comments and more */}
        <div className="flex justify-end gap-4 font-medium mt-3">
          {/* total completed tasks */}
          <div>
            <p className="bg-base-200 p-1">{task?.total_tasks}+</p>
          </div>

          {/* comments */}
          <div className="flex items-center gap-1 bg-base-200 p-1">
            <FaComments size={20} />
            <p>{task?.number_of_comments}</p>
          </div>

          {/* attachments */}
          <div className="flex items-center gap-1 bg-base-200 p-1">
            <AiOutlineLink size={20} />
            <p>{task?.attachment_counts}</p>
          </div>

          {/* date */}
          <div className="flex items-center gap-1 bg-base-200 p-1">
            <FaCalendarAlt size={20} />
            <p>{task?.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
