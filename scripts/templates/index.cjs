module.exports = componentName => ({
  content: `export * from './${componentName}';
export type * from './${componentName}.types';
`,
  extension: `.ts`,
  name: `index`,
});
