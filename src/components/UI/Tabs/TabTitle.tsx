import classNames from 'classnames';

interface ITabTitleProps {
  title: string;
  active: boolean;
  onClick: () => void;
}

const TabTitle: React.FC<ITabTitleProps> = ({ title, active, onClick }) => {
  return (
    <div
      className={classNames(
        'relative mr-16 pb-2 px-4 font-medium cursor-pointer',
        'transition hover:text-base',
        !active && 'text-secondary ',
        active && 'text-base'
      )}
      onClick={onClick}
    >
      {title}
      {active ? (
        <span className="absolute left-0 right-0 -bottom-px h-[3px] bg-dark rounded-tr-xl rounded-tl-xl"></span>
      ) : null}
    </div>
  );
};

export default TabTitle;
