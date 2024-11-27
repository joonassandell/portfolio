import { type ConditionalWrapperProps } from './'

export const ConditionalWrapper = ({
  children,
  condition,
  wrapper,
}: ConditionalWrapperProps) => (condition ? wrapper(children) : children)
