module.exports = componentName => ({
  content: `export * from './${componentName}';`,
  extension: `.js`,
  name: `index`,
});
