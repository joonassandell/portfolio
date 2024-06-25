import { type StepperItemProps } from './';
import c from 'clsx';

export const StepperItem = ({
  children,
  className,
  ...props
}: StepperItemProps) => {
  const classes = c('Stepper-item', className);

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
