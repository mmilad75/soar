import classNames from 'classnames';

interface IAvatarProps {
  src: string;
  size?: 'medium' | 'large' | 'xLarge';
  className?: string;
}

const Avatar: React.FC<IAvatarProps> = ({ src, size = 'medium', className }) => {
  return (
    <div
      className={classNames(
        'inline-block rounded-full',
        size === 'medium' && 'w-[35px] h-[35px] lg:w-[60px] lg:h-[60px]',
        size === 'large' && 'w-[50px] h-[50px] lg:w-[70px] lg:h-[70px]',
        size === 'xLarge' && 'w-[90px] h-[90px] lg:w-[100px] lg:h-[100px]',
        className
      )}
    >
      <img className="rounded-full w-full h-full" src={src} alt="Avatar" />
    </div>
  );
};

export default Avatar;
