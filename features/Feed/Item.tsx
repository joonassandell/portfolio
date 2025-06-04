import { type FeedItemProps } from './'
import { Figure } from '@/components/Figure'
import { formatDate } from '@/lib/utils'
import { MQ } from '@/lib/config'
import c from 'clsx'

export const FeedItem = ({
  className,
  col,
  colSpan,
  date,
  ...props
}: FeedItemProps) => {
  return (
    <div
      className={c(
        'Template-feedItem',
        {
          '-col:3': col === 3,
          '-colSpan:2': colSpan === 2,
        },
        className,
      )}
    >
      <Figure
        alt={props.image.heading}
        border
        quality={100}
        sizes={`${MQ.l} ${colSpan === 2 ? '100vw' : '33vw'}, ${MQ.s} 33vw, 100vw`}
        text={formatDate(date)}
        {...props.image}
      />
    </div>
  )
}
