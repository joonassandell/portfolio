import { Figure } from '@/components/Figure';
import { getImage, getSitemap } from '@/lib/utils';
import { Head } from '@/components/Head';
import { Info } from '@/components/Info';
import { MQ, SCROLL_SPEED } from '@/lib/config';
import { NextProject } from '@/components/NextProject';
import { OrasHero } from '@/features/Project';
import { type PageProjectProps } from '@/types';
import { Template, TemplateMain, TemplateSection } from '@/components/Template';
import { useSetThemeColor } from '@/components/App';

export const OrasPage = ({
  id,
  images,
  themeColor,
  title,
}: PageProjectProps) => {
  const { id: nextProjectId } = getSitemap('mediasignal');
  useSetThemeColor(themeColor);

  return (
    <Template id={id} variant="unstyled">
      <Head title={title} />
      <TemplateMain>
        <OrasHero />
        <Info
          client={{ name: title }}
          heading="Oras is a significant developer, manufacturer and marketer of kitchen and bathroom faucets. Each technical detail in the products is designed to promote the efficient use of water and energy. We were asked to create an extensive web service solution for Europe’s leading faucet manufacturer."
          role={['UI/UX design', 'Web development', 'Concept strategy']}
          smallPrint="Made together with wonderful people from Mediasignal and Hasan & Partners."
          tech={['TYPO3, Vanilla stack']}
          text={
            <p>
              After several iterations the Oras brand was modernised entirely in
              connection with the web service overhaul. The web service was used
              to create a bold and distinct image of Oras and to strongly
              highlight the brand’s new promise.
            </p>
          }
          type={['Web service', 'Commission']}
          year="2016"
        />
        <TemplateSection gridGap="m" paddingTop={false} wrap={false}>
          <div className="grid-col grid-col:6 grid-col:4@l">
            <Figure
              alt="Oras woman showering"
              className="Template-figure-1"
              inViewOffset={-1}
              mask
              priority
              sizes={`${MQ.l} 33vw, ${MQ.s} 50vw, 33vw`}
              transition="clip"
              {...getImage('joonassandell-oras-thumbnail', images)}
            />
          </div>
          <div className="grid-col grid-col:5 -start:8 grid-col:4@l -start:8@l -align:end">
            <Figure
              alt="Oras man showering"
              className="Template-figure-2"
              inViewOffset={-1}
              mask
              priority
              sizes={`${MQ.l} 33vw, ${MQ.s} 50vw, 33vw`}
              transition="clip"
              {...getImage('joonassandell-oras-man-square', images)}
            />
          </div>
        </TemplateSection>
        <TemplateSection
          className="bg:gray:gradient-0-50-0"
          gridGap="m"
          paddingBottom="15vw"
          paddingTop="10vw"
        >
          <div className="grid-col grid-col:10@m -start:2@m">
            <Figure
              alt="Oras product family"
              priority
              quality={90}
              sizes={`${MQ.l} 80vw, 100vw`}
              {...getImage('joonassandell-oras-product-family', images)}
            />
          </div>
        </TemplateSection>
        <TemplateSection paddingTop={false} wrap={false}>
          <div className="grid-col grid-col:10 grid-col:6@m">
            <Figure
              alt="Oras lifestyle animation concept"
              className="Template-videoBathroom"
              scroll
              scrollSpeed={-1}
              src="/oras/joonassandell-oras-bathroom.mp4"
              transition="clip"
            />
          </div>
          <div className="grid-col grid-col:10 -end grid-col:6@m">
            <Figure
              alt="Oras get inspired animation concept"
              scroll
              scrollSpeed={0.5}
              src="/oras/joonassandell-oras-get-inspired.mp4"
              transition="clip"
            />
          </div>
        </TemplateSection>
        <TemplateSection className="bg:gray:gradient-0-50-0" paddingTop="15vw">
          <div className="grid-col grid-col:9@m">
            <Figure
              alt="Oras products overview"
              sizes={`${MQ.m} 70vw, 100vw`}
              {...getImage('joonassandell-oras-products-overview', images)}
            />
          </div>
          <div className="grid-col grid-col:8@m -start:2@m">
            <Figure
              alt="Oras blog"
              sizes={`${MQ.m} 60vw, 100vw`}
              {...getImage('joonassandell-oras-blog', images)}
            />
          </div>
          <div className="grid-col grid-col:9@m -end">
            <Figure
              alt="Oras kitchen experience"
              sizes={`${MQ.m} 70vw, 100vw`}
              {...getImage('joonassandell-oras-ux-kitchen', images)}
            />
          </div>
        </TemplateSection>
        <TemplateSection gridGap={false} paddingTop="15vw">
          <div className="grid-col grid-col:7@m">
            <Figure
              alt="Oras homepage hero"
              border
              scroll
              scrollSpeed={0.5}
              sizes={`${MQ.m} 70vw, 100vw`}
              transition="clip"
              {...getImage('joonassandell-oras-home-hero', images)}
            />
          </div>
          <div className="grid-col grid-col:9 -start:4 grid-col:5@m -start:9@m -align:end">
            <Figure
              alt="Oras live more page hero"
              scroll
              scrollSpeed="negative"
              sizes={`${MQ.m} 33vw, 80vw`}
              transition="clip"
              {...getImage('joonassandell-oras-live-more-hero', images)}
            />
          </div>
          <div className="grid-col grid-col:9 grid-col:8@m -start:4@m">
            <Figure
              alt="Oras look book cta"
              sizes={`${MQ.m} 80vw, 100vw`}
              transition="clip"
              {...getImage('joonassandell-oras-look-booked', images)}
            />
          </div>
        </TemplateSection>
        <TemplateSection grid={false} paddingTop="15vw" wrap={false}>
          <Figure
            alt="Oras sense faucet"
            borderRadius={false}
            mask
            {...getImage('joonassandell-oras-hero-sense', images)}
          />
        </TemplateSection>
        <TemplateSection className="bg:gray:gradient-0-50-0" paddingTop="15vw">
          <div className="grid-col grid-col:8@m">
            <Figure
              alt="Oras single product page"
              sizes={`${MQ.m} 80vw, 100vw`}
              {...getImage('joonassandell-oras-product-single', images)}
            />
          </div>
          <div className="grid-col grid-col:6 -start:7 grid-col:4@m -start:9@m -align:center">
            <Figure
              alt="Oras man showering"
              mask
              sizes={`${MQ.m} 50vw, 33vw`}
              {...getImage('joonassandell-oras-man', images)}
            />
          </div>
        </TemplateSection>
        <TemplateSection grid={false} paddingTop="15vw" wrap={false}>
          <div className="grid -gap:l -gap:row:xl pb:2xl">
            <div className="grid-col grid-col:10 grid-col:4@m -align:end">
              <Figure
                alt="Oras strategy 1"
                border
                sizes={`${MQ.m} 33vw, 80vw`}
                {...getImage('joonassandell-oras-strategy-5', images)}
              />
            </div>
            <div className="grid-col grid-col:10 -start:2 grid-col:7@m -start:5@m">
              <Figure
                alt="Oras strategy 2"
                border
                sizes="50vw"
                {...getImage('joonassandell-oras-strategy-6', images)}
              />
            </div>
          </div>
          <div className="grid -gap:l -gap:row:xl pb:2xl wrap@m">
            <div className="grid-col grid-col:10 -start:3 grid-col:7@m -start:1@m">
              <Figure
                alt="Oras strategy 3"
                border
                quality={90}
                sizes={`${MQ.m} 33vw, 80vw`}
                {...getImage('joonassandell-oras-strategy-1', images)}
              />
            </div>
            <div className="grid-col grid-col:10 -start:2 grid-col:5@m -start:8@m">
              <Figure
                alt="Oras strategy 4"
                border
                sizes={`${MQ.m} 33vw, 80vw`}
                {...getImage('joonassandell-oras-strategy-2', images)}
              />
            </div>
          </div>
          <div className="grid -gap:l -gap:row:xl pb:2xl">
            <div className="grid -gap:row:xl grid-col grid-col:10 grid-col:5@m">
              <div className="grid-col">
                <Figure
                  alt="Oras strategy 5"
                  border
                  sizes={`${MQ.m} 33vw, 80vw`}
                  {...getImage('joonassandell-oras-strategy-2', images)}
                />
              </div>
              <div className="grid-col grid-col:9 -start:3 grid-col:8@m -start:5@m">
                <Figure
                  alt="Oras strategy 6"
                  sizes={`${MQ.m} 33vw, 50vw`}
                  {...getImage('joonassandell-oras-strategy-7', images)}
                />
              </div>
            </div>
            <div className="grid-col grid-col:9 -start:4 grid-col:7@m -start:6@m">
              <Figure
                alt="Oras strategy 7"
                border
                quality={90}
                sizes={`${MQ.m} 50vw, 80vw`}
                {...getImage('joonassandell-oras-strategy-4', images)}
              />
            </div>
          </div>
        </TemplateSection>
        <TemplateSection
          className="Template-section"
          grid={false}
          paddingBottom="15vw"
          paddingTop="10vw"
        >
          <div className="grid -gap:l pb:2xl">
            <div className="grid-col grid-col:5 grid-col:4@s grid-col:3@m">
              <Figure
                alt="Oras homepage mobile"
                quality={100}
                scroll
                sizes={`${MQ.m} 25vw, 50vw`}
                {...getImage('joonassandell-oras-mobile', images)}
              />
            </div>
            <div className="grid-col grid-col:5 grid-col:4@s grid-col:3@m">
              <Figure
                alt="Oras homepage mobile 2"
                scroll
                scrollSpeed="negative"
                sizes={`${MQ.m} 25vw, 50vw`}
                {...getImage('joonassandell-oras-mobile-2', images)}
              />
            </div>
          </div>
          <div className="grid -gap:l">
            <div className="grid-col grid-col:5 -start:7 grid-col:4@s grid-col:3@m">
              <Figure
                alt="Oras homepage mobile 3"
                scroll
                scrollSpeed={SCROLL_SPEED * 2}
                sizes={`${MQ.m} 25vw, 50vw`}
                {...getImage('joonassandell-oras-mobile-3', images)}
              />
            </div>
          </div>
        </TemplateSection>
      </TemplateMain>
      <NextProject id={nextProjectId} />
    </Template>
  );
};
