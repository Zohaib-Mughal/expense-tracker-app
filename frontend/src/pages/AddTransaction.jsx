import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../Context/GlobalState";
import AppShell from "../components/layout/AppShell";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);
  const navigate = useNavigate();

  const [type, setType] = useState("expense");
  const [formData, setFormData] = useState({
    amount: "",
    description: "",
    date: new Date().toISOString().slice(0, 10),
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.amount || Number(formData.amount) <= 0) newErrors.amount = "Enter a valid amount";
    if (!formData.description.trim()) newErrors.description = "Description is required";
    if (!formData.date) newErrors.date = "Date is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    await addTransaction({
      type,
      amount: Number(formData.amount),
      description: formData.description,
      date: formData.date,
    });
    setLoading(false);
    navigate("/");
  };

  return (
    <AppShell maxWidth="lg:max-w-xl">
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={() => navigate(-1)}
          className="h-10 w-10 rounded-full bg-white border border-slate-100 shadow-sm flex items-center justify-center text-slate-600 lg:hidden"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <h1 className="text-xl font-bold text-slate-900">Add Transaction</h1>
      </div>

      <div className="flex bg-white border border-slate-100 rounded-2xl p-1.5 shadow-sm mb-6">
        <button
          type="button"
          onClick={() => setType("expense")}
          className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition ${
            type === "expense" ? "bg-gradient-to-br from-[#2f6ff0] to-[#1d56e0] text-white shadow-soft" : "text-slate-500"
          }`}
        >
          Expense
        </button>
        <button
          type="button"
          onClick={() => setType("income")}
          className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition ${
            type === "income" ? "bg-gradient-to-br from-[#10b981] to-[#059669] text-white shadow-soft" : "text-slate-500"
          }`}
        >
          Income
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 pb-24 lg:pb-0">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Amount</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">$</span>
            <input
              type="number"
              name="amount"
              step="0.01"
              placeholder="0.00"
              value={formData.amount}
              onChange={handleChange}
              className={`w-full rounded-xl border bg-white pl-8 pr-4 py-3.5 text-lg font-semibold text-slate-900
                outline-none transition focus:ring-2 focus:ring-[#2f6ff0]/40 focus:border-[#1a3fb8]
                ${errors.amount ? "border-red-400" : "border-slate-200"}`}
            />
          </div>
          {errors.amount && <p className="mt-1.5 text-xs text-red-500">{errors.amount}</p>}
        </div>

        <Input
          label="Description"
          name="description"
          placeholder="e.g. Groceries, Uber ride"
          value={formData.description}
          onChange={handleChange}
          error={errors.description}
        />

        <Input
          label="Date"
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          error={errors.date}
        />

        <Button type="submit" disabled={loading}>
          {loading ? "Saving..." : `Add ${type === "income" ? "Income" : "Expense"}`}
        </Button>
      </form>
    </AppShell>
  );
};

export default AddTransaction;