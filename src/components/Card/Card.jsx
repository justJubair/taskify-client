/* eslint-disable react/prop-types */
// icons
import { LuFileStack } from "react-icons/lu";
import { FaCalendarAlt } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { AiOutlineLink } from "react-icons/ai";
import { FaCalendar } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

const Card = ({ task }) => {
  // State to keep track of selected files
  const [selectedFiles, setSelectedFiles] = useState([]);

  // Event handler for file selection
  const handleFileChange = (e) => {
    // Extract selected files from the event
    const files = e.target.files;

    // Update state by combining existing files with newly selected files
    setSelectedFiles([...selectedFiles, ...files]);
  };

  const handleAttachments = async(e)=>{
    e.preventDefault()
    try{
        const res = await axios.patch(`http://localhost:5000/task/${task?._id}`, {count: selectedFiles.length})
        console.log(res.data)
    }
    catch(err){
      console.log(err)
    }

  }

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
                <h3 className="font-bold text-lg">Attach files!</h3>
                <p className="py-4">Add relevant attachments to this task</p>

                <form onSubmit={handleAttachments}>
                  {/* Input element for file selection with multiple attributes */}
                  <input
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    className="file-input file-input-bordered w-full max-w-xs"
                  />

                  {/* Display selected files */}
                  {selectedFiles.length > 0 && (
                    <div className="mt-4">
                      <h3 className="text-blue-600">*Selected Attachments</h3>
                      <ul>
                        {selectedFiles?.map((file, index) => (
                          <li key={index}>{file?.name}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <button type="submit" className="btn btn-block mt-6 uppercase">Upload Attachments</button>
                </form>
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
