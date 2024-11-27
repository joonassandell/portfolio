import { type QuoteTextProps } from './'
import { Text } from '@/components/Text'
import c from 'clsx'

export const QuoteText = ({ children, className }: QuoteTextProps) => {
  return (
    <Text className={c('Quote-text mb:0', className)} maxWidth={false}>
      {children}
    </Text>
  )
}
