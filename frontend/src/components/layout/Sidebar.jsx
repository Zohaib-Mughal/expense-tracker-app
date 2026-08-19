import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalState";

const NavIcon = ({ path }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d={path} />
  </svg>
);

const icons = {
  home: "M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z",
  list: "M4 6h16M4 12h16M4 18h7",
  bell: "M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0",
  settings: "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z",
  plus: "M12 5v14M5 12h14",
  logout: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9",
};

const navItems = [
  { to: "/", label: "Overview", icon: icons.home, end: true },
  { to: "/transactions", label: "Transactions", icon: icons.list },
  { to: "/notifications", label: "Notifications", icon: icons.bell },
  { to: "/settings", label: "Settings", icon: icons.settings },
];

const Sidebar = () => {
  const { user, logout } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <aside className="hidden lg:flex lg:flex-col lg:w-64 lg:shrink-0 lg:min-h-screen border-r border-slate-100 bg-white px-5 py-6">
      <div className="flex items-center gap-3 mb-8 px-1">
       <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-[#2f6ff0] to-[#1a3fb8] flex items-center justify-center text-white font-bold shadow-soft">$</div>
        <span className="font-bold text-slate-900">Expense Tracker</span>
      </div>

      <button
        onClick={() => navigate("/add")}
      className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#2f6ff0] to-[#1a3fb8] text-white text-sm font-semibold py-3 mb-6 shadow-soft hover:from-[#1d56e0] hover:to-[#0f1f5c] transition"
      >
        <NavIcon path={icons.plus} />
        Add Transaction
      </button>

      <nav className="flex-1 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                isActive ? "bg-[#eef4ff] text-[#1a3fb8]" : "text-slate-500 hover:bg-slate-50"
              }`
            }
          >
            <NavIcon path={item.icon} />
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="pt-4 border-t border-slate-100 mt-4">
        <div className="flex items-center gap-3 px-1 mb-3">
        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#2f6ff0] to-[#1a3fb8] flex items-center justify-center text-white text-sm font-semibold">
            {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-slate-900 truncate">{user?.name || "User"}</p>
            <p className="text-xs text-slate-400 truncate">{user?.email}</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-500 hover:bg-red-50 hover:text-red-600 transition"
        >
          <NavIcon path={icons.logout} />
          Log out
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;