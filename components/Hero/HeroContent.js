import { ButtonEnter } from '@/components/Button';
import c from 'classnames';
import { Fragment } from 'react';

const HeroContent = ({
  heading,
  className,
  onClick,
  href,
  role = [],
  transitionPre,
}) => {
  if (!transitionPre) return null;
  const classes = c('Hero-content', className);

  return (
    <div className={classes}>
      <p aria-hidden="true" className="Hero-content-heading h5">
        {heading}
      </p>
      <p className="Hero-content-text Text -s">
        {/* UI, UX design <br />
        Web development <br />
        Concept strategy */}
        {role.map((r, i, arr) => {
          const br = arr.length - 1 != i ? <br /> : null;
          return (
            <Fragment key={i}>
              {r}
              {br}
            </Fragment>
          );
        })}
      </p>
      <ButtonEnter
        className="Hero-content-button"
        href={href}
        onClick={onClick}
      >
        View {heading} project
      </ButtonEnter>
    </div>
  );
};

export default HeroContent;
