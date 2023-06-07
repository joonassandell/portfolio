import { useMedia } from 'react-use';
import { isServer } from './utility';
import { mq } from './config';

export const useIsMobile = () => {
  const isMobile = useMedia(mq.mobile, false);

  /**
   * This is to suppress the warnings from extra attributes from the server.
   * I think this is fine since this is client side detection anyways.
   *
   * Don't use useInMobile to apply anything that is also SSR.
   */
  if (isServer) return false;

  return isMobile;
};
