import { type ReactNode } from 'react';

export interface SubInfoProps {
  client: {
    href?: string;
    name: string;
  };
  heading: ReactNode;
  role: string[];
  text: ReactNode;
  type: string[];
  year: string | number;
}
