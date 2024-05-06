module.exports = componentName => ({
  content: `.${componentName} {}`,
  extension: `.scss`,
  name: `${componentName}`,
});
