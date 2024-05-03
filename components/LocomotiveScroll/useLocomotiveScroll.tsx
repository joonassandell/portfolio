import { LocomotiveScrollContext } from './';
import { useContext } from 'react';

export const useLocomotiveScroll = () => {
  const context = useContext(LocomotiveScrollContext);
  if (context) return context;
  throw new Error(
    'useLocomotiveScroll must be used within LocomotiveScrollProvider',
  );
};
