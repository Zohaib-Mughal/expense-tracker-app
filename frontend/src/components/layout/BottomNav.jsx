import { NavLink } from "react-router-dom";

const NavIcon = ({ path }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d={path} />
  </svg>
);

const icons = {
  home: "M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z",
  list: "M4 6h16M4 12h16M4 18h7",
  bell: "M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0",
  settings: "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z",
};

const BottomNav = () => {
  const linkClass = ({ isActive }) =>
    `flex flex-col items-center justify-center flex-1 py-2 ${isActive ? "text-[#1d56e0]" : "text-slate-400"}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-20 lg:hidden">
      <div className="max-w-md mx-auto relative">
        <div className="flex items-center bg-white border-t border-slate-100 px-2 shadow-[0_-4px_20px_rgba(0,0,0,0.04)]">
          <NavLink to="/" end className={linkClass}><NavIcon path={icons.home} /></NavLink>
          <NavLink to="/transactions" className={linkClass}><NavIcon path={icons.list} /></NavLink>

          <div className="flex-1 flex justify-center relative">
            <NavLink
              to="/add"
              className="absolute -top-6 h-14 w-14 rounded-full bg-gradient-to-br from-[#2f6ff0] to-[#1a3fb8] flex items-center justify-center text-white shadow-soft"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </NavLink>
          </div>

          <NavLink to="/notifications" className={linkClass}><NavIcon path={icons.bell} /></NavLink>
          <NavLink to="/settings" className={linkClass}><NavIcon path={icons.settings} /></NavLink>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;