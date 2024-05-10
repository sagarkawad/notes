import Sidebar from "./components/Sidebar.jsx";
import Taskbar from "./components/Taskbar.jsx";
import Navbar from "./components/Navbar.jsx";

import { useState } from "react";

function App() {
  const [isSideBar, setIsSideBar] = useState(false);
  const [userTasks, setUserTasks] = useState([
    { heading: "h1", tasks: ["hello", "world"] },
    { heading: "h2", tasks: ["javascript", "react"] },
  ]);
  const [category, setCategory] = useState("select a category");

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
      <Taskbar />
    </>
  );
}

export default App;
