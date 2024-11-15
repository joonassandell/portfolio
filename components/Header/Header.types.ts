import { type BTN_ENTER_EXIT_ARROW, type BTN_ENTER_EXIT_TEXT } from './';
import {
  type ComponentPropsWithoutRef,
  type Dispatch,
  type MutableRefObject,
  type SetStateAction,
} from 'react';
import { type LinkRollProps } from '@/components/LinkRoll';

export interface HeaderProps {
  navTitle?: string;
}

export interface HeaderNavItemProps {
  href: URL['href'];
  isOpen: boolean;
  onClick?: ComponentPropsWithoutRef<'a'>['onClick'];
  openReveal: boolean;
  target?: LinkRollProps['target'];
  title: string;
}

export interface HeaderMaskNavItemProps {
  color: string;
  focus?: boolean;
  href: URL['href'];
  onClick: ComponentPropsWithoutRef<'a'>['onClick'];
  title: string;
  year: string | number;
}

export interface HeaderButtonProps {
  arrow: MutableRefObject<null>;
  enterExit: {
    arrow: typeof BTN_ENTER_EXIT_ARROW;
    text: typeof BTN_ENTER_EXIT_TEXT;
  };
  isDefaultNavTitle: boolean;
  mqM: boolean;
  navRevealTitle: string;
  navTitle: string;
  open: boolean;
  openReveal: boolean;
  setFocusVisible: Dispatch<SetStateAction<boolean>>;
  toggleOpen: () => void;
}
