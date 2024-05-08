export default function Navbar({ onNotesClickHandler }) {
  return (
    <nav
      onClick={onNotesClickHandler}
      className="absolute bg-red-400 w-screen h-12 p-2"
    >
      Notes!
    </nav>
  );
}
