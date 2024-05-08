import Dialog from "./Dialog";

import { useState } from "react";

export default function Sidebar({ isSideBar, onBackClickHandler }) {
  console.log(isSideBar);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  function onClickHandler() {
    setIsDialogOpen((prevState) => !prevState);
  }

  return (
    <>
      <dialog open={isSideBar} className="bg-red-400 h-screen w-48 p-4">
        <div className="flex justify-around">
          <h1 className="text-white">New category</h1>
          <p onClick={onClickHandler}>📝</p>
          <p onClick={onBackClickHandler}>⬅️</p>
        </div>
      </dialog>

      <Dialog isDialogOpen={isDialogOpen} onClickHandler={onClickHandler} />
    </>
  );
}
