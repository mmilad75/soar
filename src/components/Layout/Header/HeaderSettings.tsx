import { Icon } from '@/components/UI';

const HeaderSettings: React.FC = () => {
  return (
    <button className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-gray fill-secondary hover:fill-blue transition">
      <Icon name="gear" size={25} />
    </button>
  );
};

export default HeaderSettings;
