import { useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../Context/GlobalState";
import AppShell from "../components/layout/AppShell";
import TransactionItem from "../components/dashboard/TransactionItem";

const filters = [
  { key: "all", label: "All" },
  { key: "INCOME", label: "Income" },
  { key: "EXPENSE", label: "Expense" },
];

const TransactionHistory = () => {
  const { transactions, deleteTransaction } = useContext(GlobalContext);
  const navigate = useNavigate();
  const [filter, setFilter] = useState("all");

  const filtered = useMemo(() => {
    if (filter === "all") return transactions;
    return transactions.filter((t) => t.type === filter);
  }, [transactions, filter]);

  const filteredTotal = useMemo(
    () => filtered.reduce((sum, t) => sum + Number(t.amount || 0), 0),
    [filtered]
  );

  const overallTotal = useMemo(
    () => transactions.reduce((sum, t) => sum + Number(t.amount || 0), 0),
    [transactions]
  );

  const percent = overallTotal > 0 ? Math.min(100, (filteredTotal / overallTotal) * 100) : 0;
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  const handleDelete = (id) => {
    if (window.confirm("Delete this transaction?")) {
      deleteTransaction(id);
    }
  };

  return (
    <AppShell>
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate("/")}
          className="h-10 w-10 rounded-full bg-white border border-slate-100 shadow-sm flex items-center justify-center text-slate-600 lg:hidden"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <h1 className="text-xl lg:text-2xl font-bold text-slate-900">Transactions</h1>
      </div>

      <div className="flex flex-col items-center mt-8">
        <div className="relative flex items-center justify-center">
          <svg width="180" height="180" className="-rotate-90">
            <circle cx="90" cy="90" r={radius} stroke="#e2e8f0" strokeWidth="14" fill="none" />
            <circle
              cx="90" cy="90" r={radius}
              stroke="url(#historyGrad)" strokeWidth="14" fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              className="transition-all duration-500"
            />
            <defs>
              <linearGradient id="historyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2f6ff0" />
                <stop offset="100%" stopColor="#1a3fb8" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute flex flex-col items-center">
            <span className="text-2xl font-bold text-slate-900">${filteredTotal.toFixed(2)}</span>
            <span className="text-xs text-slate-400 mt-1">
              {filtered.length} {filtered.length === 1 ? "entry" : "entries"}
            </span>
          </div>
        </div>
      </div>

      <div className="flex mt-8 border-b border-slate-200">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`flex-1 pb-3 text-sm font-semibold border-b-2 transition ${
              filter === f.key ? "text-slate-900 border-[#1d56e0]" : "text-slate-400 border-transparent"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-4 space-y-3 lg:grid lg:grid-cols-2 lg:gap-3 lg:space-y-0 pb-24 lg:pb-0">
        {filtered.length === 0 && (
          <p className="text-sm text-slate-400 text-center py-10 lg:col-span-2">No transactions in this view.</p>
        )}
        {filtered.map((t) => (
          <TransactionItem key={t._id} transaction={t} onDelete={handleDelete} />
        ))}
      </div>
    </AppShell>
  );
};

export default TransactionHistory;