import { useRef } from "react";

export default function Dialog({
  isDialogOpen,
  onClickHandler,
  TaskHeading,
  data,
  btn,
}) {
  let heading = useRef();

  return (
    <>
      {isDialogOpen && (
        <section className="w-screen h-screen absolute flex flex-col justify-center items-center">
          <div className="p-10 border rounded">
            <input
              type="text"
              className="mb-4 p-2"
              ref={heading}
              placeholder={data}
              maxLength="50"
              required
            />
            <div className="flex justify-between">
              <button
                className="border pl-4 pr-4 rounded"
                onClick={() => {
                  if (heading.current.value.trim() == "") {
                    return;
                  }
                  let th = TaskHeading(heading.current.value.trim(), data);

                  if (th) {
                    onClickHandler();
                  }

                  console.log(heading);
                }}
              >
                {btn}
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
