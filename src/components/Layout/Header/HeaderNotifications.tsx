import { Icon } from '@/components/UI';

const HeaderNotifications: React.FC = () => {
  return (
    <button className="flex w-[50px] h-[50px] items-center justify-center rounded-full bg-gray fill-secondary hover:fill-blue transition">
      <Icon name="bell" size={25} />
    </button>
  );
};

export default HeaderNotifications;
