import { type ReactNode } from 'react'

export interface ConditionalWrapperProps {
  children: ReactNode
  condition: boolean
  wrapper: (children?: ReactNode) => ReactNode
}
