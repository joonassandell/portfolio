import { ArchiveHero } from '@/features/Project';
import { Template, TemplateMain, TemplateSection } from '@/components/Template';
import { getImage, getSitemap } from '@/lib/utility';
import { NextProject } from '@/components/NextProject';
import { MQ } from '@/lib/config';
import { Info } from '@/components/Info';
import { Figure } from '@/components/Figure';
import { Head } from '@/components/Head';
import { PageProjectProps } from '@/types';

export const ArchivePage = ({ images, id, title, year }: PageProjectProps) => {
  const { id: nextProjectId } = getSitemap('biocode');

  return (
    <Template id={id} className="Template--moreWork">
      <Head title={title} />
      <TemplateMain>
        <ArchiveHero />
        <Info
          client={{ name: 'Various' }}
          type={['Web services', 'Web applications', 'Commissions']}
          heading="You really must like my stuff since you are already in the archive page. This collection contains mainly thumbnail images of my past work."
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
          role={['UI/UX/Brand designs', 'Web development']}
          smallPrint="Some projects made together with people from various sources."
          year={year}
        />
        <TemplateSection
          className="Template-figureGrid"
          grid={false}
          paddingTop="15vw"
          paddingBottom="15vw"
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
