import { type BadgeProps } from './';
import { isString } from '@/lib/utils';
import c from 'clsx';

export const Badge = ({ beacon, children, className, variant }: BadgeProps) => (
  <div
    className={c(
      'Badge',
      {
        'Badge--dark': variant === 'dark',
      },
      className,
    )}
  >
    {beacon && (
      <div
        className="Badge-beacon"
        style={{
          ['--Badge-beacon' as PropertyKey]: isString(beacon)
            ? beacon
            : undefined,
        }}
      />
    )}
    {children}
  </div>
);
