import { useMemo } from 'react';
import { useLocation } from 'react-router';

const PageTitle: React.FC = () => {
  const location = useLocation();

  const pageTitle = useMemo(() => {
    if (location.pathname === '/') {
      return 'Overview';
    }

    return location.pathname.substring(1);
  }, [location.pathname]);

  return <h1 className="text-primary text-xl xl:text-h1 font-semibold capitalize">{pageTitle}</h1>;
};

export default PageTitle;
