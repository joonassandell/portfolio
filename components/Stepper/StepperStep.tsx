import { type StepperStepProps } from './';
import c from 'clsx';

export const StepperStep = ({
  beacon,
  className,
  icon,
  ...props
}: StepperStepProps) => {
  const classes = c(
    'Stepper-step',
    {
      'Stepper-step--beacon': beacon,
      'Stepper-step--icon': icon,
    },
    className,
  );

  return (
    <div className={classes} {...props}>
      {icon}
    </div>
  );
};
