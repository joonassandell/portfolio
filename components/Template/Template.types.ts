import { type PropsWithChildren, type ComponentPropsWithoutRef } from 'react';

export interface TemplateProps extends PropsWithChildren {
  className?: ComponentPropsWithoutRef<'div'>['className'];
  id: string;
}

export interface TemplateMainProps extends PropsWithChildren {
  className?: ComponentPropsWithoutRef<'div'>['className'];
}

export interface TemplateSectionProps extends PropsWithChildren {
  className?: ComponentPropsWithoutRef<'section'>['className'];
  id?: string;
  grid?: boolean;
  gridGap?: 'xl' | 'l' | 'm' | false;
  gridRowGap?: 'xl' | 'l' | 'm' | false;
  paddingBottom?: '15vw';
  paddingTop?: '2xl' | '5vw' | '10vw' | '15vw' | '20vw' | false;
  theme?: 'dark' | 'light';
  wrap?: boolean;
}
