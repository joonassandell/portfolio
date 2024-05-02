import { type ReactElement } from 'react';

export interface ConditionalWrapperProps {
  children: JSX.Element | any;
  condition: boolean;
  wrapper: (children?: ReactElement) => JSX.Element;
}
