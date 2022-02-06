module.exports = componentName => ({
  content: `@import "${componentName}.scss";
`,
  extension: `.scss`,
  name: '_index',
});
