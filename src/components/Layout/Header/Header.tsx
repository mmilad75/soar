import { Icon } from '@/components/UI';
import PageTitle from './PageTitle';
import { useAppDispatch } from '@/store/hooks';
import { openSidebar } from '@/store/slices/uiSlice';
import { Avatar } from '@/components/common';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

const Header: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  const dispatch = useAppDispatch();

  const onOpenSidebar = () => {
    dispatch(openSidebar());
  };

  return (
    <header className="flex items-center justify-between h-header px-10 border-b border-b-sky">
      <button
        className="xl:hidden leading-none fill-primary hover:fill-secondary transition ease-in-out duration-300"
        onClick={onOpenSidebar}
      >
        <Icon name="menu" size={18} />
      </button>

      <PageTitle />
      <div>
        <Avatar size="medium" src={user?.avatar ?? ''} />
      </div>
    </header>
  );
};

export default Header;
