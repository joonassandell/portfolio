import { glob } from 'glob';
import { imageSize } from 'image-size';

export const getImages = async pattern => {
  try {
    return Promise.all(
      glob.sync(pattern).map(async file => {
        const src = file.replace('public', '');
        const { height, width } = await imageSize(file);
        return { src, height, width };
      }),
    );
  } catch (err) {
    console.log(err);
  }
};
