import { type StepperStepProps } from './';
import c from 'clsx';

export const StepperStep = ({
  beacon,
  className,
  icon,
  ...props
}: StepperStepProps) => (
  <div
    className={c(
      'Stepper-step',
      {
        'Stepper-step--beacon': beacon,
        'Stepper-step--icon': icon,
      },
      className,
    )}
    {...props}
  >
    {icon}
  </div>
);
