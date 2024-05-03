module.exports = componentName => ({
  content: `@forward "${componentName}";
`,
  extension: `.scss`,
  name: 'index',
});
