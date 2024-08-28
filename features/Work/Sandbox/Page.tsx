import { Figure } from '@/components/Figure';
import { getImage } from '@/lib/utils';
import { Head } from '@/components/Head';
import { Info } from '@/components/Info';
import { MQ } from '@/lib/config';
import { NextProject } from '@/components/NextProject';
import { type PageProps } from '@/types';
import { SandboxHero } from './';
import { SITEMAP } from '@/lib/sitemap';
import { Template, TemplateArea } from '@/components/Template';
import { useMedia } from 'react-use';
import { useSetThemeColor } from '@/components/App';

export const SandboxPage = ({ images }: PageProps) => {
  const { id, meta, year } = SITEMAP.sandbox;
  const { id: nextProjectId } = SITEMAP.moreWork;
  useSetThemeColor(meta.themeColor);
  const mqM = useMedia(MQ.m, false);

  return (
    <Template id={id} variant="unstyled">
      <Head description={meta.description} title={meta.title} />
      <SandboxHero />
      <Info
        client={{ name: 'Various & Myself' }}
        heading="Welcome to the playground. Sandbox is a collection of various concepts I've crafted in my spare time. Although these are sketches, majority of the them are based on real projects."
        role={['UI/UX design', 'Visual design']}
        text={
          <p>
            I rarely do design without purpose because otherwise it’s just eye
            candy. Some of these pieces are based on prototypes which didn’t end
            up to the end product for one reason or another. Additionally, to
            some samples I’ve given a bit wilder touch afterwards.
          </p>
        }
        type={['Web services', 'Applications', 'Concepts']}
        year={year}
      />
      <TemplateArea gridRowGap="l" pt="2xl-5xl">
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
            scroll={mqM}
            sizes={`${MQ.m} 80vw, 100vw`}
            {...getImage('joonassandell-charity-home-2', images)}
          />
        </div>
      </TemplateArea>
      <TemplateArea gridGap="xl" pt="2xl-5xl" wrap={false}>
        <div className="grid-col grid-col:11 grid-col:5@m  -align:end">
          <Figure
            alt="VR Company solutions page"
            sizes={`${MQ.m} 40vw, 90vw`}
            {...getImage('joonassandell-vr-company-solutions', images)}
          />
        </div>
        <div className="grid-col grid-col:11 -start:2 grid-col:7@m -start:6@m">
          <Figure
            alt="VR Company home page"
            scroll={mqM}
            sizes={`${MQ.m} 60vw, 90vw`}
            {...getImage('joonassandell-vr-company-home', images)}
          />
        </div>
      </TemplateArea>
      <TemplateArea pt="2xl">
        <div className="grid-col grid-col:8@m -end">
          <Figure
            alt="VR Company home page carousel animation"
            scroll
            src="/sandbox/joonassandell-vr-company.mp4"
          />
        </div>
      </TemplateArea>
      <TemplateArea gridGap="xl" pt="2xl-5xl" wrap={false}>
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
      </TemplateArea>
      <TemplateArea pt="2xl">
        <div className="grid-col">
          <Figure
            alt="Third art school home page"
            {...getImage('joonassandell-art-school-home-2', images)}
          />
        </div>
      </TemplateArea>
      <TemplateArea gridRowGap="l" pt="2xl-5xl">
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
            scroll={mqM}
            sizes={`${MQ.m} 80vw, 100vw`}
            {...getImage('joonassandell-animal-welfare-home-2', images)}
          />
        </div>
      </TemplateArea>
      <TemplateArea gridGap="xl" pt="2xl-5xl">
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
            scroll={mqM}
            sizes={`${MQ.m} 40vw, 100vw`}
            {...getImage('joonassandell-biocode-home', images)}
          />
        </div>
      </TemplateArea>
      <TemplateArea gridGap="xl" pt="2xl">
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
            scroll={mqM}
            sizes={`${MQ.m} 40vw, 100vw`}
            {...getImage('joonassandell-portfolio-2016', images)}
          />
        </div>
        <div className="grid-col grid-col:5@m">
          <Figure
            alt="Shopping mall app"
            scroll={mqM}
            scrollReverse
            scrollSpeed="slow"
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
      </TemplateArea>
      <TemplateArea pb="2xl-5xl" pt="2xl">
        <div className="grid-col grid-col:9@m">
          <Figure
            alt="404 concept animation"
            scroll={mqM}
            src="/sandbox/joonassandell-404-concept.mp4"
          />
        </div>
      </TemplateArea>
      <NextProject id={nextProjectId} />
    </Template>
  );
};
