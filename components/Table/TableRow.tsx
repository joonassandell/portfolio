import { m } from 'framer-motion';
import { type MouseEvent } from 'react';
import { ROW_VARIANT, type TableRowProps } from './';
import { useApp } from '@/components/App';
import { useInView } from '@/lib/useInView';
import { useRef } from 'react';
import { useRouter } from 'next/router';
import { useUrlState } from '@/lib/useUrlState';
import c from 'clsx';

export const TableRow = ({
  animate = true,
  background,
  children,
  className,
  href,
  onClick,
  ...props
}: TableRowProps) => {
  const classes = c('Table-row', className);
  const ref = useRef(null);
  const inView = useInView(ref);
  const { setTransition } = useApp();
  const { push } = useRouter();
  const { external, externalTarget } = useUrlState(href as URL['href']);

  const handleOnClick = (
    e: MouseEvent<HTMLTableRowElement, globalThis.MouseEvent>,
  ) => {
    onClick && onClick(e);

    if (href) {
      if (e.type === 'auxclick') {
        if (e.button === 1) window.open(href, externalTarget);
        return;
      }

      if (external) {
        window.open(href, externalTarget);
      } else {
        setTransition('template');
        push(href, undefined, { scroll: false });
      }
    }
  };

  return (
    <m.tr
      className={classes}
      data-href={href}
      onAuxClick={handleOnClick}
      onClick={handleOnClick}
      ref={ref}
      style={{
        ['--Table-row-bg' as string]: background,
      }}
      {...(animate && {
        animate: inView && 'animate',
        initial: 'initial',
        ref,
        variants: ROW_VARIANT,
      })}
      {...props}
    >
      {children}
    </m.tr>
  );
};
