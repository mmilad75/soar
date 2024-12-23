import { BarChart } from '@/components/common';
import { Widget } from '@/components/UI';
import { RootState } from '@/store';
import { useAppDispatch } from '@/store/hooks';
import { fetchWeeklyActivity } from '@/store/slices/reportsSlice';
import { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';

const WeeklyActivityWidget: React.FC = () => {
  const { weeklyActivity } = useSelector((state: RootState) => state.reports);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchWeeklyActivity());
  }, [dispatch]);

  const data = useMemo(() => {
    return [
      {
        label: 'Withdraw',
        color: '#232323',
        values: weeklyActivity.map(({ day, withdraw }) => ({ x: day, y: withdraw })),
      },
      {
        label: 'Deposit',
        color: '#396AFF',
        values: weeklyActivity.map(({ day, deposit }) => ({ x: day, y: deposit })),
      },
    ];
  }, [weeklyActivity]);

  return (
    <Widget title="Weekly Activity" size="large">
      <BarChart data={data} height={150} />
    </Widget>
  );
};

export default WeeklyActivityWidget;
