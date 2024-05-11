import Tasks from "./Tasks";
import { useRef } from "react";

export default function Taskbar({
  userTasks,
  category,
  appendTask,
  strikeThrough,
  onTaskDeleteHandler,
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
          disabled={category === "Select a Category!"}
        />
        <button
          className="p-2 bg-red-400"
          onClick={() => {
            if (title.current.value.length > 20) {
              alert(
                `Length of the input = ${title.current.value.length}. Length should be <= 20`
              );
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
        onTaskDeleteHandler={onTaskDeleteHandler}
      />
    </section>
  );
}
