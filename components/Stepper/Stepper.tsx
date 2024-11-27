import { type StepperProps } from './'
import c from 'clsx'

export const Stepper = ({ children, className, ...props }: StepperProps) => (
  <div className={c('Stepper', className)} {...props}>
    {children}
  </div>
)
