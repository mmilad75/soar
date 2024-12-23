import Header from './Header';
import PageContent from './PageContent';
import Sidebar from './Sidebar/Sidebar';

const AppLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex h-screen overflow-y-hidden">
      <Sidebar />
      <main className="w-full">
        <Header />
        <PageContent>{children}</PageContent>
      </main>
    </div>
  );
};

export default AppLayout;
