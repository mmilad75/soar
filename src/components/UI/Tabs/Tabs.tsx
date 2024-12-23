import { ReactNode, useState } from 'react';
import TabTitle from './TabTitle';

interface ITab {
  title: string;
  content: ReactNode;
}
interface ITabsProps {
  tabs: ITab[];
}

const Tabs: React.FC<ITabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="flex border-b border-sky">
        {tabs.map((tab, index) => (
          <TabTitle title={tab.title} active={activeTab === index} onClick={() => setActiveTab(index)} />
        ))}
      </div>
      <div key={activeTab} className="mt-10 animate-fade-in">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default Tabs;
