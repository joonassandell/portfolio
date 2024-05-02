import { ComponentPropsWithoutRef } from 'react';

export interface HeaderProps {
  navTitle?: string;
}

export interface HeaderNavItemProps extends ComponentPropsWithoutRef<'a'> {
  color: string;
  name: string;
  url: string;
  year: string | number;
}
