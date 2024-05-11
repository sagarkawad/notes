import Tasks from "./Tasks";
import { useRef } from "react";

export default function Taskbar({
  userTasks,
  category,
  appendTask,
  strikeThrough,
}) {
  let title = useRef();
  return (
    <section className="w-screen h-screen bg-slate-500 flex flex-col justify-center items-center">
      <div>
        <input
          type="text"
          className="mb-4 p-2"
          ref={title}
          maxLength="50"
          required
        />
        <button
          className="p-2 bg-red-400"
          onClick={() => {
            if (title.current.value.length > 50) {
              alert("Length limit exceeded. Length should be <= 50");
              return;
            }

            let ap = appendTask(title.current.value.trim());

            console.log("ap", ap);

            if (ap) {
              title.current.value = "";
            }
          }}
        >
          ➕
        </button>
      </div>
      <Tasks
        userTasks={userTasks}
        category={category}
        strikeThrough={strikeThrough}
      />
    </section>
  );
}
