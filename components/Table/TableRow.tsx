import { type MouseEvent } from 'react';
import { type TableRowProps } from './';
import { useAppContext } from '@/components/App';
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
  const { setTransition } = useAppContext();
  const { push } = useRouter();
  const { external, externalTarget } = useUrlState(href as URL['href']);

  const handleOnClick = (
    e: MouseEvent<HTMLTableRowElement, globalThis.MouseEvent>,
  ) => {
    onClick && onClick(e);

    if (href) {
      if (external || e.type === 'auxclick') {
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
