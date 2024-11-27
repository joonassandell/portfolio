import { type ComponentPropsWithoutRef } from 'react'

export interface BadgeProps extends ComponentPropsWithoutRef<'div'> {
  beacon?: string | boolean
  variant?: 'default' | 'dark'
}
