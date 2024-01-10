/* eslint-disable react/prop-types */
// icons
import { LuFileStack } from "react-icons/lu";
import { FaCalendarAlt } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { AiOutlineLink } from "react-icons/ai";
import { FaCalendar } from "react-icons/fa";

const Card = ({ task }) => {
  return (
    <div className="rounded-xl w-[500px] bg-base-100 shadow-xl text-gray-500">
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
          <div className="flex items-start">
            <LuFileStack size={70} />
            <p className="text-xs px-4">{task?.task_details.slice(0, 200)}</p>
          </div>

          {/* tasks completed */}
          <div className="flex items-center gap-1 bg-base-200 p-1">
            <FaCalendar size={15} />
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
            <FaComments size={15} />
            <p>{task?.number_of_comments}</p>
          </div>

          {/* attachments */}
          <div
            className="flex items-center gap-1 bg-base-200 p-1 cursor-pointer"
            onClick={() => document.getElementById(task?._id).showModal()}
          >
            <AiOutlineLink size={20} />
            {/* modal */}
            <dialog id={task?._id} className="modal">
              <div className="modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">
                  Press ESC key or click on ✕ button to close
                </p>
              </div>
            </dialog>
            <p>{task?.attachment_counts}</p>
          </div>

          {/* date */}
          <div className="flex items-center gap-1 bg-base-200 p-1">
            <FaCalendarAlt size={15} />
            <p>{task?.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
