import { type BadgeProps } from './'
import { isString } from '@/lib/utils'
import c from 'clsx'

export const Badge = ({
  beacon,
  beaconAnimate,
  children,
  className,
  variant,
}: BadgeProps) => (
  <div
    className={c(
      'Badge',
      {
        '-animate:beacon': beaconAnimate,
        'Badge--primary': variant === 'primary',
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
)
