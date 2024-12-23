import { IContact } from '@/api/contacts';
import { Avatar } from '@/components/common';
import classNames from 'classnames';

interface IQuickTransferItemProps {
  contact: IContact;
  selected?: boolean;
  onClick?: (contact: IContact) => void;
}

const QuickTransferItem: React.FC<IQuickTransferItemProps> = ({ contact, selected, onClick }) => {
  return (
    <div className="inline-block text-center cursor-pointer" onClick={() => onClick?.(contact)}>
      <Avatar src={contact.avatar} size="large" />
      <h4 className={classNames('mt-3', selected && 'font-bold')}>{contact.fullName}</h4>
      <h5 className={classNames('text-secondary', selected && 'font-bold')}>{contact.role}</h5>
    </div>
  );
};

export default QuickTransferItem;
