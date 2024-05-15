import { Badge } from '@/components/Badge';
import { type CartesianMarkerProps } from '@nivo/core';
import {
  CATEGORY_COLOR,
  CATEGORY_NAME_SHORT,
  MILESTONES,
  type PointSymbolProps,
} from './';
import { Head } from '@/components/Head';
import { Heading } from '@/components/Heading';
import { type LineSvgProps } from '@nivo/line';
import { objectEntries } from '@/lib/utils';
import { type PageProps } from '@/types';
import { Template, TemplateMain, TemplateSection } from '@/components/Template';
import { Text } from '@/components/Text';
import { useMemo } from 'react';
import dynamic from 'next/dynamic';

const ResponsiveLine = dynamic(
  () => import('@nivo/line').then(m => m.ResponsiveLine),
  { ssr: false },
);

export const MilestonesPage = ({ id, themeColor, title }: PageProps) => {
  const milestonesPerYear = MILESTONES.reduce(
    (acc: { [year: number]: number }, curr) => {
      const year = new Date(curr.date).getFullYear();
      acc[year] = (acc[year] || 0) + 1;
      return acc;
    },
    {},
  );

  const milestonesSorted = [...MILESTONES].sort(
    (a, b) => new Date(b?.date).valueOf() - new Date(a?.date).valueOf(),
  );

  const lineData = useMemo(() => {
    const convertData = milestonesSorted.map(el => {
      const date = new Date(el.date);

      return {
        ...el,
        x: date.toISOString().split('T')[0],
        y: milestonesPerYear[date.getFullYear()],
      };
    });

    return [
      {
        data: convertData,
        id: 'milestones',
      },
    ];
  }, [milestonesPerYear, milestonesSorted]);

  // This causes few hydration errors
  const markers = useMemo(() => {
    return milestonesSorted
      .filter(el => el.category === 'career')
      .map(el => {
        const obj: CartesianMarkerProps = {
          axis: 'x',
          legendOrientation: 'horizontal',
          lineStyle: {
            stroke: 'var(--border-900)',
            strokeWidth: 1,
          },
          value: new Date(el.date),
        };
        return obj;
      });
  }, [milestonesSorted]);

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
    enableSlices: 'x',
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
    tooltip: () => <></>,
    useMesh: false,
  };

  return (
    <Template id={id} variant="default">
      <Head themeColor={themeColor} title={title} />
      <TemplateMain>
        <TemplateSection>
          <div className="grid-col grid-col:6@l">
            <Heading size="h1" tag="h1">
              Milestones
            </Heading>
            <Text size="l">
              <p>
                Et sit officia deserunt mollit cillum eu Lorem aliqua
                exercitation consectetur dolore id voluptate exercitation ea qui
                ullamco laboris excepteur incididunt aliquip non ollit.
              </p>
            </Text>
          </div>
        </TemplateSection>
        <TemplateSection
          aria-hidden
          className="pt:2xl@m pl:0"
          grid={false}
          paddingTop="l"
        >
          <div className="Template-line scrollbar">
            <div className="Template-line-inner">
              <ResponsiveLine
                animate
                axisBottom={{
                  format: value => value.getFullYear(),
                  tickPadding: 12,
                  tickSize: 0,
                  tickValues: 'every 1 year',
                }}
                axisLeft={{
                  format: e => (Math.floor(e) === e ? e : ''),
                  tickPadding: 16,
                  tickSize: 0,
                }}
                axisRight={null}
                axisTop={null}
                colors={['var(--border-900)']}
                curve="monotoneX"
                data={lineData}
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
                  background: 'transparent',
                  grid: {
                    line: {
                      stroke: 'var(--border-100)',
                    },
                  },
                  text: {
                    fill: 'var(--text-mute)',
                    fontFamily: 'inherit',
                    fontSize: '0.8125rem',
                  },
                }}
                xFormat="time:%Y-%m-%d"
                xScale={{
                  format: '%Y-%m-%d',
                  precision: 'day',
                  type: 'time',
                  useUTC: false,
                }}
                yScale={{ type: 'linear' }}
                {...preventHydrationErrors}
              />
            </div>
          </div>
        </TemplateSection>
        <TemplateSection
          aria-hidden
          className="pr:0 pl:0"
          grid={false}
          paddingBottom="15vw"
          paddingTop="m"
        >
          <div className="Template-badges scrollbar">
            {objectEntries(CATEGORY_NAME_SHORT).map(([category, name]) => {
              return (
                <Badge beacon={CATEGORY_COLOR[category]} key={category}>
                  {name}
                </Badge>
              );
            })}
          </div>
        </TemplateSection>
      </TemplateMain>
    </Template>
  );
};

export const PointSymbol = ({
  borderColor,
  borderWidth,
  datum,
  size,
}: PointSymbolProps) => {
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
