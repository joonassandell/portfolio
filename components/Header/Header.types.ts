import { ComponentPropsWithoutRef } from 'react';

export interface HeaderProps {
  navTitle?: string;
}

export interface HeaderNavItemProps {
  color: string;
  onClick: ComponentPropsWithoutRef<'a'>['onClick'];
  name: string;
  url: string;
  year: string | number;
}
