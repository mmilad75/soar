import classNames from 'classnames';

export const creditCardStyles = (active: boolean) => {
  return {
    wrapper: classNames(
      'font-lato w-[350px] rounded-25px',
      active && 'credit-card-bg text-light',
      !active && 'text-secondary bg-base border border-sky-darker'
    ),
    topBar: 'flex items-center justify-between mb-8',
    balance: classNames('text-xl font-semibold leading-6', !active && 'text-primary'),
    detailsTitle: 'text-xs uppercase opacity-70',
    detailsValue: classNames('font-semibold leading-6', !active && 'text-primary'),
    cardNumberWrapper: classNames('py-5 px-6', active && 'card-number-bg', !active && 'border-t border-sky-darker'),
    cardNumber: classNames('font-medium text-h2', !active && 'text-primary'),
  };
};
