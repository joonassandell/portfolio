import { type HTMLAttributeAnchorTarget } from 'react'
import { useScrollTo } from '@/lib/useScrollTo'
import { useUrlState } from '@/lib/useUrlState'

export const useLinkCondition = (
  href: URL['href'],
  target?: HTMLAttributeAnchorTarget,
) => {
  const { external } = useUrlState(href)
  const currentPageHash = href?.startsWith('#')
  const shouldNavigate =
    Boolean(href) &&
    !external &&
    target != '_blank' &&
    target != '_new' &&
    !currentPageHash

  const scrollTo = useScrollTo()
  const scrollToHash = () => currentPageHash && scrollTo(href)

  return {
    scrollToHash,
    shouldNavigate,
  }
}
