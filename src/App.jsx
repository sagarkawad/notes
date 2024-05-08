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

  function onNotesClickHandler() {
    console.log("click");
    setIsSideBar((prevState) => !prevState);
    console.log(isSideBar);
  }

  function addTaskHeading(head) {
    setUserTasks((prevState) => [...prevState, { heading: head, tasks: [] }]);
    console.log(userTasks);
  }

  return (
    <>
      <Navbar onNotesClickHandler={onNotesClickHandler} />
      <Sidebar
        isSideBar={isSideBar}
        onBackClickHandler={onNotesClickHandler}
        userTasks={userTasks}
        addTaskHeading={addTaskHeading}
      />
      <Taskbar />
    </>
  );
}

export default App;
