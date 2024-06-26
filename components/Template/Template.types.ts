import { type ComponentPropsWithoutRef, type PropsWithChildren } from 'react';
import { type FooterProps } from '@/components/Footer';

export interface TemplateProps extends PropsWithChildren {
  className?: ComponentPropsWithoutRef<'div'>['className'];
  footerProps?: FooterProps;
  id: string;
  variant?: 'unstyled' | 'default';
}

export interface TemplateMainProps extends PropsWithChildren {
  className?: ComponentPropsWithoutRef<'div'>['className'];
}

export interface TemplateSectionProps
  extends ComponentPropsWithoutRef<'section'> {
  grid?: boolean;
  gridGap?: 'm' | 'l' | 'xl' | false;
  gridRowGap?: 'm' | 'l' | 'xl' | false;
  id?: string;
  pb?: '10vw' | '15vw' | false;
  pt?: 'base' | 'm' | 'l' | '2xl' | '5vw' | '10vw' | '15vw' | '20vw' | false;
  theme?: 'dark' | 'light';
  wrap?: boolean;
}
