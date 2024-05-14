import { type ComponentPropsWithoutRef, type PropsWithChildren } from 'react';

export interface TemplateProps extends PropsWithChildren {
  className?: ComponentPropsWithoutRef<'div'>['className'];
  id: string;
  variant?: 'unstyled' | 'default';
}

export interface TemplateMainProps extends PropsWithChildren {
  className?: ComponentPropsWithoutRef<'div'>['className'];
}

export interface TemplateSectionProps extends PropsWithChildren {
  className?: ComponentPropsWithoutRef<'section'>['className'];
  grid?: boolean;
  gridGap?: 'xl' | 'l' | 'm' | false;
  gridRowGap?: 'xl' | 'l' | 'm' | false;
  id?: string;
  paddingBottom?: '15vw' | false;
  paddingTop?: '2xl' | 'l' | 'm' | '5vw' | '10vw' | '15vw' | '20vw' | false;
  theme?: 'dark' | 'light';
  wrap?: boolean;
}
