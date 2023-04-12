import { useEffect, useState } from "react";

function Sidebar({ children }: any) {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("api/notes", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  return (
    <div className="flex flex-shrink-0 h-full">
      <div className="w-60 p-4 h-full bg-slate-300">
        <div>Notas</div>

        <ul className="mt-4">
          {notes && notes.map((note) => <li>📝{note?.title}</li>)}
        </ul>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

export default Sidebar;
