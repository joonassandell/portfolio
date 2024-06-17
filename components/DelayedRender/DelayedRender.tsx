import { type DelayedRenderProps } from './';
import { useDelayedRender } from './';

export const DelayedRender = ({ children, delay }: DelayedRenderProps) =>
  useDelayedRender(delay)(() => children);
