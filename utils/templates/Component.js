module.exports = componentName => ({
  content: `import c from 'classnames';

const ${componentName} = ({ className, children }) => {
  const classes = c(className, '${componentName}');

  return <div className={classes}>{children}</div>;
};

export default ${componentName};
`,
  extension: `.js`,
});
