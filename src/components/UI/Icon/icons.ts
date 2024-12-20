import HomeIcon from '@/assets/icons/home.svg?react';
import TransferIcon from '@/assets/icons/transfer.svg?react';
import SettingsIcon from '@/assets/icons/settings.svg?react';
import UserIcon from '@/assets/icons/user.svg?react';
import CreditCardIcon from '@/assets/icons/credit-card.svg?react';
import LoanIcon from '@/assets/icons/loan.svg?react';
import EconometricsIcon from '@/assets/icons/econometrics.svg?react';
import InvestmentIcon from '@/assets/icons/investment.svg?react';
import ServiceIcon from '@/assets/icons/service.svg?react';
import MenuIcon from '@/assets/icons/menu.svg?react';
import CashPayment from '@/assets/icons/cash-payment.svg?react';
import PaypalPayment from '@/assets/icons/paypal-payment.svg?react';
import CardPayment from '@/assets/icons/card-payment.svg?react';

export const icons = {
  creditCard: CreditCardIcon,
  econometrics: EconometricsIcon,
  home: HomeIcon,
  investment: InvestmentIcon,
  loan: LoanIcon,
  menu: MenuIcon,
  settings: SettingsIcon,
  transfer: TransferIcon,
  user: UserIcon,
  service: ServiceIcon,
  cash: CashPayment,
  paypal: PaypalPayment,
  cardStack: CardPayment,
};

export type IconName = keyof typeof icons;
