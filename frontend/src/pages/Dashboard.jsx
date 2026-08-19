import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

import AppShell from "../components/layout/AppShell";
import TopHeader from "../components/dashboard/TopHeader";
import SummaryCards from "../components/dashboard/SummaryCards";
import QuickActions from "../components/dashboard/QuickActions";
import LatestEntries from "../components/dashboard/LatestEntries";

const Dashboard = () => {
  const { user, summary, transactions } = useContext(GlobalContext);

  return (
    <AppShell>
      <TopHeader user={user} />

      <div className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-6 lg:mt-4">
        <div className="order-1 lg:order-1 lg:col-span-2">
          <SummaryCards income={summary.income} expense={summary.expense} balance={summary.balance} />
        </div>

        {/* <div className="order-2 lg:order-2 lg:col-span-1 lg:row-span-2">
          <QuickActions />
        </div> */}

        <div className="order-3 lg:order-3 lg:col-span-2">
          <LatestEntries transactions={transactions} />
        </div>
      </div>
    </AppShell>
  );
};

export default Dashboard;