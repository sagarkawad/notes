import { useRef } from "react";

export default function Dialog({
  isDialogOpen,
  onClickHandler,
  addTaskHeading,
}) {
  let heading = useRef();

  return (
    <>
      {isDialogOpen && (
        <section className="w-screen h-screen absolute flex flex-col justify-center items-center">
          <div className="p-10 border rounded">
            <input type="text" className="mb-4" ref={heading} />
            <div className="flex justify-between">
              <button
                className="border pl-4 pr-4 rounded"
                onClick={() => {
                  if (heading.current.value.trim() == "") {
                    return;
                  }
                  addTaskHeading(heading.current.value);
                  onClickHandler();
                  console.log(heading);
                }}
              >
                Create
              </button>
              <button
                className="border pl-4 pr-4 rounded"
                onClick={onClickHandler}
              >
                Cancel
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
