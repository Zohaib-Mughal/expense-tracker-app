import React, { useState, useContext } from "react";
import { GlobalContext } from "../../Context/GlobalState";

const TransactionForm = () => {
  const { addTransaction } = useContext(GlobalContext);

  const [form, setForm] = useState({
    type: "EXPENSE",
    amount: "",
    category: "",
    description: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    if (!form.amount || form.amount <= 0) return "Amount must be greater than 0";
    if (!form.category.trim()) return "Category is required";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");
    setLoading(true);

    await addTransaction({
      type: form.type,
      amount: parseFloat(form.amount),
      category: form.category,
      description: form.description,
    });

    setForm({
      type: "EXPENSE",
      amount: "",
      category: "",
      description: "",
    });

    setLoading(false);
  };

  return (
    <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800">
      
      <h3 className="text-sm font-semibold tracking-wider text-neutral-400 uppercase mb-4">
        Add Transaction
      </h3>

      {error && (
        <p className="text-red-400 text-sm mb-3">{error}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* TYPE + AMOUNT */}
        <div className="grid grid-cols-2 gap-4">

          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="w-full bg-neutral-950 border border-neutral-800 text-white text-sm rounded-lg p-3"
          >
            <option value="EXPENSE">Expense</option>
            <option value="INCOME">Income</option>
          </select>

          <input
            name="amount"
            type="number"
            value={form.amount}
            onChange={handleChange}
            placeholder="Amount"
            className="w-full bg-neutral-950 border border-neutral-800 text-white text-sm rounded-lg p-3"
          />
        </div>

        {/* CATEGORY */}
        <input
          name="category"
          value={form.category}
          onChange={handleChange}
          placeholder="Category (e.g. Food, Rent)"
          className="w-full bg-neutral-950 border border-neutral-800 text-white text-sm rounded-lg p-3"
        />

        {/* DESCRIPTION */}
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description (e.g. Lunch with friends)"
          className="w-full bg-neutral-950 border border-neutral-800 text-white text-sm rounded-lg p-3 resize-none h-24"
        />

        {/* SUBMIT */}
        <button
          disabled={loading}
          className="w-full bg-white text-black font-semibold py-3 rounded-lg text-sm hover:bg-neutral-200 transition disabled:opacity-50"
        >
          {loading ? "Adding..." : "Add Transaction"}
        </button>

      </form>
    </div>
  );
};

export default TransactionForm;