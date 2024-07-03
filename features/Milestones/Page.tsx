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
import { Template, TemplateMain, TemplateSection } from '@/components/Template';
import { Text } from '@/components/Text';
import { TRANS_TEMPLATE } from '@/lib/config';
import { useSetThemeColor } from '@/components/App';
import sitemap from './sitemap';

export const MilestonesPage = () => {
  useSetThemeColor();

  return (
    <Template id={sitemap.id}>
      <Head title={sitemap.meta.title} />
      <TemplateMain>
        <TemplateSection>
          <div className="grid-col grid-col:9@m grid-col:6@l">
            <Heading size="h1">Milestones</Heading>
            <Text size="l">
              <p>
                A compilation of milestones from my professional activities,
                including project launches, feature releases, achievements,
                album releases, recognitions, and career progress.
              </p>
            </Text>
          </div>
        </TemplateSection>
        <TemplateSection
          aria-hidden
          className="pt:2xl@m"
          grid={false}
          pt="l"
          wrap={false}
        >
          <MilestonesLine />
        </TemplateSection>
        <TemplateSection
          aria-hidden
          className="pr:0 pl:0"
          grid={false}
          pt="base"
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
        <TemplateSection grid={false}>
          <Text className="ml:s ml@l mb" size="l" tag="h2">
            Highlighted milestones
          </Text>
          <MilestonesTableHighlight />
        </TemplateSection>
        <TemplateSection grid={false} pb="10vw">
          <DelayedRender delay={getMilliSeconds(TRANS_TEMPLATE.duration + 0.3)}>
            <Text className="ml:s ml@l mb" size="l" tag="h2">
              All milestones
            </Text>
            <MilestonesTable />
          </DelayedRender>
        </TemplateSection>
      </TemplateMain>
    </Template>
  );
};
