import { type AvatarProps } from './';
import { Figure } from '@/components/Figure';
import { MQ } from '@/lib/config';
import { Text } from '@/components/Text';
import c from 'clsx';

export const Avatar = ({
  className,
  image,
  name,
  text,
  ...props
}: AvatarProps) => {
  const classes = c('Avatar', className);

  return (
    <div className={classes} {...props}>
      {image && (
        <Figure
          {...image}
          alt={image.alt}
          animate={false}
          borderRadius="var(--border-radius-full)"
          className="Avatar-figure"
          sizes={`${MQ['2xl']} 5rem, 3rem`}
        />
      )}
      {(name ?? text) && (
        <div className="Avatar-meta">
          {name && (
            <Text className="Avatar-name mb:0" tag="p">
              {name}
            </Text>
          )}
          {text && (
            <Text
              className="Avatar-text mb:0"
              color="mute"
              size="s"
              tag="p"
              truncate
            >
              {text}
            </Text>
          )}
        </div>
      )}
    </div>
  );
};
