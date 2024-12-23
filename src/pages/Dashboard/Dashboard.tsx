import CardsWidget from './components/CardsWidget';
import TransactionsWidget from './components/TransactionsWidget';
import WeeklyActivityWidget from './components/WeeklyActivityWidget';

const Dashboard: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-y-6 gap-x-7 ">
      <div className="col-span-3 lg:col-span-2">
        <CardsWidget />
      </div>
      <div className="col-span-3 lg:col-span-1">
        <TransactionsWidget />
      </div>
      <div className="col-span-3 lg:col-span-2">
        <WeeklyActivityWidget />
      </div>
    </div>
  );
};

export default Dashboard;
