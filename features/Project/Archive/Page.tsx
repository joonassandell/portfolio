import { ArchiveHero } from '@/features/Project';
import { Figure } from '@/components/Figure';
import { getImage, getSitemap } from '@/lib/utils';
import { Head } from '@/components/Head';
import { Info } from '@/components/Info';
import { MQ } from '@/lib/config';
import { NextProject } from '@/components/NextProject';
import { type PageProjectProps } from '@/types';
import { Template, TemplateMain, TemplateSection } from '@/components/Template';
import { useSetThemeColor } from '@/components/App';

export const ArchivePage = ({
  id,
  images,
  themeColor,
  title,
  year,
}: PageProjectProps) => {
  const { id: nextProjectId } = getSitemap('biocode');
  useSetThemeColor(themeColor);

  return (
    <Template className="Template--moreWork" id={id}>
      <Head title={title} />
      <TemplateMain>
        <ArchiveHero />
        <Info
          client={{ name: 'Various' }}
          heading="You really must like my stuff since you are already in the archive page. This collection contains mainly thumbnail images of my past work."
          role={['UI/UX/Brand designs', 'Web development']}
          smallPrint="Some projects made together with people from various sources."
          text={
            <>
              <p>
                Featuring clients such as Fair Trade, Avecra, Jatke, City of
                Tampere and Vapriikki.
              </p>
              <p>
                I'll be updating this page every now and then since I'm not yet
                done crawling all the archived folders in my NAS. 📀
              </p>
            </>
          }
          type={['Web services', 'Web applications', 'Commissions']}
          year={year}
        />
        <TemplateSection
          className="Template-figureGrid"
          grid={false}
          paddingBottom="15vw"
          paddingTop="15vw"
        >
          <Figure
            alt="Jatke project page"
            sizes={`${MQ.m} 50vw, 100vw`}
            {...getImage('joonassandell-jatke', images)}
          />
          <Figure
            alt="Fair trade home page"
            inViewOffset={0.5}
            sizes={`${MQ.m} 50vw, 100vw`}
            {...getImage('joonassandell-fair-trade', images)}
          />
          <Figure
            alt="Vapriikki home page"
            sizes={`${MQ.m} 50vw, 100vw`}
            {...getImage('joonassandell-vapriikki', images)}
          />
          <Figure
            alt="Avecra homepage"
            inViewOffset={0.5}
            sizes={`${MQ.m} 50vw, 100vw`}
            {...getImage('joonassandell-avecra', images)}
          />
          <Figure
            alt="Vapriikki brand guide landing page: Terrakotta"
            sizes={`${MQ.m} 50vw, 100vw`}
            {...getImage('joonassandell-vapriikki-terrakotta', images)}
          />
          <Figure
            alt="Vapriikki Dora Jung landing page"
            inViewOffset={0.5}
            sizes={`${MQ.m} 50vw, 100vw`}
            {...getImage('joonassandell-vapriikki-dora-jung', images)}
          />
          <Figure
            alt="Enervent home page"
            sizes={`${MQ.m} 50vw, 100vw`}
            {...getImage('joonassandell-enervent', images)}
          />
          <Figure
            alt="Hotelzon home page"
            inViewOffset={0.5}
            sizes={`${MQ.m} 50vw, 100vw`}
            {...getImage('joonassandell-hotelzon', images)}
          />
          <Figure
            alt="Steiner school home page"
            sizes={`${MQ.m} 50vw, 100vw`}
            {...getImage('joonassandell-steiner-school', images)}
          />
          <Figure
            alt="Piece of heaven home page"
            inViewOffset={0.5}
            sizes={`${MQ.m} 50vw, 100vw`}
            {...getImage('joonassandell-piece-of-heaven', images)}
          />
          <Figure
            alt="Finnish winter day home page"
            sizes={`${MQ.m} 50vw, 100vw`}
            {...getImage('joonassandell-finnish-winter-day', images)}
          />
          <Figure
            alt="Vapriikki brand guide landing page: Strong"
            inViewOffset={0.5}
            sizes={`${MQ.m} 50vw, 100vw`}
            {...getImage('joonassandell-vapriikki-figures', images)}
          />
        </TemplateSection>
      </TemplateMain>
      <NextProject id={nextProjectId} />
    </Template>
  );
};
