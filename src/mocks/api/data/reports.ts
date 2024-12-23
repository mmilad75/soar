import { IExpenseStatistics, IWeeklyActivity } from '@/api/reports';

export const weeklyActivity: IWeeklyActivity[] = [
  {
    day: 'Sat',
    withdraw: 480,
    deposit: 220,
  },
  {
    day: 'Sun',
    withdraw: 340,
    deposit: 120,
  },
  {
    day: 'Mon',
    withdraw: 310,
    deposit: 270,
  },
  {
    day: 'Tue',
    withdraw: 490,
    deposit: 380,
  },
  {
    day: 'Wed',
    withdraw: 140,
    deposit: 250,
  },
  {
    day: 'Thu',
    withdraw: 390,
    deposit: 220,
  },
  {
    day: 'Fri',
    withdraw: 400,
    deposit: 320,
  },
];

export const expenseStatistics: IExpenseStatistics[] = [
  { label: 'Entertainment', value: 30 },
  { label: 'Bill Expense', value: 15 },
  { label: 'Investment', value: 20 },
  { label: 'Others', value: 35 },
];
