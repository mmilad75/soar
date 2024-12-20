interface IBalanceProps {
  amount: number;
  className?: string;
}

const Balance: React.FC<IBalanceProps> = ({ amount, className }) => {
  const formattedAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: amount % 1 === 0 ? 0 : 2, // No decimals for whole numbers
  }).format(amount);

  return <span className={className}>{formattedAmount}</span>;
};

export default Balance;
