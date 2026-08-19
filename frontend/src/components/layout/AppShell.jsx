import Sidebar from "./Sidebar";
import BottomNav from "./BottomNav";

const AppShell = ({ children, maxWidth = "lg:max-w-5xl" }) => {
  return (
    <div className="min-h-screen bg-slate-50 lg:flex">
      <Sidebar />
      <div className="flex-1">
        <div className={`max-w-md mx-auto ${maxWidth} lg:mx-auto lg:px-10 lg:py-10 pb-24 lg:pb-10`}>
          {children}
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default AppShell;