export default function Navbar({ onNotesClickHandler }) {
  return (
    <nav
      onClick={onNotesClickHandler}
      className="absolute bg-red-400 w-screen h-12 p-2"
    >
      <div className="flex justify-center items-center">
        <p className="fixed left-2">📓</p>
        <h1>heading</h1>
      </div>
    </nav>
  );
}
