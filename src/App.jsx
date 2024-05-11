import Sidebar from "./components/Sidebar.jsx";
import Taskbar from "./components/Taskbar.jsx";
import Navbar from "./components/Navbar.jsx";

import { useState } from "react";

function App() {
  const [isSideBar, setIsSideBar] = useState(false);
  const [userTasks, setUserTasks] = useState([
    {
      heading: "h1",
      tasks: [
        { t: "hello", completed: false },
        { t: "world", completed: true },
      ],
    },
    {
      heading: "h2",
      tasks: [
        { t: "javascript", completed: false },
        { t: "react", completed: true },
      ],
    },
  ]);
  const [category, setCategory] = useState("Select a Category");

  function onNotesClickHandler() {
    console.log("click");
    setIsSideBar((prevState) => !prevState);
    console.log(isSideBar);
  }

  function addTaskHeading(head) {
    setUserTasks((prevState) => [...prevState, { heading: head, tasks: [] }]);
    console.log(userTasks);
  }

  function editTaskHeading(head, clickedHead) {
    console.log(head);
    console.log(clickedHead);
    console.log("edit");

    setUserTasks((prevUserTasks) => {
      return prevUserTasks.map((taskGroup) => {
        if (taskGroup.heading === clickedHead) {
          return { ...taskGroup, heading: head };
        }
        return taskGroup;
      });
    });

    console.log(userTasks);
  }

  function onSetCategory(title) {
    setCategory(title);
  }

  function appendTask(title) {
    console.log("appendtask");

    if (title.trim() == "") {
      return;
    }

    setUserTasks((prevUserTasks) => {
      return prevUserTasks.map((taskGroup) => {
        if (taskGroup.heading === category) {
          return {
            ...taskGroup,
            tasks: [...taskGroup.tasks, { t: title, completed: false }],
          };
          console.log(taskGroup);
        }
        return taskGroup;
      });
    });
  }

  function strikeThrough(title) {
    console.log("strikeThrough");

    setUserTasks((prevUserTasks) => {
      return prevUserTasks.map((taskGroup) => {
        if (taskGroup.heading === category) {
          const updatedTasks = taskGroup.tasks.map((el) => {
            if (el.t === title) {
              console.log(el.t);
              return {
                ...el,
                completed: !el.completed,
              };
            }
            return el;
          });

          console.log(taskGroup);
          return {
            ...taskGroup,
            tasks: updatedTasks,
          };
        }
        return taskGroup;
      });
    });
  }

  return (
    <>
      <Navbar onNotesClickHandler={onNotesClickHandler} category={category} />
      <Sidebar
        isSideBar={isSideBar}
        onBackClickHandler={onNotesClickHandler}
        userTasks={userTasks}
        addTaskHeading={addTaskHeading}
        editTaskHeading={editTaskHeading}
        onSetCategory={onSetCategory}
      />
      <Taskbar
        userTasks={userTasks}
        category={category}
        appendTask={appendTask}
        strikeThrough={strikeThrough}
      />
    </>
  );
}

export default App;
