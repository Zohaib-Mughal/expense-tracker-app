const Input = ({ label, error, className = "", ...props }) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-slate-700 mb-1.5">
          {label}
        </label>
      )}
      <input
        {...props}
        className={`w-full rounded-xl border bg-slate-50 px-4 py-3 text-sm text-slate-900
          placeholder:text-slate-400 outline-none transition
          focus:ring-[#2f6ff0]/40 focus:border-[#2f6ff0]
          ${error ? "border-red-400" : "border-slate-200"}
          ${className}`}
      />
      {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default Input;