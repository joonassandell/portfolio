import {
  type ComponentPropsWithoutRef,
  type MouseEventHandler,
  type PropsWithChildren,
  type ReactNode,
} from 'react';
import { type Variants } from 'framer-motion';

export interface HeroProps {
  children?:
    | ((passedProps: {
        noTransition: boolean;
        templateTransition: boolean;
        transitionInitial: boolean;
        transitionPre: boolean;
        transitionStartOrDefault: boolean;
      }) => ReactNode)
    | ReactNode;
  className?: ComponentPropsWithoutRef<'section'>['className'];
  heading?: string;
  headingVariants?: Variants;
  href?: URL['href'];
  id?: string;
  onClick?: MouseEventHandler<HTMLElement>;
  stampAddVarsToParent?: boolean;
  stampOverlay?: boolean;
  themeColor?: string;
  transition?: 'pre';
  transitionStart?: boolean;
}

export interface HeroContentProps extends PropsWithChildren {
  className?: ComponentPropsWithoutRef<'div'>['className'];
  heading: HeroProps['heading'];
  href: URL['href'];
  onClick?: MouseEventHandler<HTMLElement>;
  role: string[];
  transitionPre: boolean;
}
