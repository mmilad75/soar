import { useLocation } from 'react-router';
import SidebarNavItem from './SidebarNavItem';
import { navItems } from './sidebarNavItems';

const SidebarNav: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="mt-10">
      {navItems.map((item) => (
        <SidebarNavItem key={item.to} isActive={location.pathname === item.to} {...item} />
      ))}
    </nav>
  );
};

export default SidebarNav;
