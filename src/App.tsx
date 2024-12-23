import { Route, Routes } from 'react-router';
import AppLayout from './components/Layout/AppLayout';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';

function App() {
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
