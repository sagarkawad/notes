import Dialog from "./Dialog";

import { useState } from "react";

export default function Sidebar({
  isSideBar,
  onBackClickHandler,
  userTasks,
  addTaskHeading,
  editTaskHeading,
}) {
  console.log(isSideBar);
  const [isDialogOpenForCreate, setIsDialogOpenForCreate] = useState(false);
  const [isDialogOpenForEdit, setIsDialogOpenForEdit] = useState(false);
  const [data, setData] = useState({});

  function onClickHandler() {
    setIsDialogOpenForCreate((prevState) => !prevState);
  }

  function onClickHandlerEdit(heading) {
    setIsDialogOpenForEdit((prevState) => !prevState);
    console.log(isDialogOpenForEdit);
  }

  function onSetData(heading) {
    setData(heading);
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
                  <p
                    className="mr-2"
                    onClick={() => {
                      onClickHandlerEdit();
                      onSetData(el.heading);
                    }}
                  >
                    ✍️
                  </p>
                  <p>✖️</p>
                </div>
              </div>
            );
          })}
        </section>
      </dialog>

      <Dialog
        isDialogOpen={isDialogOpenForCreate}
        onClickHandler={onClickHandler}
        TaskHeading={addTaskHeading}
        data=""
        btn="Create"
      />

      <Dialog
        isDialogOpen={isDialogOpenForEdit}
        onClickHandler={onClickHandlerEdit}
        TaskHeading={editTaskHeading}
        data={data}
        btn="Edit"
      />
    </>
  );
}
