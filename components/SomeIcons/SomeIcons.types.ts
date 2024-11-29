import { type ComponentPropsWithoutRef } from 'react'

export type SomeIconsProps = Omit<ComponentPropsWithoutRef<'div'>, 'children'>
