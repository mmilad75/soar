import classNames from 'classnames';

export const creditCardStyles = (active: boolean, className?: string) => {
  return {
    wrapper: classNames(
      'font-lato min-w-[265px] max-w-[350px] rounded-25px',
      active && 'credit-card-bg text-light',
      !active && 'text-secondary bg-base border border-sky-darker',
      className
    ),
    topBar: 'flex items-center justify-between mb-8',
    balance: classNames('text-base lg:text-xl font-semibold leading-6', !active && 'text-primary'),
    detailsTitle: 'text-[10px] lg:text-xs uppercase opacity-70',
    detailsValue: classNames('text-[13px] lg:text-base font-semibold leading-6', !active && 'text-primary'),
    cardNumberWrapper: classNames('py-5 px-6', active && 'card-number-bg', !active && 'border-t border-sky-darker'),
    cardNumber: classNames('font-medium lg:text-h2', !active && 'text-primary'),
    shape: classNames(
      'inline-block w-[30px] h-[30px]  opacity-50 rounded-full',
      active && 'bg-base',
      !active && 'bg-sky-dark'
    ),
  };
};
