import Dialog from "./Dialog";

import { useState } from "react";

export default function Sidebar({
  isSideBar,
  onBackClickHandler,
  userTasks,
  addTaskHeading,
}) {
  console.log(isSideBar);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  function onClickHandler() {
    setIsDialogOpen((prevState) => !prevState);
  }

  return (
    <>
      <dialog open={isSideBar} className="bg-red-400 h-screen w-48 p-4">
        <section className="flex justify-around mb-4">
          <h1 className="text-white">New category</h1>
          <p onClick={onClickHandler}>📝</p>
          <p onClick={onBackClickHandler}>⬅️</p>
        </section>
        <section>
          {userTasks.map((el) => {
            return (
              <div key={el.heading} className="flex justify-between text-white">
                <p>{el.heading}</p>
                <div className="flex">
                  <p className="mr-2">✍️</p>
                  <p>✖️</p>
                </div>
              </div>
            );
          })}
        </section>
      </dialog>

      <Dialog
        isDialogOpen={isDialogOpen}
        onClickHandler={onClickHandler}
        addTaskHeading={addTaskHeading}
      />
    </>
  );
}
