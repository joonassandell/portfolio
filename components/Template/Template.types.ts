import { type ComponentPropsWithRef, type PropsWithChildren } from 'react';
import { type FooterProps } from '@/components/Footer';
import { type SitemapWithoutArrayKeys } from '@/lib/sitemap';

export interface TemplateProps extends PropsWithChildren {
  className?: string;
  footerProps?: FooterProps;
  id: SitemapWithoutArrayKeys | '404';
  variant?: 'unstyled' | 'default';
}

export interface TemplateMainProps extends PropsWithChildren {}

export interface TemplateSectionProps extends ComponentPropsWithRef<'section'> {
  grid?: boolean;
  gridGap?: 'm' | 'l' | 'xl' | false;
  gridRowGap?: 'm' | 'l' | 'xl' | false;
  pb?: '5vw' | '10vw' | '15vw' | false;
  pt?: 'base' | 'm' | 'l' | '2xl' | '5vw' | '10vw' | '15vw' | '20vw' | false;
  theme?: 'dark' | 'light';
  wrap?: boolean;
}
