const TransactionItem = ({ transaction, onDelete }) => {
  const isIncome = transaction.type === "INCOME";
  const label = transaction.description || transaction.title || transaction.category || "Transaction";
  const date = transaction.date
    ? new Date(transaction.date).toLocaleDateString("en-US", { day: "2-digit", month: "short", year: "numeric" })
    : "";

  return (
    <div className="flex items-center justify-between bg-white rounded-2xl p-3.5 border border-slate-100 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 font-semibold text-sm">
          {label.charAt(0).toUpperCase()}
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900">{label}</p>
          <p className="text-xs text-slate-400">{date}</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <p className={`text-sm font-bold ${isIncome ? "text-emerald-500" : "text-red-500"}`}>
          {isIncome ? "+" : "-"}${Number(transaction.amount).toFixed(2)}
        </p>
        {onDelete && (
          <button
            onClick={() => onDelete(transaction._id)}
            className="h-8 w-8 rounded-lg flex items-center justify-center text-slate-300 hover:text-red-500 hover:bg-red-50 transition"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0-1 14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L4 6h16Z" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default TransactionItem;