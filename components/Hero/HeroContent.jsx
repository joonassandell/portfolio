import { ButtonEnter } from '@/components/Button';
import { Text } from '@/components/Text';
import c from 'classnames';
import { Fragment } from 'react';

export const HeroContent = ({
  className,
  heading,
  href,
  onClick,
  role,
  transitionPre,
}) => {
  if (!transitionPre) return null;
  const classes = c('Hero-content', className);

  return (
    <div className={classes}>
      {/* Hero heading is aligned before and used as the main heading */}
      <Text aria-hidden="true" className="Hero-content-heading h5">
        {heading}
      </Text>
      <Text className="mb:0" size="small" tag="p">
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
