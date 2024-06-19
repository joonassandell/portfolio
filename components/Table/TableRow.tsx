import { type MouseEvent } from 'react';
import { type TableRowProps } from './';
import { useApp } from '@/components/App';
import { useRouter } from 'next/router';
import { useUrlState } from '@/lib/useUrlState';
import c from 'clsx';

export const TableRow = ({
  background,
  children,
  className,
  href,
  onClick,
  ...props
}: TableRowProps) => {
  const classes = c('Table-row', className);
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
    <tr
      className={classes}
      data-href={href}
      onAuxClick={handleOnClick}
      onClick={handleOnClick}
      style={{
        ['--Table-row-bg' as string]: background,
      }}
      {...props}
    >
      {children}
    </tr>
  );
};
