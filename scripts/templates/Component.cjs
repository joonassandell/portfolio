module.exports = componentName => ({
  content: `import c from 'clsx';

export const ${componentName} = ({ className, children }) => {
  const classes = c('${componentName}', className);

  return <div className={classes}>{children}</div>;
};
`,
  extension: `.tsx`,
});
