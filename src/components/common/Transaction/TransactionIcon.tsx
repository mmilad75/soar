import { Icon, IconName } from '@/components/UI';
import classNames from 'classnames';
import { useMemo } from 'react';

interface ITransactionIconProps {
  source: TransactionSource;
}

interface IIconProps {
  background: string;
  color: string;
  icon: IconName;
}

const TransactionIcon: React.FC<ITransactionIconProps> = ({ source }) => {
  const props = useMemo<IIconProps>(() => {
    switch (source) {
      case 'card':
        return {
          background: 'bg-payment-card',
          color: 'fill-payment-card',
          icon: 'cardStack',
        };

      case 'cash':
        return {
          background: 'bg-payment-cash',
          color: 'fill-payment-cash',
          icon: 'cash',
        };

      case 'paypal':
        return {
          background: 'bg-payment-paypal',
          color: 'fill-payment-paypal',
          icon: 'paypal',
        };
    }
  }, [source]);

  return (
    <div
      className={classNames(
        'flex items-center justify-center w-[55px] h-[55px] rounded-full bg-gray',
        props.background,
        props.color
      )}
    >
      <Icon name={props.icon} size={28} />
    </div>
  );
};

export default TransactionIcon;
