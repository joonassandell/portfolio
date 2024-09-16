import { type ComponentPropsWithoutRef, type PropsWithChildren } from 'react';

export interface QuoteProps extends ComponentPropsWithoutRef<'blockquote'> {
  size?: 'm' | 'l';
}

export interface QuoteTextProps extends PropsWithChildren {
  className?: string;
}

export interface QuoteFooterProps extends ComponentPropsWithoutRef<'footer'> {}
