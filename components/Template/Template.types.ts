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
  gridGap?: 'm' | 'l' | 'xl' | false;
  gridRowGap?: 'm' | 'l' | 'xl' | false;
  id?: string;
  paddingBottom?: '10vw' | '15vw' | false;
  paddingTop?:
    | 'base'
    | 'm'
    | 'l'
    | '2xl'
    | '5vw'
    | '10vw'
    | '15vw'
    | '20vw'
    | false;
  theme?: 'dark' | 'light';
  wrap?: boolean;
}
