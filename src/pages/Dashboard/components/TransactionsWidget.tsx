import { Transaction } from '@/components/common';
import { Widget } from '@/components/UI';
import { RootState } from '@/store';
import { useAppDispatch } from '@/store/hooks';
import { fetchTransactions } from '@/store/slices/transactionsSlice';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const TransactionsWidget: React.FC = () => {
  const { transactions } = useSelector((state: RootState) => state.transactions);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTransactions({ start: 0, limit: 3 }));
  }, [dispatch]);

  return (
    <Widget title="Recent Transactions" size="small">
      {transactions.map((transaction) => (
        <div key={transaction.id} className="mb-3 last:mb-2.5">
          <Transaction transaction={transaction} />
        </div>
      ))}
    </Widget>
  );
};

export default TransactionsWidget;
