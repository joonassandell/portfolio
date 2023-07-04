import fs from 'node:fs/promises';
import { glob } from 'glob';
import sharp from 'sharp';

export const getImages = async pattern => {
  try {
    return Promise.all(
      glob.sync(pattern).map(async file => {
        const src = file.replace('public', '');
        const buffer = await fs.readFile(file);
        const { height, width } = await sharp(buffer).metadata();
        return { src, height, width };
      }),
    );
  } catch (err) {
    console.log(err);
  }
};
