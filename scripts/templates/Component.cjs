module.exports = componentName => ({
  content: `import { type ${componentName}Props } from './';
import c from 'clsx';

export const ${componentName} = ({ children, className, ...props }: ${componentName}Props) => {
  return (
    <div className={c('${componentName}', className)} {...props}>
      {children}
    </div>
  );
};
`,
  extension: `.tsx`,
});
