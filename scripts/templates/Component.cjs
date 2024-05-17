module.exports = componentName => ({
  content: `import { type ${componentName}Props } from './';
import c from 'clsx';

export const ${componentName} = ({ children, className }: ${componentName}Props) => {
  const classes = c('${componentName}', className);

  return <div className={classes}>{children}</div>;
};
`,
  extension: `.tsx`,
});
