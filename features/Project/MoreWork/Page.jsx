import { MoreWorkHero } from '@/features/Project';
import { Template, TemplateMain, TemplateSection } from '@/components/Template';
import { getImage, getSitemap } from '@/lib/utility';
import { NextProject } from '@/components/NextProject';
import { MQ } from '@/lib/config';
import { Info } from '@/components/Info';
import { Figure } from '@/components/Figure';

export const MoreWorkPage = ({ images, id, title, year }) => {
  const { id: nextProjectId } = getSitemap('biocode');

  return (
    <Template name={id} title={title}>
      <TemplateMain>
        <MoreWorkHero />
        <Info
          client={{ name: 'Various clients' }}
          type={['Web service', 'Web applications', 'etc.']}
          heading="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus fugiat sapiente vero hic assumenda, pariatur ullam tenetur, cum vitae culpa sequi quisquam necessitatibus ipsa nesciunt ex, rem non? Sunt, soluta."
          text={
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              fugiat sapiente vero hic assumenda, pariatur ullam tenetur, cum
              vitae culpa sequi quisquam necessitatibus ipsa nesciunt ex, rem
              non? Sunt, soluta.
            </p>
          }
          role={[
            'UI/UX/Brand design',
            'Web development',
            'Concept strategy',
            'etc.',
          ]}
          year={year}
        />
      </TemplateMain>
      <NextProject id={nextProjectId} />
    </Template>
  );
};
