import { Balance } from '@/components/UI';
import TransactionIcon from './TransactionIcon';
import classNames from 'classnames';
import { getHumanReadableDate } from '@/utils/date';

interface ITransactionProps {
  transaction: ITransaction;
}

const Transaction: React.FC<ITransactionProps> = ({ transaction }) => {
  const isDeposit = transaction.type === 'deposit';

  return (
    <div className="flex items-center">
      <div className="shrink-0">
        <TransactionIcon source={transaction.source} />
      </div>
      <div className="flex-grow mx-3.5">
        <h4 className="font-medium leading-5">{transaction.title}</h4>
        <p className="text-sm text-secondary mt-1">{getHumanReadableDate(transaction.date)}</p>
      </div>
      <div
        className={classNames(
          'shrink-0 text-right font-semibold',
          isDeposit && 'text-success',
          !isDeposit && 'text-danger'
        )}
      >
        <span>{transaction.type === 'withdrawal' ? '-' : '+'}</span>
        <Balance amount={transaction.amount} />
      </div>
    </div>
  );
};

export default Transaction;
