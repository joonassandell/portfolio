import { type PropsWithChildren, type ComponentPropsWithoutRef } from 'react';

export interface TemplateProps extends PropsWithChildren {
  className?: ComponentPropsWithoutRef<'section'>['className'];
  id: string;
}

export interface TemplateMainProps extends PropsWithChildren {}

export interface TemplateSectionProps extends PropsWithChildren {
  className?: ComponentPropsWithoutRef<'section'>['className'];
  grid?: boolean;
  gridGap?: 'xl' | 'l' | false;
  gridRowGap?: 'xl' | 'l' | false;
  paddingBottom?: '15vw';
  paddingTop?: '2xl' | '5vw' | '10vw' | '15vw' | '20vw';
  theme?: 'dark' | 'light';
  wrap?: boolean;
}
