declare type TransactionSource = 'paypal' | 'card' | 'cash';

declare interface ITransaction {
  id: string;
  type: 'deposit' | 'withdrawal';
  amount: number;
  date: string;
  source: TransactionSource;
  title: string;
}
