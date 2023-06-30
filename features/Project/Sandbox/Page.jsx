import { SandboxHero } from '@/features/Project';
import { Template, TemplateMain, TemplateSection } from '@/components/Template';
import { getImage, getSitemap } from '@/lib/utility';
import { NextProject } from '@/components/NextProject';
import { MQ } from '@/lib/config';
import { useMedia } from 'react-use';
import { Info } from '@/components/Info';
import { Figure } from '@/components/Figure';
import { Title } from '@/components/Title';

export const SandboxPage = ({ images, id, title, year }) => {
  const { id: nextProjectId } = getSitemap('more-work');
  const mqM = useMedia(MQ.m, false);

  return (
    <Template id={id}>
      <Title title={title} />
      <TemplateMain>
        <SandboxHero />
        <Info
          client={{ name: 'Various & Myself' }}
          type={['Web services', 'Web applications']}
          heading="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus fugiat sapiente vero hic assumenda, pariatur ullam tenetur, cum vitae culpa sequi quisquam necessitatibus ipsa nesciunt ex, rem non? Sunt, soluta."
          text={
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              fugiat sapiente vero hic assumenda, pariatur ullam tenetur, cum
              vitae culpa sequi quisquam necessitatibus ipsa nesciunt ex, rem
              non? Sunt, soluta.
            </p>
          }
          role={['UI/UX design']}
          year={year}
        />
        <TemplateSection gridRowGap="l" paddingTop="15vw">
          <div className="grid-col grid-col:10@m">
            <Figure
              alt="Charity home page"
              sizes={`${MQ.m} 80vw, 100vw`}
              {...getImage('joonassandell-charity-home', images)}
            />
          </div>
          <div className="grid-col grid-col:10@m -start:3@m">
            <Figure
              alt="Another charity home page"
              sizes={`${MQ.m} 80vw, 100vw`}
              {...getImage('joonassandell-charity-home-2', images)}
            />
          </div>
        </TemplateSection>
        <TemplateSection paddingTop="15vw" gridGap="xl" wrap={false}>
          <div className="grid-col grid-col:11 grid-col:5@m  -align:end">
            <Figure
              alt="VR Company solutions page"
              scroll={mqM}
              scrollSpeed={-1}
              sizes={`${MQ.m} 40vw, 90vw`}
              {...getImage('joonassandell-vr-company-solutions', images)}
            />
          </div>
          <div className="grid-col grid-col:11 -start:2 grid-col:7@m -start:6@m">
            <Figure
              alt="VR Company home page"
              sizes={`${MQ.m} 60vw, 90vw`}
              {...getImage('joonassandell-vr-company-home', images)}
            />
          </div>
        </TemplateSection>
        <TemplateSection paddingTop="xxl">
          <div className="grid-col grid-col:8@m -end">
            <Figure
              alt="VR Company home page carousel animation"
              scroll
              src="/sandbox/joonassandell-vr-company.mp4"
            />
          </div>
        </TemplateSection>
        <TemplateSection paddingTop="15vw" gridGap="xl" wrap={false}>
          <div className="grid-col grid-col:11 grid-col:6@m -align:end">
            <Figure
              alt="Art school home page"
              sizes={`${MQ.m} 50vw, 90vw`}
              {...getImage('joonassandell-art-school-home', images)}
            />
          </div>
          <div className="grid-col grid-col:11 -start:2 grid-col:6@m -start:7@m">
            <Figure
              alt="Another art school home page"
              sizes={`${MQ.m} 50vw, 90vw`}
              {...getImage('joonassandell-art-school-home-3', images)}
            />
          </div>
        </TemplateSection>
        <TemplateSection paddingTop="xxl">
          <div className="grid-col">
            <Figure
              alt="Third art school home page"
              {...getImage('joonassandell-art-school-home-2', images)}
            />
          </div>
        </TemplateSection>
        <TemplateSection gridRowGap="l" paddingTop="15vw">
          <div className="grid-col grid-col:10@m">
            <Figure
              alt="Animal welfare home page"
              sizes={`${MQ.m} 80vw, 100vw`}
              {...getImage('joonassandell-animal-welfare-home', images)}
            />
          </div>
          <div className="grid-col grid-col:10@m -start:3@m">
            <Figure
              alt="Another animal welfare home page"
              sizes={`${MQ.m} 80vw, 100vw`}
              {...getImage('joonassandell-animal-welfare-home-2', images)}
            />
          </div>
        </TemplateSection>
        <TemplateSection paddingTop="15vw" gridGap="xl">
          <div className="grid-col grid-col:7@m">
            <Figure
              alt="Biocode early mobile home page"
              sizes={`${MQ.m} 60vw, 100vw`}
              {...getImage('joonassandell-biocode-home-mobile', images)}
            />
          </div>
          <div className="grid-col grid-col:5@m">
            <Figure
              alt="Biocode early home page"
              sizes={`${MQ.m} 40vw, 100vw`}
              {...getImage('joonassandell-biocode-home', images)}
            />
          </div>
        </TemplateSection>
        <TemplateSection paddingTop="xxl" gridGap="xl">
          <div className="grid-col grid-col:7@m">
            <Figure
              alt="CV of Joonas Sandell"
              sizes={`${MQ.m} 60vw, 100vw`}
              {...getImage('joonassandell-cv', images)}
            />
          </div>
          <div className="grid-col grid-col:5@m -align:end">
            <Figure
              alt="Joonas Sandell portfolio sketch 2016"
              sizes={`${MQ.m} 40vw, 100vw`}
              {...getImage('joonassandell-portfolio-2016', images)}
            />
          </div>
          <div className="grid-col grid-col:5@m">
            <Figure
              alt="Shopping mall app"
              sizes={`${MQ.m} 40vw, 100vw`}
              {...getImage('joonassandell-shopping-mall-app', images)}
            />
          </div>
          <div className="grid-col grid-col:7@m -start:3@ -end">
            <Figure
              alt="Higher purpose website sketch"
              src="/sandbox/joonassandell-higher-purpose.mp4"
            />
          </div>
        </TemplateSection>
        <TemplateSection paddingBottom="15vw" paddingTop="xxl">
          <div className="grid-col grid-col:9@m">
            <Figure
              alt="404 concept animation"
              src="/sandbox/joonassandell-404-concept.mp4"
            />
          </div>
        </TemplateSection>
      </TemplateMain>
      <NextProject id={nextProjectId} />
    </Template>
  );
};
