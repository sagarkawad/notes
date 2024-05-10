import Tasks from "./Tasks";
import { useRef } from "react";

export default function Taskbar({ userTasks, category, appendTask }) {
  let title = useRef();
  return (
    <section className="w-screen h-screen bg-slate-500 flex flex-col justify-center items-center">
      <div>
        <input type="text" className="mb-4 p-2" ref={title} />
        <button
          className="p-2 bg-red-400"
          onClick={() => {
            appendTask(title.current.value);
            title.current.value = "";
          }}
        >
          ➕
        </button>
      </div>
      <Tasks userTasks={userTasks} category={category} />
    </section>
  );
}
