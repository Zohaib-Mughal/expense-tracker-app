import React, { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalState";

const TransactionHistory = () => {
  const { transactions, deleteTransaction, loading } =useContext(GlobalContext);
  const [deleteId, setDeleteId] = React.useState(null);

  if (loading)
    return (
      <p className="text-neutral-500 text-sm">Loading transactions...</p>
    );

  return (
    <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800">
      
      <h3 className="text-sm font-semibold tracking-wider text-neutral-400 uppercase mb-6">
        Recent Transactions
      </h3>

      {transactions.length === 0 ? (
        <p className="text-center text-neutral-600 text-sm py-10">
          No transactions yet. Add your first record.
        </p>
      ) : (
        <div className="space-y-4">
          {transactions.map((t) => (
            <div
              key={t._id}
              className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-neutral-700 transition"
            >
              
              {/* TOP ROW */}
              <div className="flex items-start justify-between">
                
                <div>
                  <h4 className="text-white font-medium">
                    {t.category}
                  </h4>

                  <p className="text-xs text-neutral-500 mt-1">
                    {new Date(t.date).toLocaleDateString()}
                  </p>
                </div>

                <div
                  className={`font-semibold ${
                    t.type === "INCOME"
                      ? "text-emerald-400"
                      : "text-rose-400"
                  }`}
                >
                  {t.type === "INCOME" ? "+" : "-"}$
                  {t.amount.toFixed(2)}
                </div>
              </div>

              {/* DESCRIPTION */}
              {t.description && (
                <p className="text-sm text-neutral-400 mt-3">
                  {t.description}
                </p>
              )}

              {/* ACTION */}
              <div className="flex justify-end mt-3">
               <button
  onClick={() => setDeleteId(t._id)}
  className="text-xs text-neutral-500 hover:text-red-400 transition"
>
  Delete
</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {deleteId && (
  <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
    
    <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-xl w-[300px]">
      
      <h2 className="text-white font-semibold mb-2">
        Delete Transaction?
      </h2>

      <p className="text-sm text-neutral-400 mb-4">
        This action cannot be undone.
      </p>

      <div className="flex justify-end gap-2">
        <button
          onClick={() => setDeleteId(null)}
          className="px-3 py-1 text-sm text-neutral-400"
        >
          Cancel
        </button>

        <button
          onClick={() => {
            deleteTransaction(deleteId);
            setDeleteId(null);
          }}
          className="px-3 py-1 text-sm bg-red-500 text-white rounded"
        >
          Delete
        </button>
      </div>

    </div>
  </div>
)}
    </div>

    
  );
};

export default TransactionHistory;