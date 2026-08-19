const AuthLayout = ({ title, subtitle, children }) => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 py-10 bg-slate-50 relative overflow-hidden">
      {/* <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-brand-400/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-brand-600/20 blur-3xl" /> */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#4d8dff]/30 blur-3xl" />
<div className="pointer-events-none absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-[#1d56e0]/20 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 right-1/4 h-64 w-64 rounded-full bg-indigo-300/20 blur-3xl" />

      <div className="relative w-full max-w-md">
        <div className="flex flex-col items-center mb-8">
          <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-[#2f6ff0] to-[#1d56e0] shadow-soft flex items-center justify-center mb-4">
            <span className="text-white text-2xl font-bold">$</span>
          </div>
          <span className="text-sm font-medium text-slate-400 tracking-wide">
            EXPENSE TRACKER
          </span>
        </div>

        <div className="w-full rounded-3xl bg-white border border-slate-100 shadow-soft px-6 py-8 sm:px-10 sm:py-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center">{title}</h2>
          <p className="mt-2 text-sm text-slate-500 text-center">{subtitle}</p>
          <div className="mt-8">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;