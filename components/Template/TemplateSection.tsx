import { type TemplateSectionProps } from './';
import c from 'clsx';

export const TemplateSection = ({
  children,
  className,
  grid = true,
  gridGap = 'l',
  gridRowGap = 'xl',
  pb,
  pt = '2xl',
  theme,
  wrap = true,
  ...props
}: TemplateSectionProps) => {
  /* eslint-disable sort-keys-fix/sort-keys-fix */
  const classes = c('Template-section', className, {
    wrap,
    grid,
    '-gap:xl': grid && gridGap === 'xl',
    '-gap:l': grid && gridGap === 'l',
    '-gap:0': grid && gridGap === false,
    '-gap:row:xl': grid && (gridRowGap === 'xl' || gridGap === 'xl'),
    '-gap:row:l': grid && gridRowGap === 'l',
    '-gap:row:0': grid && gridRowGap === false,
    pt: pt === 'base',
    'pt:m': pt === 'm',
    'pt:l': pt === 'l',
    'pt:2xl': pt === '2xl',
    'pt:5vw': pt === '5vw',
    'pt:10vw': pt === '10vw',
    'pt:15vw': pt === '15vw',
    'pt:20vw': pt === '20vw',
    'pb:10vw': pb === '10vw',
    'pb:15vw': pb === '15vw',
    'pb:5vw': pb === '5vw',
    'theme:dark': theme === 'dark',
    'theme:light': theme === 'light',
  });

  return (
    <section className={classes} {...props}>
      {children}
    </section>
  );
};
