import Header from "../components/dashboard/Header";
import BalanceCard from "../components/dashboard/BalanceCard";
import TransactionForm from "../components/dashboard/TransactionForm";
import TransactionHistory from "../components/dashboard/TransactionHistory";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <Header />

        <main className="grid lg:grid-cols-3 gap-8 mt-8">
          <div className="space-y-6">
            <BalanceCard />
            <TransactionForm />
          </div>

          <div className="lg:col-span-2">
            <TransactionHistory />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;