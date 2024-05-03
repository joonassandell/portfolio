import { type ReactNode } from 'react';

export interface SubInfoProps {
  client: {
    name: string;
    href?: string;
  };
  heading: string;
  role: string[];
  text: string | ReactNode;
  type: string[];
  year: string | number;
}
