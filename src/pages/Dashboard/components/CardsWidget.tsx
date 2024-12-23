import { CreditCard, Widget } from '@/components/UI';
import { AppDispatch, RootState } from '@/store';
import { fetchCards } from '@/store/slices/creditCardsSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router';

const CardsWidget: React.FC = () => {
  const { cards } = useSelector((state: RootState) => state.creditCards);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCards({ start: 0, limit: 2 }));
  }, [dispatch]);

  const seeAllButton = (
    <NavLink to="/credit-cards" className="text-h3 font-semibold text-primary hover:text-secondary transition">
      See All
    </NavLink>
  );

  return (
    <Widget title="My Cards" extra={seeAllButton} transparent>
      <div className="flex">
        {cards.map(({ id, balance, active, ...card }) => (
          <div key={id} className="mr-4">
            <CreditCard balance={balance} card={card} active={active} />
          </div>
        ))}
      </div>
    </Widget>
  );
};

export default CardsWidget;
