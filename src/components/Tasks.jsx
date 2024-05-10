export default function Tasks({ userTasks, category }) {
  return (
    <section>
      <ol className="list-decimal">
        {userTasks.map((obj) => {
          if (obj.heading === category) {
            console.log(obj);
            return obj.tasks.map((task) => {
              console.log(task);
              return (
                <div className="flex justify-between min-w-28" key={task}>
                  <li>{task}</li>
                  <div>
                    <button>☑️</button>
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
