// icons
import { LuFileStack } from "react-icons/lu";
import { FaCalendarAlt } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { AiOutlineLink } from "react-icons/ai";
import { FaCalendar } from "react-icons/fa";

function App() {
  return (
    <>
      <div className="card bg-base-100 shadow-xl text-gray-500">
        <div className="card-body">
          <div className="flex items-center gap-2">
            <img
              className="w-12 rounded-full h-12 object-cover"
              src="https://images.pexels.com/photos/4350178/pexels-photo-4350178.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <p className="font-bold">Card title!</p>
          </div>

          {/* container of task details and task completed */}
          <div className="flex items-center justify-between mt-2">
            {/* task details with icon */}
            <div className="flex items-center gap-2 ">
              <LuFileStack size={20} />
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>

            {/* tasks completed */}
            <div className="flex items-center gap-1 bg-base-200 p-1">
              <FaCalendar size={20} />
              <p className="font-medium ">1/2</p>
            </div>
          </div>

          {/* footer icons: attachments, comments and more */}
          <div className="flex justify-end gap-4 font-medium mt-3">
            {/* total completed tasks */}
          <div>
          <p className="bg-base-200 p-1">12+</p>
          </div>

            {/* comments */}
            <div className="flex items-center gap-1 bg-base-200 p-1">
              <FaComments size={20} />
              <p>15</p>
            </div>

            {/* attachments */}
            <div className="flex items-center gap-1 bg-base-200 p-1">
              <AiOutlineLink size={20} />
              <p>4</p>
            </div>

            {/* date */}
            <div className="flex items-center gap-1 bg-base-200 p-1">
              <FaCalendarAlt size={20} />
              <p>30-12-05</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
