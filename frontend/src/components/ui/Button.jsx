const Button = ({ children, disabled, className = "", ...props }) => {
  return (
    <button
      disabled={disabled}
      {...props}
      className={`w-full rounded-xl py-3.5 text-sm font-semibold text-white
        bg-gradient-to-r from-[#2f6ff0] to-[#1a3fb8]
        shadow-[0_8px_30px_-8px_rgba(31,68,214,0.35)]
        transition active:scale-[0.98]
        disabled:opacity-60 disabled:cursor-not-allowed
        hover:from-[#1d56e0] hover:to-[#0f1f5c]
        ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;