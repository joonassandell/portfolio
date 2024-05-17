module.exports = componentName => ({
  content: `import { type ComponentPropsWithoutRef } from 'react';

export interface ${componentName}Props extends ComponentPropsWithoutRef<'div'> {}`,
  extension: `.types.ts`,
});
