import { forwardRef } from 'react';
import { type TemplateAreaProps } from './';
import c from 'clsx';

export const TemplateArea = forwardRef<HTMLDivElement, TemplateAreaProps>(
  (
    {
      children,
      className,
      grid = true,
      gridGap = 'l',
      gridRowGap = 'l',
      pb,
      pt = '2xl',
      wrap = true,
      ...props
    },
    ref,
  ) => (
    <div
      className={c(
        'Template-area',
        {
          /* eslint-disable sort-keys-fix/sort-keys-fix */
          wrap,
          grid,
          '-gap:l': grid && gridGap === 'l',
          '-gap:0': grid && gridGap === false,
          '-gap:row:l': grid && gridRowGap === 'l',
          '-gap:row:0': grid && gridRowGap === false,
          pt: pt === 'base',
          'pt:m': pt === 'm',
          'pt:l': pt === 'l' || pt === 'l-2xl',
          'pt:grid-gap-row-l': pt === 'grid-gap-row-l',
          'pt:2xl@l': pt === 'l-2xl',
          'pt:2xl': pt === '2xl' || pt === '2xl-5xl',
          'pt:5xl@l': pt === '2xl-5xl',
          'pb:2xl': pb === '2xl' || pb === '2xl-5xl',
          'pb:5xl@l': pb === '2xl-5xl',
        },
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  ),
);

TemplateArea.displayName = 'TemplateArea';
