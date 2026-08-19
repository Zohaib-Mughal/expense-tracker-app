const CardIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="6" width="20" height="14" rx="3" />
    <path d="M2 10h20" />
  </svg>
);

const SummaryCards = ({ income = 0, expense = 0, balance = 0 }) => {
  const cards = [
    { label: "Total Income", value: income, highlight: false },
    { label: "Total Expense", value: expense, highlight: true },
    { label: "Balance", value: balance, highlight: false },
  ];

  return (
    <div className="flex items-stretch gap-3 px-5 mt-4 overflow-x-auto pb-2 no-scrollbar lg:overflow-visible lg:grid lg:grid-cols-3 lg:px-0 lg:gap-4">
      {cards.map((c) => (
        <div
          key={c.label}
          className={`min-w-[150px] lg:min-w-0 rounded-2xl p-4 shrink-0 flex flex-col justify-between ${
            c.label === "Total Expense"
              ? "bg-gradient-to-br from-[#f02f2f] to-[#b81a1a] text-white shadow-soft"
              : "bg-white border border-slate-100 text-slate-900 shadow-sm"
            
          }  ${
             c.label === "Balance"
              ? "bg-gradient-to-br from-[#369551] to-[#378840] text-white shadow-soft"
              : "bg-white border border-slate-100 shadow-sm"
          }`}
        >
          <div className={c.label !== "Total Income" ? "text-white/80" : "text-slate-400"}>
            <CardIcon />
          </div>
          <div className="mt-3">
            <p className={`text-xs text-white/80}`}>{c.label}</p>
            <p className="mt-1 text-lg font-bold">${Number(c.value).toFixed(2)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;