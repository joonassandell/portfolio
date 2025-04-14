import { type FeedItemProps } from './'
import { Figure } from '@/components/Figure'
import { formatDate } from '@/lib/utils'
import { MQ } from '@/lib/config'
import c from 'clsx'

export const FeedItem = ({ className, col, date, ...props }: FeedItemProps) => {
  return (
    <div
      className={c(
        'Template-feedItem',
        {
          '-col:2': col === 2,
        },
        className,
      )}
    >
      <Figure
        alt={props.image.heading}
        border
        quality={100}
        sizes={`${MQ.l} ${col === 2 ? '100vw' : '33vw'}, ${MQ.s} 33vw, 100vw`}
        text={formatDate(date)}
        {...props.image}
      />
    </div>
  )
}
