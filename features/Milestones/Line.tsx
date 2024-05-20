import { type CartesianMarkerProps } from '@nivo/core';
import {
  CATEGORY_COLOR,
  MILESTONES_PER_YEAR,
  MILESTONES_SORTED,
  MILESTONES_YEARS,
  type PointSymbolProps,
  type PointTooltipProps,
} from './';
import { formatDate } from '@/lib/utils';
import { type LineSvgProps } from '@nivo/line';
import {
  type ReactNode,
  type RefObject,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Text } from '@/components/Text';
import { useAppContext } from '@/components/App';
import dynamic from 'next/dynamic';

const ResponsiveLine = dynamic(
  () => import('@nivo/line').then(m => m.ResponsiveLine),
  { ssr: false },
);

export const MilestonesLine = () => {
  const ref = useRef<HTMLDivElement>(null);
  const refInner = useRef<HTMLDivElement>(null);
  const {
    detect: { isDesktopSafari },
  } = useAppContext();
  const years = MILESTONES_YEARS.map(y => new Date(y));
  const largestValue = Math.max(...Object.values(MILESTONES_PER_YEAR));
  const largestToEvenValue =
    largestValue % 2 === 0 ? largestValue : largestValue + 1;

  const convertData = MILESTONES_SORTED.map(m => {
    const date = new Date(m.date);

    return {
      ...m,
      x: date,
      y: MILESTONES_PER_YEAR[date.getFullYear()],
    };
  });

  const latestDate = new Date(convertData[0].x);
  latestDate.setMonth(latestDate.getMonth() + 3);

  const lineData = [
    {
      data: [
        {
          x: latestDate,
          y: null,
        },
        ...convertData,
        {
          hidden: true,
          x: new Date('2005-05-01'),
          y: 1,
        },
      ],
      id: 'milestones',
    },
  ];

  // This causes few hydration errors
  const markers = MILESTONES_SORTED.filter(m => m.category === 'career').map(
    m => {
      const obj: CartesianMarkerProps = {
        axis: 'x',
        legendOrientation: 'horizontal',
        lineStyle: {
          stroke: 'var(--border-900)',
          strokeWidth: 1,
        },
        value: new Date(m.date),
      };
      return obj;
    },
  );

  useEffect(() => {
    if (!isDesktopSafari || !ref.current) return;
    ref.current.style.direction = 'ltr';
    ref.current.scrollLeft = ref.current.scrollWidth;
  }, [isDesktopSafari]);

  /**
   * Default or unwanted props which cause hydration errors if not defined
   * @link https://nivo.rocks/line
   */
  const preventHydrationErrors: Omit<LineSvgProps, 'data'> = {
    areaBaselineValue: 0,
    areaBlendMode: 'normal',
    areaOpacity: 0.2,
    crosshairType: 'bottom-left',
    debugMesh: false,
    debugSlices: false,
    defs: [],
    enableArea: false,
    enableCrosshair: false,
    enableGridX: true,
    enableGridY: true,
    enablePointLabel: false,
    enablePoints: true,
    enableSlices: false,
    enableTouchCrosshair: false,
    fill: [],
    isInteractive: true,
    layers: [
      'grid',
      'markers',
      'axes',
      'areas',
      'crosshair',
      'lines',
      'points',
      'slices',
      'mesh',
      'legends',
    ],
    legends: [],
    pointLabel: 'yFormatted',
    role: 'img',
    sliceTooltip: () => <></>,
  };

  return (
    <div className="Template-line scrollbar" ref={ref}>
      <div className="Template-line-inner" ref={refInner}>
        <ResponsiveLine
          animate
          axisBottom={{
            format: value => value.getFullYear(),
            tickPadding: 0,
            tickSize: 0,
            tickValues: 'every 1 year',
          }}
          axisLeft={{
            tickPadding: 0,
            tickSize: 0,
          }}
          axisRight={{
            format: () => '',
            legend: 'Milestones per year',
            legendPosition: 'middle',
            tickPadding: 0,
            tickSize: 0,
          }}
          axisTop={null}
          colors={['var(--border-900)']}
          curve="monotoneX"
          data={lineData}
          gridXValues={years}
          lineWidth={2}
          markers={markers}
          pointBorderColor={{ from: 'color' }}
          pointBorderWidth={2}
          pointColor={{ from: 'color' }}
          pointSize={0.5}
          pointSymbol={props => (
            <PointSymbol {...(props as PointSymbolProps)} />
          )}
          theme={{
            axis: {
              legend: {
                text: {
                  fontSize: 'inherit',
                },
              },
            },
            background: 'transparent',
            grid: {
              line: {
                stroke: 'var(--border-100)',
              },
            },
            text: {
              fill: 'inherit',
              fontFamily: 'inherit',
              fontSize: 'inherit',
            },
          }}
          tooltip={({ point }: PointTooltipProps) => {
            const {
              data: { event, xFormatted },
            } = point;

            return (
              <Tooltip container={refInner} point={point}>
                <Text size="xs">{event}</Text>
                <Text className="text:color:700" size="xs">
                  {xFormatted}
                </Text>
              </Tooltip>
            );
          }}
          useMesh
          xFormat={v => formatDate(v as string)}
          xScale={{
            format: '%Y-%m-%d',
            precision: 'day',
            type: 'time',
            useUTC: false,
          }}
          yScale={{ max: largestToEvenValue, type: 'linear' }}
          {...preventHydrationErrors}
        />
      </div>
    </div>
  );
};

