import fs from 'node:fs/promises';
import { glob } from 'glob';
import sharp from 'sharp';
import { Image } from '@/types';

export const getImages = async (
  pattern?: string,
): Promise<Image[] | undefined> => {
  try {
    if (!pattern || !glob.sync(pattern).length) {
      throw Error(
        `Images glob pattern is not defined or not found from: ${pattern}`,
      );
    }
    return Promise.all(
      glob.sync(pattern).map(async file => {
        const src = file.replace('public', '');
        const buffer = await fs.readFile(file);
        const { height, width } = await sharp(buffer).metadata();
        return { src, height, width };
      }),
    );
  } catch (error) {
    console.log(`getImages: ${error}`);
  }
};
