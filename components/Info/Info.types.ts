import { type ReactNode } from 'react';

export interface InfoProps {
  client: {
    name: string;
    href?: string;
  };
  heading: string;
  role: string[];
  smallPrint?: string;
  tech?: string[];
  text: string | ReactNode;
  type: string[];
  year: string | number;
}
