import { Route, Routes } from 'react-router';
import { AppLayout, AppLoader } from './components/Layout';
import Dashboard from '@/pages/Dashboard';
import Settings from '@/pages/Settings';
import { useSelector } from 'react-redux';
import { useAppDispatch } from './store/hooks';
import { RootState } from './store';
import { useEffect } from 'react';
import { fetchUser } from './store/slices/authSlice';

function App() {
  const { loading } = useSelector((state: RootState) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  if (loading) {
    return <AppLoader />;
  }

  return (
    <AppLayout>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </AppLayout>
  );
}

export default App;
