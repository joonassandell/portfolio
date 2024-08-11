import { type AppHeadProps } from '@/components/App';
import {
  type MouseEventHandler,
  type MutableRefObject,
  type PropsWithChildren,
  type ReactNode,
} from 'react';
import { type SitemapWithoutArrayKeys } from '@/lib/sitemap';
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
  className?: string;
  heading?: string;
  headingVariants?: Variants;
  href?: URL['href'];
  id?: SitemapWithoutArrayKeys;
  innerRef?: MutableRefObject<null>;
  onClick?: MouseEventHandler<HTMLElement>;
  stampAddVarsToParent?: boolean;
  stampOverlay?: boolean;
  themeColor?: AppHeadProps['themeColor'];
  transition?: 'pre';
  transitionStart?: boolean;
}

export interface HeroContentProps extends PropsWithChildren {
  className?: string;
  heading: HeroProps['heading'];
  href: URL['href'];
  onClick?: MouseEventHandler<HTMLElement>;
  role: string[];
  transitionPre: boolean;
}
