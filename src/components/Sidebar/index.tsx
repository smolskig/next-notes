function Sidebar({ children }: any) {
  return (
    <div className="flex flex-shrink-0 h-full">
      <div className="w-60 p-4 h-full bg-slate-300">
        <div>Notas</div>

        <ul className="mt-4">
          <li>Note 1</li>
          <li>Note 2</li>
        </ul>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

export default Sidebar;
