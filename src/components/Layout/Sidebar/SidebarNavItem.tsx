import { Icon, IconName } from '@/components/UI';
import classNames from 'classnames';
import { NavLink } from 'react-router';

export interface ISidebarNavItemProps {
  title: string;
  icon: IconName;
  to: string;
  isActive?: boolean;
}

const SidebarNavItem: React.FC<ISidebarNavItemProps> = ({ title, icon, to, isActive }) => {
  const linkClassNames = classNames(
    'relative group transition',
    'flex items-center',
    'px-10 py-4 mb-1 ',
    isActive && 'text-base fill-base',
    !isActive && 'text-subdued fill-subdued hover:fill-base hover:text-base'
  );

  const indicatorClassNames = classNames(
    'absolute top-0 left-0 h-full w-1.5 bg-dark rounded-tr-lg rounded-br-lg transition',
    isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
  );

  return (
    <NavLink to={to} className={linkClassNames}>
      <Icon className="mr-6" name={icon} size={25} />
      <span className="font-medium text-lg leading-none	">{title}</span>
      <span className={indicatorClassNames}></span>
    </NavLink>
  );
};

export default SidebarNavItem;
