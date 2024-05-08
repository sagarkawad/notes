export default function Dialog({ isDialogOpen, onClickHandler }) {
  return (
    <>
      {isDialogOpen && (
        <section className="w-screen h-screen absolute flex flex-col justify-center items-center">
          <div className="p-10 border rounded">
            <input type="text" className="mb-4" />
            <div className="flex justify-between">
              <button className="border pl-4 pr-4 rounded">Create</button>
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
