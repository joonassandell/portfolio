module.exports = componentName => ({
  content: `export * from './${componentName}';`,
  extension: `.ts`,
  name: `index`,
});
