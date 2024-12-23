import Logo from '@/assets/images/logo.png';

const SidebarLogo: React.FC = () => {
  return (
    <div className="h-header flex items-center justify-center">
      <img src={Logo} alt="Soar Logo" />
    </div>
  );
};

export default SidebarLogo;
