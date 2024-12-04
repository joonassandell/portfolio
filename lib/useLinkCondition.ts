import { type HTMLAttributeAnchorTarget } from 'react'
import { type ScrollToOptions, useScrollTo } from '@/lib/useScrollTo'
import { useUrlState } from '@/lib/useUrlState'

export const useLinkCondition = (
  href: URL['href'],
  options?: {
    scrollToOptions?: ScrollToOptions
    target?: HTMLAttributeAnchorTarget
  },
) => {
  const { external } = useUrlState(href)
  const currentPageHash = href?.startsWith('#')
  const shouldNavigate =
    Boolean(href) &&
    !external &&
    options?.target != '_blank' &&
    options?.target != '_new' &&
    !currentPageHash

  const scrollTo = useScrollTo(options?.scrollToOptions)
  const scrollToHash = () => currentPageHash && scrollTo(href)

  return {
    scrollToHash,
    shouldNavigate,
  }
}
