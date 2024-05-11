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
        <section
          className={`w-screen h-screen absolute flex flex-col justify-center items-center transition`}
        >
          <div className="p-10 border rounded bg-slate-500">
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
                className="border pl-4 pr-4 rounded bg-red-400 text-white"
                onClick={() => {
                  if (heading.current.value.trim() == "") {
                    return;
                  }

                  if (heading.current.value.length > 20) {
                    alert(
                      `Length of the input = ${heading.current.value.length}. Length should be <= 20`
                    );
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
                className="border pl-4 pr-4 rounded bg-red-400 text-white"
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
