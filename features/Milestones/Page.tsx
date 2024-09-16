import { Badge } from '@/components/Badge';
import {
  CATEGORY_COLOR,
  CATEGORY_NAME_SHORT,
  MilestonesLine,
  MilestonesTable,
  MilestonesTableHighlight,
} from './';
import { DelayedRender } from '@/components/DelayedRender';
import { getMilliSeconds, objectEntries } from '@/lib/utils';
import { Head } from '@/components/Head';
import { Heading } from '@/components/Heading';
import { SITEMAP } from '@/lib/sitemap';
import { Template, TemplateArea } from '@/components/Template';
import { Text } from '@/components/Text';
import { TRANS_TEMPLATE } from '@/lib/config';
import { useSetThemeColor } from '@/components/App';

export const MilestonesPage = () => {
  const { id, meta } = SITEMAP.milestones;
  useSetThemeColor();

  return (
    <Template id={id}>
      <Head {...meta} />
      <TemplateArea>
        <div className="grid-col grid-col:9@m grid-col:6@l">
          <Heading size="h1">Milestones</Heading>
          <Text size="l">
            <p>
              A compilation of milestones from my professional activities,
              including project launches, feature releases, achievements, album
              releases, recognitions, and career progress.
            </p>
          </Text>
        </div>
      </TemplateArea>
      <TemplateArea
        aria-hidden
        className="pt:2xl@l"
        grid={false}
        pt="l"
        wrap={false}
      >
        <MilestonesLine />
      </TemplateArea>
      <TemplateArea aria-hidden className="pr:0 pl:0" grid={false} pt="base">
        <div className="Template-badges flex gap:s scrollbar">
          {objectEntries(CATEGORY_NAME_SHORT).map(([category, name]) => {
            return (
              <Badge beacon={CATEGORY_COLOR[category]} key={category}>
                {name}
              </Badge>
            );
          })}
        </div>
      </TemplateArea>
      <TemplateArea grid={false}>
        <Text className="ml:s ml@l mb" size="l" tag="h2">
          Highlighted milestones
        </Text>
        <MilestonesTableHighlight />
      </TemplateArea>
      <TemplateArea grid={false} pb="2xl-5xl">
        <DelayedRender delay={getMilliSeconds(TRANS_TEMPLATE.duration + 0.3)}>
          <Text className="ml:s ml@l mb" size="l" tag="h2">
            All milestones
          </Text>
          <MilestonesTable />
        </DelayedRender>
      </TemplateArea>
    </Template>
  );
};
