module.exports = componentName => ({
  content: `import c from 'classnames';

export const ${componentName} = ({ className, children }) => {
  const classes = c(className, '${componentName}');

  return <div className={classes}>{children}</div>;
};

`,
  extension: `.js`,
});
