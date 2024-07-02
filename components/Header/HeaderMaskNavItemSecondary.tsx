import { type HeaderMaskNavItemSecondaryProps, maskNavItemVariant } from './';
import { LinkRoll } from '@/components/LinkRoll';
import { m } from 'framer-motion';
import { useUrlState } from '@/lib/useUrlState';
import c from 'clsx';

export const HeaderMaskNavItemSecondary = ({
  custom,
  href,
  onClick,
  title,
}: HeaderMaskNavItemSecondaryProps) => {
  const { active } = useUrlState(href);
  const classes = c('Header-mask-nav-secondary-item wrap hidden@m', {
    'is-active': active,
  });

  return (
    <m.li className={classes} custom={custom} variants={maskNavItemVariant}>
      <LinkRoll
        className="Header-mask-nav-secondary-link h6 mb:0"
        href={href}
        onClick={onClick}
        templateTransition={false}
        underline={active}
      >
        {title}
      </LinkRoll>
    </m.li>
  );
};
