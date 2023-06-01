import glob from 'glob';
import { getPlaiceholder } from 'plaiceholder';

const getImagePaths = folder =>
  glob.sync(`./public/assets/${folder}/*.jpg`).map(file => {
    const sep = '/';
    const fileArr = file.split(sep);

    const filePath = fileArr
      .slice(fileArr.indexOf('public') + 1, fileArr.length)
      .join(sep);

    return [sep, filePath].join('');
  });

export const getImages = folder => {
  const imagePaths = getImagePaths(folder);

  return Promise.all(
    imagePaths.map(async src => {
      const { blurhash, img } = await getPlaiceholder(src, {
        size: 32,
      });

      return {
        ...img,
        blurhash,
      };
    }),
  ).then(values => values);
};
