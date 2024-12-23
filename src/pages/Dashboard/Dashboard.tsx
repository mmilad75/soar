import BalanceHistoryWidget from './components/BalanceHistoryWidget';
import CardsWidget from './components/CardsWidget';
import ExpenseStatisticsWidget from './components/ExpenseStatisticsWidget';
import QuickTransferWidget from './components/QuickTransferWidget';
import TransactionsWidget from './components/TransactionsWidget';
import WeeklyActivityWidget from './components/WeeklyActivityWidget';

const Dashboard: React.FC = () => {
  return (
    <div className="lg:grid grid-cols-12 gap-y-6 gap-x-7 ">
      <div className="mb-6 lg:mb-0 col-span-8">
        <CardsWidget />
      </div>
      <div className="mb-6 lg:mb-0 col-span-4">
        <TransactionsWidget />
      </div>
      <div className="mb-6 lg:mb-0 col-span-8">
        <WeeklyActivityWidget />
      </div>
      <div className="mb-6 lg:mb-0 col-span-4">
        <ExpenseStatisticsWidget />
      </div>
      <div className="mb-6 lg:mb-0 col-span-5">
        <QuickTransferWidget />
      </div>
      <div className="mb-6 lg:mb-0 col-span-7">
        <BalanceHistoryWidget />
      </div>
    </div>
  );
};

export default Dashboard;
