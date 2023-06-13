import { useMedia } from 'react-use';
import { MQ } from '@/lib/config';

export const useIsMobile = () => {
  const isMobile = useMedia(MQ.mobile, false);
  return isMobile;
};
