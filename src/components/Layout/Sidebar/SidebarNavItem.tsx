import { Icon, IconName } from '@/components/UI';
import { useAppDispatch } from '@/store/hooks';
import { closeSidebar } from '@/store/slices/uiSlice';
import classNames from 'classnames';
import { NavLink } from 'react-router';

export interface ISidebarNavItemProps {
  title: string;
  icon: IconName;
  to: string;
  isActive?: boolean;
}

const SidebarNavItem: React.FC<ISidebarNavItemProps> = ({ title, icon, to, isActive }) => {
  const dispatch = useAppDispatch();

  const onCloseSidebar = () => {
    dispatch(closeSidebar());
  };

  const linkClassNames = classNames(
    'relative group transition',
    'flex items-center',
    'px-10 py-4 mb-1 ',
    isActive && 'text-body fill-base',
    !isActive && 'text-subdued fill-subdued hover:fill-base hover:text-body'
  );

  const indicatorClassNames = classNames(
    'absolute top-0 left-0 h-full w-1.5 bg-dark rounded-tr-lg rounded-br-lg transition',
    isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
  );

  return (
    <NavLink to={to} className={linkClassNames} onClick={onCloseSidebar}>
      <Icon className="mr-6" name={icon} size={25} />
      <span className="font-medium text-lg leading-none	">{title}</span>
      <span className={indicatorClassNames}></span>
    </NavLink>
  );
};

export default SidebarNavItem;
