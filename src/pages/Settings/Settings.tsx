import { Tabs } from '@/components/UI';
import SettingsEditProfile from './SettingsEditProfile';

const Settings: React.FC = () => {
  const tabs = [
    {
      title: 'Edit Profile',
      content: <SettingsEditProfile />,
    },
    {
      title: 'Preferences',
      content: 'Preferences Content',
    },
    {
      title: 'Security',
      content: 'Security Content',
    },
  ];

  return (
    <div className="bg-base p-7.5 rounded-25px">
      <Tabs tabs={tabs} />
    </div>
  );
};

export default Settings;
