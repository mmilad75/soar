import { CreditCard } from '@/components/common';
import { Widget } from '@/components/UI';
import { RootState } from '@/store';
import { useAppDispatch } from '@/store/hooks/useAppDispatch';
import { fetchCards } from '@/store/slices/creditCardsSlice';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router';

const CardsWidget: React.FC = () => {
  const { cards } = useSelector((state: RootState) => state.creditCards);
  const dispatch = useAppDispatch();

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
          <div key={id} className="flex-grow mr-4 last:mr-0">
            <CreditCard balance={balance} card={card} active={active} />
          </div>
        ))}
      </div>
    </Widget>
  );
};

export default CardsWidget;
