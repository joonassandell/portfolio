import { type StepperProps } from './';
import c from 'clsx';

export const Stepper = ({ children, className, ...props }: StepperProps) => {
  const classes = c('Stepper', className);

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
