import { type Variants } from 'framer-motion';
import {
  type ComponentPropsWithoutRef,
  type ReactNode,
  type PropsWithChildren,
  type MouseEventHandler,
} from 'react';

export interface HeroProps {
  className?: ComponentPropsWithoutRef<'section'>['className'];
  children?:
    | ((passedProps: {
        noTransition?: boolean;
        transitionInitial?: boolean;
        transitionPre?: boolean;
        transitionStartOrDefault?: boolean;
        templateTransition?: boolean;
      }) => ReactNode)
    | ReactNode;
  heading?: string;
  headingVariants?: Variants;
  href?: HTMLAnchorElement['href'];
  id?: string;
  onClick?: MouseEventHandler<HTMLElement>;
  stampOverlay?: boolean;
  stampAddVarsToParent?: boolean;
  themeColor?: string;
  transitionStart?: boolean;
  transition?: 'pre';
}

export interface HeroContentProps extends PropsWithChildren {
  className?: ComponentPropsWithoutRef<'div'>['className'];
  heading: string;
  href: HTMLAnchorElement['href'];
  onClick?: MouseEventHandler<HTMLElement>;
  role: string[];
  transitionPre: boolean;
}
