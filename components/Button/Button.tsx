import { AnimatePresence, m } from 'framer-motion';
import { type ButtonEvent, type LinkEvent } from '@/types';
import { type ButtonProps } from './';
import { ConditionalWrapper } from '@/components/ConditionalWrapper';
import { default as NextLink } from 'next/link';
import { TRANS_SECONDARY_FASTEST } from '@/lib/config';
import { useApp } from '@/components/App';
import { useUrlState } from '@/lib/useUrlState';
import c from 'clsx';

export const Button = ({
  children,
  className,
  href,
  icon,
  onClick,
  target,
  templateTransition = true,
  variant,
  ...props
}: ButtonProps) => {
  const classes = c(className, 'Button Button--default', {
    'Button--default--negative': variant === 'negative',
  });
  const { active, external, externalTarget } = useUrlState(href as URL['href']);
  const { setTransition } = useApp();
  const Tag = href ? 'a' : 'button';
  const shouldNavigate =
    Boolean(href) && !external && target != '_blank' && target != '_new';

  return (
    <ConditionalWrapper
      condition={shouldNavigate}
      wrapper={children => (
        <NextLink
          href={href as URL['href']}
          legacyBehavior
          passHref
          scroll={false}
        >
          {children}
        </NextLink>
      )}
    >
      <Tag
        className={classes}
        href={href}
        onClick={(e: ButtonEvent & LinkEvent) => {
          e.stopPropagation();
          shouldNavigate &&
            !active &&
            templateTransition &&
            setTransition('template');
          onClick && onClick(e);
        }}
        target={target ?? externalTarget}
        {...props}
      >
        {children}
        {icon && (
          <AnimatePresence initial={false} mode="popLayout">
            <m.span
              animate={{ scale: 1 }}
              className="Button-icon"
              exit={{ scale: 0 }}
              initial={{ scale: 0 }}
              key={icon.type.name}
              transition={TRANS_SECONDARY_FASTEST}
            >
              {icon}
            </m.span>
          </AnimatePresence>
        )}
      </Tag>
    </ConditionalWrapper>
  );
};
