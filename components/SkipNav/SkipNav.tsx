import { Button } from '@/components/Button'
import { type SkipNavProps } from './'

export const SkipNav = ({ children, href }: SkipNavProps) => {
  return (
    <Button className="SkipNav" href={href} size="s">
      {children}
    </Button>
  )
}
