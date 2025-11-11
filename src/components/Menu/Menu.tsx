import { useState } from "react";
import { Link } from "react-router-dom";

interface PropsItemMenu {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
}

function MenuItem({to, children, onClick = () => {}}: PropsItemMenu) {
  return (
    <Link onClick={onClick} to={to} className="p-2 font-semibold text-white hover:bg-green-950 active:bg-green-950 rounded cursor-pointer">
      <li>{children}</li>
    </Link>
  );
}

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center w-full bg-green-900 sticky">
        <div className="sm:p-2 md:p-4">
          <Link to="/">
          <h1 className="text-2xl ml-2 text-white font-bold">Quinowraps</h1>
          </Link>
        </div>
        <button
          className="md:hidden ml-auto p-4 text-white bg-green-900 hover:bg-green-950 active:bg-green-950"
          onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        <ul className="hidden md:flex gap-4 sm:p-2 md:p-4 text-white font-semibold">
          <MenuItem to="/">Inicio</MenuItem>
          <MenuItem to="/recipes">Recetas</MenuItem>
        </ul>
      </nav>
      {isOpen && (<ul className="flex top-14 bg-green-900 w-full flex-col gap-4 sm:p-2 md:p-4 text-white font-semibold">
        <MenuItem onClick={() => setIsOpen(false)} to="/">Inicio</MenuItem>
        <MenuItem onClick={() => setIsOpen(false)} to="/recipes">Recetas</MenuItem>
      </ul>)}
    </>
  );
}