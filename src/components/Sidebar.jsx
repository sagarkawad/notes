import Dialog from "./Dialog";

import { useState } from "react";

export default function Sidebar({
  isSideBar,
  onBackClickHandler,
  userTasks,
  addTaskHeading,
  editTaskHeading,
  onSetCategory,
}) {
  console.log(isSideBar);

  const [isDialogOpenForEdit, setIsDialogOpenForEdit] = useState(false);
  const [isDialogOpenForCreate, setIsDialogOpenForCreate] = useState(false);
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
      <dialog
        open={true}
        className={`bg-red-400 h-screen min-w-28 max-w-58 p-4 border-r transition-all ${
          isSideBar ? "translate-x-0" : "-translate-x-80"
        }`}
      >
        <section className="flex justify-between mb-4 transition-transform">
          <h1 onClick={onClickHandler} className="text-white">
            New category 📝
          </h1>
          <p onClick={onBackClickHandler}>⬅️</p>
        </section>
        <section>
          {userTasks.map((el) => {
            return (
              <div key={el.heading} className="flex justify-between text-white">
                <p
                  className="mr-4"
                  onClick={() => {
                    onSetCategory(el.heading);
                    onBackClickHandler();
                  }}
                >
                  {el.heading}
                </p>
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
        data={null}
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
