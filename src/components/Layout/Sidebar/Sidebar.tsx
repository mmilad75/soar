import { useSelector } from 'react-redux';
import SidebarLogo from './SidebarLogo';
import SidebarNav from './SidebarNav';
import { RootState } from '@/store';
import classNames from 'classnames';
import { useAppDispatch } from '@/store/hooks';
import { closeSidebar } from '@/store/slices/uiSlice';

const Sidebar: React.FC = () => {
  const isSidebarVisible = useSelector((state: RootState) => state.ui.isSidebarVisible);

  const dispatch = useAppDispatch();

  const onCloseSidebar = () => {
    dispatch(closeSidebar());
  };

  return (
    <div>
      <aside
        className={classNames(
          classNames(
            !isSidebarVisible && 'translate-x-[-250px] xl:translate-x-0',
            isSidebarVisible && 'translate-x-0 top-0 left-0 bottom-0 ',
            'fixed xl:relative xl:block w-sidebar border-r border-r-sky shrink-0 bg-base ease-in-out duration-300 z-50'
          )
        )}
      >
        <SidebarLogo />
        <SidebarNav />
      </aside>
      {isSidebarVisible && (
        <div
          className={classNames('fixed xl:hidden top-0 left-0 w-screen h-screen bg-backdrop z-40')}
          onClick={onCloseSidebar}
        >
          {/* back drop */}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
