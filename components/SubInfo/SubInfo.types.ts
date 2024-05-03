import { type ReactNode } from 'react';

export interface SubInfoProps {
  client: {
    href?: string;
    name: string;
  };
  heading: string;
  role: string[];
  text: string | ReactNode;
  type: string[];
  year: string | number;
}
