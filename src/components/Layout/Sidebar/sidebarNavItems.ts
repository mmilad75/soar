import { ISidebarNavItemProps } from './SidebarNavItem';

export const navItems: ISidebarNavItemProps[] = [
  {
    title: 'Dashboard',
    icon: 'home',
    to: '/',
  },
  {
    title: 'Transactions',
    icon: 'transfer',
    to: '/transactions',
  },
  {
    title: 'Accounts',
    icon: 'user',
    to: '/accounts',
  },
  {
    title: 'Investments',
    icon: 'investment',
    to: '/investments',
  },
  {
    title: 'Credit Cards',
    icon: 'creditCard',
    to: '/credit-cards',
  },
  {
    title: 'Loans',
    icon: 'loan',
    to: '/loans',
  },
  {
    title: 'Services',
    icon: 'service',
    to: '/services',
  },
  {
    title: 'My Privileges',
    icon: 'econometrics',
    to: '/privileges',
  },
  {
    title: 'Settings',
    icon: 'settings',
    to: '/settings',
  },
];
