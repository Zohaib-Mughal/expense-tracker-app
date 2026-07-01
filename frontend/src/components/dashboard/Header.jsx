import { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalState";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { user, logout } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });

  return (
    <header className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
      
      {/* LEFT SIDE */}
      <div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
          Expense Tracker
        </h1>

        <p className="text-neutral-400 mt-1">
          {getGreeting()}, {user?.name || "User"} 👋
        </p>

        <p className="text-xs text-neutral-500 mt-1">
          {today}
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-3">

        {/* Avatar */}
        <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-white font-semibold">
          {user?.name?.charAt(0)?.toUpperCase() || "U"}
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-sm text-white hover:bg-neutral-800 transition"
        >
          Logout
        </button>
      </div>

    </header>
  );
};

export default Header;