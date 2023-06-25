import c from 'classnames';

export const TemplateSection = ({
  children,
  className,
  grid = true,
  gridGap = 'l',
  gridRowGap = 'xl',
  paddingBottom,
  paddingTop = 'xxl',
  theme,
  wrap = true,
  ...props
}) => {
  const classes = c('Template-section', className, {
    wrap,
    grid,
    '-gap:xl': grid && gridGap === 'xl',
    '-gap:l': grid && gridGap === 'l',
    '-gap:0': grid && gridGap === false,
    '-gap:row:xl': grid && (gridRowGap === 'xl' || gridGap === 'xl'),
    '-gap:row:l': grid && gridRowGap === 'l',
    '-gap:row:0': grid && gridRowGap === false,
    'pt:xxl': paddingTop === 'xxl',
    'pt:5vw': paddingTop === '5vw',
    'pt:10vw': paddingTop === '10vw',
    'pt:15vw': paddingTop === '15vw',
    'pt:20vw': paddingTop === '20vw',
    'pb:15vw': paddingBottom === '15vw',
    'theme:dark': theme === 'dark',
    'theme:light': theme === 'light',
  });

  return (
    <section className={classes} {...props}>
      {children}
    </section>
  );
};
