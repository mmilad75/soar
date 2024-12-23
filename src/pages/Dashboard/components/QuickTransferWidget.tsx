import { Icon, Widget } from '@/components/UI';
import { RootState } from '@/store';
import { useAppDispatch } from '@/store/hooks';
import { fetchFrequentContacts } from '@/store/slices/contactsSlice';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import QuickTransferItem from './QuickTransferItem';
import classNames from 'classnames';

const QuickTransferWidget: React.FC = () => {
  const [selected, setSelected] = useState<string>('');
  const [showRest, setShowRest] = useState(false);
  const [amount, setAmount] = useState('');

  const { frequentContacts } = useSelector((state: RootState) => state.contacts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFrequentContacts());
  }, [dispatch]);

  const toggleShowRest = () => {
    setShowRest(!showRest);
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const inputValue = event.target.value;

    if (!inputValue) {
      setAmount('');
    }

    if (/^\d+(\.\d*)?$/.test(inputValue)) {
      setAmount(inputValue);
    }
  };

  return (
    <Widget title="Quick Transfer">
      <div className="flex">
        <div className="overflow-y-auto lg:overflow-hidden">
          <div className={classNames('flex transition', showRest && '-translate-x-full')}>
            {frequentContacts.map((contact) => (
              <div key={contact.id} className="shrink-0 mx-4 first:ml-0 last:mr-0">
                <QuickTransferItem
                  contact={contact}
                  selected={contact.id === selected}
                  onClick={() => setSelected(contact.id)}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="hidden shrink-0 lg:flex items-center">
          <button
            className="w-[50px] h-[50px] ml-8 text-secondary rounded-full shadow-md align-middle leading-none text-center align-middle"
            onClick={toggleShowRest}
          >
            <Icon className={classNames('fill-none stroke-secondary', showRest && 'rotate-180')} name="arrowRight" />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between mt-8">
        <p className="shrink-0 mr-7 text-secondary">Write Amount</p>
        <div className="flex bg-sky rounded-50px overflow-hidden pl-8">
          <input
            type="text"
            placeholder="Amount"
            className="mr-7 bg-sky w-full outline-0"
            value={amount}
            onChange={handleChange}
          />
          <button className="shrink-0 flex items-center bg-dark text-light py-3.5 px-6 font-medium rounded-50px">
            <span className="mr-2">Send</span>
            <Icon className="fill-light" size={26} name="send" />
          </button>
        </div>
      </div>
    </Widget>
  );
};

export default QuickTransferWidget;
