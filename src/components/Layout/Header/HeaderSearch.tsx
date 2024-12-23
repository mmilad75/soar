import { Icon } from '@/components/UI';

const HeaderSearch: React.FC = () => {
  return (
    <div className="flex items-center py-3.5 px-6 bg-gray rounded-40px fill-secondary">
      <Icon name="search" size={20} />
      <input
        type="search"
        placeholder="Search for something"
        className="ml-3.5 bg-transparent outline-none text-secondary .placeholder:text-secondary placeholder-secondary"
      />
    </div>
  );
};

export default HeaderSearch;
