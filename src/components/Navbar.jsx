export default function Navbar({ onNotesClickHandler, category }) {
  return (
    <nav
      onClick={onNotesClickHandler}
      className="absolute bg-red-400 w-screen h-12 p-2"
    >
      <div className="flex justify-center items-center">
        <p className="absolute left-2">📓</p>
        <h1>{category}</h1>
      </div>
    </nav>
  );
}
