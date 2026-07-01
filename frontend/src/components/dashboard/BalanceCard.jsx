import React, { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalState";

const BalanceCard = () => {
  const { summary } = useContext(GlobalContext);

  const stats = [
    {
      title: "Balance",
      value: summary.balance,
      color: "text-white",
      bg: "bg-neutral-900",
    },
    {
      title: "Income",
      value: summary.income,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
    },
    {
      title: "Expense",
      value: summary.expense,
      color: "text-rose-400",
      bg: "bg-rose-500/10",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4">
      {stats.map((item, index) => (
        <div
          key={index}
          className={`p-5 rounded-2xl border border-neutral-800 ${item.bg} hover:scale-[1.02] transition-transform duration-200`}
        >
          <p className="text-xs uppercase tracking-wider text-neutral-400">
            {item.title}
          </p>

          <h2 className={`text-3xl font-bold mt-2 ${item.color}`}>
            ${item.value.toFixed(2)}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default BalanceCard;