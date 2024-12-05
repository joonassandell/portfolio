import { type ComponentPropsWithoutRef } from 'react'

export interface BadgeProps extends ComponentPropsWithoutRef<'div'> {
  beacon?: string | boolean
  beaconAnimate?: boolean
  variant?: 'default' | 'primary'
}
