import { type ComponentPropsWithoutRef } from 'react';
import { type LinkRollProps } from '@/components/LinkRoll';

export interface HeaderProps {
  navTitle?: string;
}

export interface HeaderMaskNavItemProps {
  color: string;
  href: URL['href'];
  onClick: ComponentPropsWithoutRef<'a'>['onClick'];
  title: string;
  year: string | number;
}

export interface HeaderNavItemProps {
  href: URL['href'];
  isOpen: boolean;
  onClick?: ComponentPropsWithoutRef<'a'>['onClick'];
  openReveal: boolean;
  target?: LinkRollProps['target'];
  title: string;
}
