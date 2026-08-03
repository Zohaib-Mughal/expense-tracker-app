import { useState } from "react";

const Input = ({
  label,
  error,
  type = "text",
  required = false,
  className = "",
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <div className="space-y-2">

      {label && (
        <label className="block text-sm font-medium text-zinc-300">

          {label}

          {required && (
            <span className="text-red-500 ml-1">*</span>
          )}

        </label>
      )}

      <div className="relative">

        <input
          type={
            isPassword
              ? showPassword
                ? "text"
                : "password"
              : type
          }
          className={`
            w-full
            rounded-xl
            border
            bg-zinc-950
            px-4
            py-3
            pr-12
            text-white
            border-zinc-700
            placeholder:text-zinc-500
            transition-all
            duration-200
            focus:outline-none
            focus:ring-2
            focus:ring-blue-600
            focus:border-blue-600
            disabled:opacity-50
            ${error ? "border-red-500 focus:ring-red-500" : ""}
            ${className}
          `}
          {...props}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() =>
              setShowPassword(!showPassword)
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-700 hover:text-gray-200 transition"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        )}
      </div>

      {error && (
        <p className="text-sm text-red-400">
          {error}
        </p>
      )}

    </div>
  );
};

export default Input;