const PointSymbol = ({
  borderColor,
  borderWidth,
  datum,
  size,
}: PointSymbolProps) => {
  if (datum.hidden) return;
  size = datum.major ? size * 1.25 : size;

  return (
    <g>
      <circle fill="var(--bg-50)" r={`${size * 1.4}rem`} />
      <circle
        fill="var(--bg-50)"
        r={`${size}rem`}
        stroke={borderColor}
        strokeWidth={borderWidth}
      />
      <circle fill={CATEGORY_COLOR[datum.category]} r={`${size / 2}rem`} />
    </g>
  );
};

/**
 * Makes the tooltip somewhat respect the boundaries of the Line
 * @link https://github.com/plouc/nivo/issues/580#issuecomment-1974983707
 */
function Tooltip(props: {
  children: ReactNode;
  container: RefObject<HTMLDivElement>;
  point: { x: number; y: number };
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState<{
    height: number;
    width: number;
  }>({ height: 0, width: 0 });

  const [tooltipSize, setTooltipSize] = useState<{
    height: number;
    width: number;
  }>({ height: 0, width: 0 });

  useEffect(() => {
    const container = props.container.current;
    if (container) {
      const { height, width } = container.getBoundingClientRect();
      setContainerSize({ height, width });
    }
  }, [setContainerSize, props.container]);

  useEffect(() => {
    const tooltip = ref.current;
    if (tooltip) {
      const { height, width } = tooltip.getBoundingClientRect();
      setTooltipSize({ height, width });
    }
  }, [setTooltipSize]);

  const offsetHorizontal = useMemo(() => {
    if (props.point.x < tooltipSize.width) {
      return tooltipSize.width / 3;
    }

    const rightEdge = containerSize.width - props.point.x;
    if (rightEdge < tooltipSize.width) {
      return -(tooltipSize.width / 4);
    }

    return 0;
  }, [tooltipSize.width, props.point.x, containerSize.width]);

  const offsetVertical = useMemo(() => {
    if (props.point.y < containerSize.height / 3) {
      return tooltipSize.height + 48;
    }

    return 12;
  }, [tooltipSize.height, props.point.y, containerSize.height]);

  return (
    <div
      className="Template-line-tooltip"
      ref={ref}
      style={{
        translate: `${offsetHorizontal}px ${offsetVertical}px`,
      }}
    >
      <div className="Template-line-tooltip-inner">{props.children}</div>
    </div>
  );
}
