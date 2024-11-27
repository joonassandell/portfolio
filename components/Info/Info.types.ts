import { type ButtonProps } from '@/components/Button'
import { type ReactNode } from 'react'

export interface InfoProps {
  client: {
    href?: string
    name: string
  }
  heading: ReactNode
  role: string[]
  smallPrint?: string
  tech?: string[]
  text: ReactNode
  toc?: (Pick<ButtonProps, 'href'> & { text: string })[]
  type: string[]
  year: string | number
}
