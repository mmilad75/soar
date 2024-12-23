import PageTitle from './PageTitle';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between h-header px-10 border-b border-b-sky">
      <PageTitle />
    </header>
  );
};

export default Header;
