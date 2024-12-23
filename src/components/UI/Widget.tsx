import classNames from 'classnames';

interface IWidgetProps {
  title: string;
  transparent?: boolean;
  size?: 'small' | 'medium' | 'large';
  extra?: React.ReactNode;
}

const Widget: React.FC<React.PropsWithChildren<IWidgetProps>> = ({
  title,
  size = 'medium',
  transparent = false,
  extra = null,
  children,
}) => {
  const contentClassNames = classNames(
    !transparent && 'bg-base rounded-3xl',
    !transparent && size === 'small' && 'p-6',
    !transparent && size === 'medium' && 'px-6 py-7',
    !transparent && size === 'large' && 'px-6 py-8'
  );

  return (
    <section>
      <header className="flex justify-between items-center mb-5">
        <h2 className="text-primary text-h1 font-semibold capitalize">{title}</h2>
        {extra}
      </header>
      <main className={contentClassNames}>{children}</main>
    </section>
  );
};

export default Widget;
