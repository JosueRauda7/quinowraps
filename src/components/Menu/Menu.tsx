import { Link } from "react-router-dom";

interface PropsItemMenu {
  to: string;
  children: React.ReactNode;
}

function MenuItem({to, children}: PropsItemMenu) {
  return (
    <li className="p-2 font-semibold text-white hover:bg-green-950 rounded cursor-pointer">
      <Link to={to}>{children}</Link>
    </li>
  );
}

export default function Menu() {
  return (
    <nav className="flex items-center bg-green-900">
      <div className="p-4">
        <h1 className="text-2xl text-white font-bold">QuinoWraps</h1>
      </div>
      <ul className="flex gap-4 p-4 text-white font-semibold">
        <MenuItem to="/">Inicio</MenuItem>
        <MenuItem to="/recipes">Recetas</MenuItem>
      </ul>
    </nav>
  );
}