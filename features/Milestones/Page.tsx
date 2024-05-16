import { Badge } from '@/components/Badge';
import {
  CATEGORY_COLOR,
  CATEGORY_NAME_SHORT,
  MilestonesLine,
  MilestonesTable,
} from './';
import { Head } from '@/components/Head';
import { Heading } from '@/components/Heading';
import { objectEntries } from '@/lib/utils';
import { type PageProps } from '@/types';
import { Template, TemplateMain, TemplateSection } from '@/components/Template';
import { Text } from '@/components/Text';

export const MilestonesPage = ({ id, themeColor, title }: PageProps) => {
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
          <MilestonesLine />
        </TemplateSection>
        <TemplateSection
          aria-hidden
          className="pr:0 pl:0"
          grid={false}
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
        <TemplateSection grid={false}>
          <MilestonesTable />
        </TemplateSection>
      </TemplateMain>
    </Template>
  );
};
