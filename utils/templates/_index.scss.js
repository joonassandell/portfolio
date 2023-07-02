module.exports = componentName => ({
  content: `@import "${componentName}";
`,
  extension: `.scss`,
  name: '_index',
});
