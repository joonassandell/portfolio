import { useContext } from 'react';
import { LocomotiveScrollContext } from './';

export const useLocomotiveScroll = () => {
  const context = useContext(LocomotiveScrollContext);
  if (context) return context;
  throw new Error(
    'useLocomotiveScroll must be used within LocomotiveScrollProvider',
  );
};
