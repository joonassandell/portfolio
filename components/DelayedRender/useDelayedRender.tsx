import { type ReactNode, useEffect, useState } from 'react';

export const useDelayedRender = (delay: number = 500) => {
  const [delayed, setDelayed] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => setDelayed(false), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  return (fn: () => ReactNode) => (!delayed ? fn() : null);
};
