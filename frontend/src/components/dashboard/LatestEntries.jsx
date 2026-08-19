import { Link } from "react-router-dom";
import TransactionItem from "./TransactionItem";

const LatestEntries = ({ transactions = [] }) => {
  const latest = transactions.slice(0, 6);

  return (
    <div className="px-5 mt-6 lg:px-0">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-base font-bold text-slate-900">Latest Entries</h2>
      </div>

      {latest.length === 0 && (
        <div className="flex flex-col items-center justify-center py-14 rounded-2xl border border-dashed border-slate-200 bg-white">
          <p className="text-sm text-slate-400 mb-3">No transactions yet.</p>
          <Link to="/add" className="text-sm font-semibold text-[#1d56e0] hover:text-[#1a3fb8]">
            + Add your first transaction
          </Link>
        </div>
      )}

      <div className="space-y-3 lg:grid lg:grid-cols-2 lg:gap-3 lg:space-y-0">
        {latest.map((t) => (
          <TransactionItem key={t._id} transaction={t} />
        ))}
      </div>
    </div>
  );
};

export default LatestEntries;