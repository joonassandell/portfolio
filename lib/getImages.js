import fs from 'node:fs/promises';
import { glob } from 'glob';
import { getPlaiceholder } from 'plaiceholder';

export const getImages = async pattern =>
  Promise.all(
    glob.sync(pattern).map(async file => {
      const src = file.replace('public', '');
      const buffer = await fs.readFile(file);

      const {
        metadata: { height, width },
        ...plaiceholder
      } = await getPlaiceholder(buffer);

      return { plaiceholder: { ...plaiceholder }, src, height, width };
    }),
  );
