import SidebarLogo from './SidebarLogo';
import SidebarNav from './SidebarNav';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-sidebar border-r border-r-sky shrink-0">
      <SidebarLogo />
      <SidebarNav />
    </aside>
  );
};

export default Sidebar;
