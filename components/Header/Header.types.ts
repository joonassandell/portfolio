import { type ComponentPropsWithoutRef } from 'react';

export interface HeaderProps {
  navTitle?: string;
}

export interface HeaderNavItemProps {
  color: string;
  name: string;
  onClick: ComponentPropsWithoutRef<'a'>['onClick'];
  url: string;
  year: string | number;
}
