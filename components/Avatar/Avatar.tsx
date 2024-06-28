import { type AvatarProps } from './';
import { Text } from '@/components/Text';
import c from 'clsx';
import Image from 'next/image';

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
        <figure className="Avatar-figure">
          <Image
            {...image}
            alt={image.alt}
            className="Avatar-figure-image"
            sizes="3rem"
          />
        </figure>
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
