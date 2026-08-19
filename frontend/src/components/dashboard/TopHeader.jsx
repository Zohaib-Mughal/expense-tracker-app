const TopHeader = ({ user }) => {
  const initial = user?.name ? user.name.charAt(0).toUpperCase() : "U";
  const today = new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });

  return (
    <div className="flex items-center justify-between px-5 lg:px-0 pt-6 lg:pt-0 pb-2">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Overview</h1>
        <p className="text-sm text-slate-400 mt-0.5">{today}</p>
      </div>
      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#2f6ff0] to-[#1a3fb8] flex items-center justify-center text-white font-semibold text-sm shadow-soft shrink-0">
        {initial}
      </div>
    </div>
  );
};

export default TopHeader;