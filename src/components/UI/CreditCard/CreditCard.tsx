import { Balance } from '@/components/UI';
import classNames from 'classnames';
import ChipCardLight from '@/assets/images/chip-card-light.png';
import ChipCardDark from '@/assets/images/chip-card-dark.png';

interface ICreditCardProps {
  card: {
    cardNumber: string;
    fullName: string;
    expirationDate: string;
  };
  balance: number;
  active?: boolean;
}

const CreditCard: React.FC<ICreditCardProps> = ({ card, balance, active = false }) => {
  const formattedCardNumber = card.cardNumber
    .replace(/\s/g, '')
    .replace(/(\d{4})\d{8}(\d{4})/, '$1********$2')
    .replace(/(.{4})/g, '$1 ')
    .trim();

  const wrapperClassNames = classNames(
    'font-lato w-[350px] rounded-25px',
    active && 'credit-card-bg text-light',
    !active && 'text-secondary bg-base border border-sky-darker'
  );

  const valuesClassNames = classNames('font-semibold leading-6', !active && 'text-primary');

  const chipIcon = active ? ChipCardLight : ChipCardDark;

  return (
    <div className={wrapperClassNames}>
      <div className="p-6 pb-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="text-xs">Balance</div>
            <Balance className={classNames('text-xl', valuesClassNames)} amount={balance} />
          </div>
          <img className="shrink-0" src={chipIcon} alt="Card Chip Icon" width={35} height={35} />
        </div>
        <div className="flex">
          <div className="mr-16">
            <div className="text-xs uppercase opacity-70">Card Holder</div>
            <div className={valuesClassNames}>{card.fullName}</div>
          </div>
          <div>
            <div className="text-xs uppercase opacity-70">Valid Thru</div>
            <div className={valuesClassNames}>{card.expirationDate}</div>
          </div>
        </div>
      </div>
      <div className={classNames('py-5 px-6', active && 'card-number-bg', !active && 'border-t border-sky-darker')}>
        <div className="flex justify-between">
          <div className={classNames('font-medium text-h2', !active && 'text-primary')}>{formattedCardNumber}</div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
