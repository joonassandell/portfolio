import { type QuoteTextProps } from './';
import { Text } from '@/components/Text';
import c from 'clsx';

export const QuoteText = ({ children, className }: QuoteTextProps) => {
  const classes = c('Quote-text mb:m text-wrap:balance', className);

  return <Text className={classes}>{children}</Text>;
};
