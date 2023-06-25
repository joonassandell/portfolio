import { MediasignalHero } from '@/features/Project';
import { Template, TemplateMain, TemplateSection } from '@/components/Template';
import { getImage, getSitemap } from '@/lib/utility';
import { NextProject } from '@/components/NextProject';
import { MQ } from '@/lib/config';
import { Info } from '@/components/Info';
import { Figure } from '@/components/Figure';
import { Title } from '@/components/Title';

export const MediasignalPage = ({ images, id, title, year }) => {
  const { id: nextProjectId } = getSitemap('sandbox');

  return (
    <Template id={id}>
      <Title title={title} />
      <TemplateMain>
        <MediasignalHero />
        <Info
          client={{ name: title, href: 'https://mediasignal.fi/en' }}
          type={['Web service', 'Branding', 'Commission']}
          heading="Mediasignal is building digital services and customer experiences according to their customer's vision. The company is renewing digital business' and strengthening brands with a creative touch."
          text={
            <p>
              I worked for Mediasignal over half a decade and was involved in
              hundreds of projects. Additionally, I was also responsible for
              refreshing Mediasignal's brand twice, from which the latter is the
              project you're viewing. This included logomark design, brand book
              crafting, business card design and website renewal.
            </p>
          }
          role={['UI/UX/Brand design', 'Web development', 'Concept strategy']}
          smallPrint="Made together with professionals from Porkka & Kuutsa and Mediasignal."
          year={year}
        />
        <TemplateSection gridGap="xl" paddingTop="10vw">
          <div className="grid-col grid-col:10@l -start:2@l">
            <Figure
              alt="Mediasignal homepage"
              priority
              scrolling={false}
              sizes={`${MQ.l} 80vw, 100vw`}
              {...getImage('joonassandell-mediasignal-home', images)}
            />
          </div>
        </TemplateSection>
        <TemplateSection gridRowGap="l" paddingTop="10vw">
          <div className="grid-col grid-col:10 grid-col:6@m">
            <Figure
              alt="Mediasignal blog page"
              scrollSpeed={0.5}
              sizes={`${MQ.m} 50vw, 70vw`}
              {...getImage('joonassandell-mediasignal-blog-screen', images)}
            />
          </div>
          <div className="grid-col grid-col:10 -end grid-col:6@m">
            <Figure
              alt="Mediasignal company page"
              scrollSpeed="negative"
              sizes={`${MQ.m} 50vw, 70vw`}
              {...getImage('joonassandell-mediasignal-company-screen', images)}
            />
          </div>
          <div className="grid-col grid-col:10 grid-col:6@m -start:4@m">
            <Figure
              alt="Alternate Mediasignal homepage"
              sizes={`${MQ.m} 50vw, 70vw`}
              {...getImage('joonassandell-mediasignal-home-screen', images)}
            />
          </div>
          <div className="grid-col grid-col:10 -start:3 grid-col:6@m -start:2@m">
            <Figure
              alt="Mediasignal navigation"
              sizes={`${MQ.m} 50vw, 70vw`}
              {...getImage(
                'joonassandell-mediasignal-navigation-screen',
                images,
              )}
            />
          </div>
        </TemplateSection>
        <TemplateSection gridGap="xl">
          <div className="grid-col">
            <Figure
              alt="Mediasignal business card"
              mask
              {...getImage('joonassandell-mediasignal-business-card', images)}
            />
          </div>
          <div className="grid-col grid-col:6">
            <Figure
              alt="Mediasignal logomark in light background"
              sizes="50vw"
              {...getImage('joonassandell-mediasignal-logomark', images)}
            />
          </div>
          <div className="grid-col grid-col:6">
            <Figure
              alt="Mediasignal logomark in dark background"
              inViewOffset={0.5}
              scrollSpeed={3}
              sizes="50vw"
              {...getImage('joonassandell-mediasignal-logomark-dark', images)}
            />
          </div>
        </TemplateSection>
        <TemplateSection
          paddingTop="15vw"
          gridGap="l"
          gridRowGap="default"
          wrap={false}
        >
          <div className="grid-col grid-col:6 grid-col:4@m">
            <Figure
              alt="Mediasignal brand book: Logomark"
              scrolling={false}
              sizes={`${MQ.m} 33vw, 50vw`}
              {...getImage('joonassandell-mediasignal-brand-1', images)}
            />
          </div>
          <div className="grid-col grid-col:6 grid-col:4@m">
            <Figure
              alt="Mediasignal brand book: Logomark safe area"
              inViewOffset={0.3}
              scrolling={false}
              sizes={`${MQ.m} 33vw, 50vw`}
              {...getImage('joonassandell-mediasignal-brand-2', images)}
            />
          </div>
          <div className="grid-col grid-col:6 grid-col:4@m">
            <Figure
              alt="Mediasignal brand book: Visual element"
              inViewOffset={0.6}
              scrolling={false}
              sizes={`${MQ.m} 33vw, 50vw`}
              {...getImage('joonassandell-mediasignal-brand-3', images)}
            />
          </div>
          <div className="grid-col grid-col:6 grid-col:4@m">
            <Figure
              alt="Mediasignal brand book: Typography"
              scrolling={false}
              sizes={`${MQ.m} 33vw, 50vw`}
              {...getImage('joonassandell-mediasignal-brand-4', images)}
            />
          </div>
          <div className="grid-col grid-col:6 grid-col:4@m">
            <Figure
              alt="Mediasignal brand book: Imagery"
              inViewOffset={0.3}
              scrolling={false}
              sizes={`${MQ.m} 33vw, 50vw`}
              {...getImage('joonassandell-mediasignal-brand-5', images)}
            />
          </div>
          <div className="grid-col grid-col:6 grid-col:4@m">
            <Figure
              alt="Mediasignal brand book: Colors"
              inViewOffset={0.6}
              scrolling={false}
              sizes={`${MQ.m} 33vw, 50vw`}
              {...getImage('joonassandell-mediasignal-brand-6', images)}
            />
          </div>
          <div className="grid-col grid-col:6 grid-col:4@m">
            <Figure
              alt="Mediasignal brand book: Identity & Communications"
              scrolling={false}
              sizes={`${MQ.m} 33vw, 50vw`}
              {...getImage('joonassandell-mediasignal-brand-7', images)}
            />
          </div>
          <div className="grid-col grid-col:6 grid-col:4@m">
            <Figure
              alt="Mediasignal brand book: Brand refreshment"
              inViewOffset={0.3}
              scrolling={false}
              sizes={`${MQ.m} 33vw, 50vw`}
              {...getImage('joonassandell-mediasignal-brand-8', images)}
            />
          </div>
          <div className="grid-col grid-col:6 grid-col:4@m">
            <Figure
              alt="Mediasignal brand book: Concept"
              inViewOffset={0.6}
              scrolling={false}
              sizes={`${MQ.m} 33vw, 50vw`}
              {...getImage('joonassandell-mediasignal-brand-9', images)}
            />
          </div>
        </TemplateSection>
        <TemplateSection gridRowGap="l" paddingBottom="15vw">
          <div className="grid-col grid-col:11 grid-col:10@m">
            <Figure
              alt="Mediasignal company page"
              scrollSpeed={1}
              sizes={`${MQ.m} 70vw, 90w`}
              {...getImage('joonassandell-mediasignal-company', images)}
            />
          </div>
          <div className="grid-col grid-col:11 grid-col:10@m -end">
            <Figure
              alt="Mediasignal references page"
              scrolling={false}
              sizes={`${MQ.m} 60vw, 90w`}
              {...getImage('joonassandell-mediasignal-work', images)}
            />
          </div>
        </TemplateSection>
      </TemplateMain>
      <NextProject id={nextProjectId} />
    </Template>
  );
};
