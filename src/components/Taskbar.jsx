import Tasks from "./Tasks";

export default function Taskbar() {
  return (
    <section className="w-screen h-screen bg-slate-500 flex flex-col justify-center items-center">
      <div>
        <input type="text" />
        <button className="pl-2 pr-2 bg-red-400">➕</button>
      </div>
      <Tasks />
    </section>
  );
}
