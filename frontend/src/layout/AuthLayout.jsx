const AuthLayout = ({ title, subtitle, children }) => {
  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 shadow-2xl shadow-black/40">

        {/* Left Side */}
        <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 p-12 text-white">

          <h1 className="text-5xl font-bold leading-tight">
            Expense Tracker
          </h1>

          <p className="mt-6 text-lg text-blue-100 leading-8">
            Manage your income and expenses with a clean,
            modern dashboard built using the MERN Stack.
          </p>

          <div className="mt-10 space-y-4 text-blue-100">

            <div>✔ Track Income & Expenses</div>

            <div>✔ Secure Authentication</div>

            <div>✔ Responsive Dashboard</div>

            <div>✔ Beautiful Analytics</div>

          </div>

        </div>

        {/* Right Side */}

        <div className="flex items-center justify-center p-8 md:p-12">

          <div className="w-full max-w-md">

            <h2 className="text-3xl font-bold text-white">
              {title}
            </h2>

            <p className="mt-2 text-zinc-400">
              {subtitle}
            </p>

            <div className="mt-8">
              {children}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default AuthLayout;