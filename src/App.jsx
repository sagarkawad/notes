import Sidebar from "./components/Sidebar.jsx";
import Taskbar from "./components/Taskbar.jsx";
import Navbar from "./components/Navbar.jsx";

import { useState, useEffect } from "react";

function App() {
  // Load state from localStorage on component mount

  const initialState = JSON.parse(localStorage.getItem("userTasks")) || [
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
  ];

  let initialCategory =
    JSON.parse(localStorage.getItem("category")) || "Select a Category!";

  const [isSideBar, setIsSideBar] = useState(false);
  const [userTasks, setUserTasks] = useState(initialState);
  const [category, setCategory] = useState(initialCategory);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("userTasks", JSON.stringify(userTasks));
  }, [userTasks]);

  useEffect(() => {
    localStorage.setItem("category", JSON.stringify(category));
  }, [category]);

  function onNotesClickHandler() {
    console.log("click");
    setIsSideBar((prevState) => !prevState);
    console.log(isSideBar);
  }

  function addTaskHeading(head) {
    let duplicate = false;
    userTasks.map((el) => {
      if (el.heading.toLowerCase() === head.trim().toLowerCase()) {
        duplicate = true;
        return;
      }
    });
    if (duplicate) {
      alert("Heading already exists!");
      return false;
    }
    setUserTasks((prevState) => [...prevState, { heading: head, tasks: [] }]);
    return true;
    console.log(userTasks);
  }

  function deleteTaskHeading(headingToDelete) {
    setUserTasks((prevState) => {
      return prevState.filter((taskGroup) => {
        return (
          taskGroup.heading.toLowerCase() !==
          headingToDelete.trim().toLowerCase()
        );
      });
    });
  }

  function editTaskHeading(head, clickedHead) {
    console.log(head);
    console.log(clickedHead);
    console.log("edit");

    let duplicate = false;
    userTasks.map((el) => {
      if (el.heading.toLowerCase() === head.trim().toLowerCase()) {
        duplicate = true;
        return;
      }
    });
    if (duplicate) {
      alert("Heading already exists!");
      return false;
    }

    setUserTasks((prevUserTasks) => {
      return prevUserTasks.map((taskGroup) => {
        if (taskGroup.heading === clickedHead) {
          return { ...taskGroup, heading: head };
        }
        return taskGroup;
      });
    });

    // if (clickedHead === category) {
    //   setCategory("Select a Category!");
    // }

    return true;

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

    let duplicate = false;

    userTasks.map((taskGroup) => {
      if (taskGroup.heading === category) {
        taskGroup.tasks.map((el) => {
          if (el.t.toLowerCase() === title.trim().toLowerCase()) {
            duplicate = true;
            return;
          }
        });
      }
    });

    if (duplicate) {
      alert("Task already exists!");
      return false;
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

    return true;
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

  function onTaskDeleteHandler(title) {
    console.log("onTaskDeleteHandler");

    setUserTasks((prevUserTasks) => {
      return prevUserTasks.map((taskGroup) => {
        if (taskGroup.heading === category) {
          const updatedTasks = taskGroup.tasks.filter((el) => el.t !== title);

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
        deleteTaskHeading={deleteTaskHeading}
        category={category}
      />
      <Taskbar
        userTasks={userTasks}
        category={category}
        appendTask={appendTask}
        strikeThrough={strikeThrough}
        onTaskDeleteHandler={onTaskDeleteHandler}
      />
    </>
  );
}

export default App;
