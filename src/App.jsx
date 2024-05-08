import Sidebar from "./components/Sidebar.jsx";
import Taskbar from "./components/Taskbar.jsx";
import Navbar from "./components/Navbar.jsx";

import { useState } from "react";

function App() {
  const [isSideBar, setIsSideBar] = useState(false);

  function onNotesClickHandler() {
    console.log("click");
    setIsSideBar((prevState) => !prevState);
    console.log(isSideBar);
  }

  return (
    <>
      <Navbar onNotesClickHandler={onNotesClickHandler} />
      <Sidebar isSideBar={isSideBar} onBackClickHandler={onNotesClickHandler} />
      <Taskbar />
    </>
  );
}

export default App;
