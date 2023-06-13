import { useMedia } from 'react-use';
import { mq } from '@/lib/config';

export const useIsMobile = () => {
  const isMobile = useMedia(mq.mobile, false);
  return isMobile;
};
