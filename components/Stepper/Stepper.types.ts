import { type ComponentPropsWithoutRef, type JSX } from 'react';

export interface StepperProps extends ComponentPropsWithoutRef<'div'> {}

export interface StepperItemProps extends ComponentPropsWithoutRef<'div'> {}

export interface StepperStepProps
  extends Omit<ComponentPropsWithoutRef<'div'>, 'children'> {
  beacon?: boolean;
  icon?: JSX.Element;
}
