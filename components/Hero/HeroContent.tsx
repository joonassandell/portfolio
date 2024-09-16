import { ButtonEnter } from '@/components/Button';
import { Fragment } from 'react';
import { Heading } from '@/components/Heading';
import { type HeroContentProps } from './';
import { Text } from '@/components/Text';
import c from 'clsx';

export const HeroContent = ({
  className,
  heading,
  href,
  onClick,
  role,
  transitionPre,
}: HeroContentProps) => {
  if (!transitionPre) return null;

  return (
    <div className={c('Hero-content visible@l', className)}>
      {/**
       * Hero heading is aligned before this heading and used as the main
       * heading which is why this is aria-hidden
       */}
      <Heading aria-hidden className="mb:xs" size="h5" tag="div">
        {heading}
      </Heading>
      <Text className="mb:m" size="s" tag="p">
        {role?.map((r, i, arr) => {
          const br = arr.length - 1 != i ? <br /> : null;
          return (
            <Fragment key={i}>
              {r}
              {br}
            </Fragment>
          );
        })}
      </Text>
      <ButtonEnter href={href} onClick={onClick}>
        View {heading} project
      </ButtonEnter>
    </div>
  );
};
