import CardsWidget from './components/CardsWidget';

const Dashboard: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-y-6 gap-x-7 ">
      <div className="col-span-2">
        <CardsWidget />
      </div>
    </div>
  );
};

export default Dashboard;
