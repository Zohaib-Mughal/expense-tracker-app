const Icon = ({ path }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d={path} />
  </svg>
);

const icons = {
  savings: "M19 5c-1.5-2-4-2-5.5-.5S12 8 12 8s-3 0-4.5 1.5S6 13 6 13H4l1 3h1v3h2v-2h6v2h2v-3.5c1-1 1.5-2 1.5-3.5",
  remind: "M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0",
  budget: "M2 6h20M2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6M2 6l2-4h16l2 4M8 12h8",
};

const actions = [
  { label: "Savings", icon: icons.savings, filled: true },
  { label: "Remind", icon: icons.remind, filled: false },
  { label: "Budget", icon: icons.budget, filled: false },
];

const QuickActions = () => {
  return (
    <div className="mt-6 lg:mt-0 px-5 lg:px-0">
      <div className="rounded-2xl bg-white border border-slate-100 shadow-sm p-4">
        <h2 className="text-sm font-bold text-slate-900 mb-3">Quick Actions</h2>
        <div className="flex lg:flex-col gap-3">
          {actions.map((a) => (
            <button
              key={a.label}
              className={`flex-1 lg:flex-none rounded-xl py-3 px-3 text-sm font-semibold flex items-center justify-center lg:justify-start gap-2 transition
                ${a.filled
                  ? "bg-gradient-to-br from-[#2f6ff0] to-[#1a3fb8] text-white shadow-soft"
                  : "bg-slate-50 text-slate-700 hover:bg-slate-100"}`}
            >
              <Icon path={a.icon} />
              {a.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickActions;