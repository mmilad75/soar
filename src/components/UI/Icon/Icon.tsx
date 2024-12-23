import classNames from 'classnames';
import { IconName, icons } from './icons';

interface IIconProps {
  name: IconName;
  color?: TwFill;
  size?: number | string;
  className?: string;
}

const Icon: React.FC<IIconProps> = ({ name, size = 16, className }) => {
  const IconComponent = icons[name];

  if (!IconComponent) return null;

  return (
    <span className={classNames('inline-block', className)}>
      <IconComponent className="fill-inherit" width={size} height={size} />
    </span>
  );
};

export default Icon;
