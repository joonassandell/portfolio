import { type BadgeProps } from './';
import c from 'clsx';

export const Badge = ({ beacon, children, className, variant }: BadgeProps) => {
  const classes = c(
    'Badge',
    {
      'Badge--negative': variant === 'negative',
    },
    className,
  );

  return (
    <div className={classes}>
      {beacon && (
        <div
          className="Badge-beacon"
          style={{
            ['--Badge-beacon' as string]: beacon,
          }}
        />
      )}
      {children}
    </div>
  );
};
