import { FinancialAreaChart } from '@/components/common';
import { Widget } from '@/components/UI';
import { RootState } from '@/store';
import { useAppDispatch } from '@/store/hooks';
import { fetchBalanceHistory } from '@/store/slices/reportsSlice';
import { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';

const BalanceHistoryWidget: React.FC = () => {
  const { balanceHistory } = useSelector((state: RootState) => state.reports);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBalanceHistory());
  }, [dispatch]);

  const data = useMemo(() => {
    return balanceHistory.map(({ date, balance }) => ({
      x: new Date(date),
      y: balance,
    }));
  }, [balanceHistory]);

  return (
    <Widget title="Balance History">
      <FinancialAreaChart data={data} />
    </Widget>
  );
};

export default BalanceHistoryWidget;
