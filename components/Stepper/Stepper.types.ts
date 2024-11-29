import { type ComponentPropsWithoutRef, type JSX } from 'react'

export type StepperProps = ComponentPropsWithoutRef<'div'>

export type StepperItemProps = ComponentPropsWithoutRef<'div'>

export interface StepperStepProps
  extends Omit<ComponentPropsWithoutRef<'div'>, 'children'> {
  beacon?: boolean
  icon?: JSX.Element
}
