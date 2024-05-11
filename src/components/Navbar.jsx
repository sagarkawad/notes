export default function Navbar({ onNotesClickHandler, category }) {
  return (
    <nav className="absolute bg-red-400 w-screen h-12 p-2">
      <div className="flex justify-center items-center">
        <p className="absolute left-2" onClick={onNotesClickHandler}>
          📓
        </p>
        <h1 className="text-white">{category}</h1>
      </div>
    </nav>
  );
}
