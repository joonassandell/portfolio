import { useMedia } from 'react-use';
import { mq } from './config';

const useIsMobile = () => {
  const isMobile = useMedia(mq.mobile);
  return isMobile;
};

export default useIsMobile;
