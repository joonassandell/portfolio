import { type HTMLMotionProps } from 'framer-motion';
import { type RefObject } from 'react';

export interface StampProps {
  addVarsToParent?: boolean;
  className?: string;
  href?: HTMLAnchorElement['href'];
  onClick: HTMLMotionProps<'a'>['onClick'];
  overlay: boolean;
  parentRef: RefObject<Element>;
  transitionStart?: boolean;
}
