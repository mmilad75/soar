import { IBalanceHistory, IExpenseStatistics, IWeeklyActivity } from '@/api/reports';

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

export const balanceHistory: IBalanceHistory[] = [
  { date: '2023-07-01', balance: 170 },
  { date: '2023-07-20', balance: 300 },
  { date: '2023-08-01', balance: 230 },
  { date: '2023-08-05', balance: 210 },
  { date: '2023-08-25', balance: 450 },
  { date: '2023-09-01', balance: 430 },
  { date: '2023-09-10', balance: 410 },
  { date: '2023-10-01', balance: 780 },
  { date: '2023-11-01', balance: 205 },
  { date: '2023-11-03', balance: 200 },
  { date: '2023-11-25', balance: 580 },
  { date: '2023-12-01', balance: 570 },
  { date: '2023-12-25', balance: 220 },
  { date: '2024-01-01', balance: 230 },
  { date: '2024-02-15', balance: 620 },
  { date: '2024-02-25', balance: 600 },
];
