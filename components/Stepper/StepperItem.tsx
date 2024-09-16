import { type StepperItemProps } from './';
import c from 'clsx';

export const StepperItem = ({
  children,
  className,
  ...props
}: StepperItemProps) => (
  <div className={c('Stepper-item', className)} {...props}>
    {children}
  </div>
);
