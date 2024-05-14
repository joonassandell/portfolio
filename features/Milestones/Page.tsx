import { Head } from '@/components/Head';
import { Heading } from '@/components/Heading';
import { MILESTONES } from './';
import { type PageProps } from '@/types';
import { type PointSymbolProps } from '@nivo/line';
import { Template, TemplateMain, TemplateSection } from '@/components/Template';
import { Text } from '@/components/Text';
import { useMemo } from 'react';
import dynamic from 'next/dynamic';

const ResponsiveLine = dynamic(
  () => import('@nivo/line').then(m => m.ResponsiveLine),
  { ssr: false },
);

export const MilestonesPage = ({ id, themeColor, title }: PageProps) => {
  const milestonesPerQuarter = MILESTONES.reduce(
    (acc: { [key: string]: number }, curr) => {
      const [year, month] = curr.date.split('-');
      let quarter = Math.ceil(parseInt(month) / 3);
      if (isNaN(quarter)) {
        quarter = 1;
      }
      const key = `${year}-Q${quarter}`;

      acc[key] = (acc[key] || 0) + 1;
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
      const [year, month] = el.date.split('-');
      let quarter = Math.ceil(parseInt(month) / 3);
      if (isNaN(quarter)) {
        quarter = 1;
      }
      const key = `${year}-Q${quarter}`;

      return {
        ...el,
        x: date.toISOString().split('T')[0],
        y: milestonesPerQuarter[key],
      };
    });

    return [
      {
        data: convertData,
        id: 'milestones',
      },
    ];
  }, [milestonesPerQuarter, milestonesSorted]);

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
          className="pt:l pt:2xl@m pl:0"
          grid={false}
          paddingBottom="15vw"
          paddingTop={false}
        >
          <div className="Template-line scrollbar">
            <div className="Template-line-inner">
              <ResponsiveLine
                animate
                axisBottom={{
                  format: v => {
                    const year = v.getFullYear();
                    return year;
                  },
                  tickPadding: 8,
                  tickSize: 0,
                  tickValues: 'every 1 year',
                }}
                axisLeft={{
                  format: e => (Math.floor(e) === e ? e : ''),
                  // format: e => (Number.isInteger(e) ? e : ''),
                  // format: () => '',
                  tickSize: 0,
                  // tickValues: [0, MILESTONES.length],
                }}
                axisRight={null}
                axisTop={null}
                colors={['var(--border-900)']}
                curve="monotoneX"
                data={lineData}
                // layers={[]}
                lineWidth={2}
                margin={{ bottom: 24, left: 24, right: 8, top: 8 }}
                pointBorderColor={{
                  from: 'color',
                }}
                pointBorderWidth={2}
                pointSize={7}
                pointSymbol={props => <PointSymbol {...props} />}
                theme={{
                  background: 'transparent',
                  grid: {
                    line: {
                      stroke: 'var(--border-100)',
                    },
                  },
                  text: {
                    fontFamily: 'inherit',
                    fontSize: '12px',
                  },
                }}
                xFormat="time:%Y-%m-%d"
                xScale={{
                  format: '%Y-%m-%d',
                  // precision: 'month',
                  // precision: 'year',
                  precision: 'day',
                  type: 'time',
                  useUTC: false,
                }}
                yScale={{
                  // stacked: true,
                  // min: 1,
                  type: 'linear',
                }}
              />
            </div>
          </div>
        </TemplateSection>
      </TemplateMain>
    </Template>
  );
};

export const PointSymbol = ({
  borderColor,
  borderWidth,
  size,
}: PointSymbolProps) => (
  <g>
    <circle fill="var(--bg-50)" r={size * 1.4} />
    <circle
      fill="var(--bg-50)"
      r={size}
      stroke={borderColor}
      strokeWidth={borderWidth}
    />
    <circle fill="var(--primary)" r={size / 2} />
  </g>
);
