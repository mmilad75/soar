import { Balance } from '@/components/UI';
import ChipCardLight from '@/assets/images/chip-card-light.png';
import ChipCardDark from '@/assets/images/chip-card-dark.png';
import { creditCardStyles } from './creditCardStyles';

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
  const styles = creditCardStyles(active);

  const formattedCardNumber = card.cardNumber
    .replace(/\s/g, '')
    .replace(/(\d{4})\d{8}(\d{4})/, '$1********$2')
    .replace(/(.{4})/g, '$1 ')
    .trim();

  const chipIcon = active ? ChipCardLight : ChipCardDark;

  return (
    <div className={styles.wrapper}>
      <div className="p-6 pb-8">
        <div className={styles.topBar}>
          <div>
            <div className="text-xs">Balance</div>
            <Balance className={styles.balance} amount={balance} />
          </div>
          <img className="shrink-0" src={chipIcon} alt="Card Chip Icon" width={35} height={35} />
        </div>
        <div className="flex">
          <div className="mr-16">
            <div className={styles.detailsTitle}>Card Holder</div>
            <div className={styles.detailsValue}>{card.fullName}</div>
          </div>
          <div>
            <div className={styles.detailsTitle}>Valid Thru</div>
            <div className={styles.detailsValue}>{card.expirationDate}</div>
          </div>
        </div>
      </div>
      <div className={styles.cardNumberWrapper}>
        <div className="flex justify-between">
          <div className={styles.cardNumber}>{formattedCardNumber}</div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
