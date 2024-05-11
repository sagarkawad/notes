export default function Tasks({ userTasks, category, strikeThrough }) {
  return (
    <section>
      <ol className="list-decimal">
        {userTasks.map((obj) => {
          if (obj.heading === category) {
            console.log(obj);
            return obj.tasks.map((task) => {
              console.log(task);
              return (
                <div className="flex justify-between min-w-28" key={task.t}>
                  <li
                    className={`${
                      task.completed ? "line-through" : null
                    } text-white`}
                  >
                    {task.t}
                  </li>
                  <div>
                    <button
                      onClick={() => {
                        strikeThrough(task.t);
                      }}
                    >
                      ☑️
                    </button>
                    <button>❎</button>
                  </div>
                </div>
              );
            });
          }
        })}
      </ol>
    </section>
  );
}
