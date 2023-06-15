import { OrasHero } from '@/features/Project';
import { Template, TemplateMain, TemplateSection } from '@/components/Template';
import { getImage, getSitemap } from '@/lib/utility';
import { NextProject } from '@/components/NextProject';
import { MQ, SCROLL_SPEED } from '@/lib/config';
import { Info } from '@/components/Info';
import { Figure } from '@/components/Figure';
import { useIsMobile } from '@/lib/useIsMobile';

export const OrasPage = ({ images, id, title }) => {
  const isMobile = useIsMobile();
  const { id: nextProjectId } = getSitemap('biocode');

  return (
    <Template name={id} title={title}>
      <TemplateMain>
        <OrasHero />
        <Info
          client={{ name: title }}
          type={['Web service', 'Commission']}
          heading="Oras is a significant developer, manufacturer and marketer of kitchen and bathroom faucets. Each technical detail in the products is designed to promote the efficient use of water and energy. We were asked to create an extensive web service solution for Europe’s leading faucet manufacturer."
          smallPrint="Made together with wonderful people at Mediasignal and Hasan & Partners."
          text={
            <p>
              After several iterations the Oras brand was modernised entirely in
              connection with the web service overhaul. The web service was used
              to create a bold and distinct image of Oras and to strongly
              highlight the brand’s new promise.
            </p>
          }
          role={['UI/UX design', 'Web development', 'Concept strategy']}
          year="2016"
        />
        <TemplateSection wrap={false} paddingTop={false} gridGap="default">
          <div className="grid-col grid-col:6 grid-col:4@l">
            <Figure
              alt="Oras woman showering"
              className="Template-figure-1"
              mask
              priority
              inViewOffset={isMobile ? 0 : -1}
              sizes={`${MQ.l} 33vw, ${MQ.s} 50vw, 33vw`}
              transition="clip"
              {...getImage('joonassandell-oras-thumbnail', images)}
            />
          </div>
          <div className="grid-col grid-col:5 -start:8 grid-col:4@l -start:8@l -align:end">
            <Figure
              alt="Oras man showering"
              className="Template-figure-2"
              mask
              priority
              inViewOffset={isMobile ? 0 : -1}
              sizes={`${MQ.l} 33vw, ${MQ.s} 50vw, 33vw`}
              transition="clip"
              {...getImage('joonassandell-oras-man-square', images)}
            />
          </div>
        </TemplateSection>
        <TemplateSection
          className="-bg:gradient-0-50-0"
          gridGap="default"
          paddingTop="10vw"
          paddingBottom="15vw"
        >
          <div className="grid-col grid-col:10@m -start:2@m">
            <Figure
              alt="Oras product family"
              priority
              scrolling={false}
              sizes={`${MQ.l} 80vw, 100vw`}
              quality={90}
              {...getImage('joonassandell-oras-product-family', images)}
            />
          </div>
        </TemplateSection>
        <TemplateSection wrap={false} paddingTop={false}>
          <div className="grid-col grid-col:10 grid-col:6@m">
            <Figure
              alt="Oras lifestyle animation concept"
              className="Template-videoBathroom"
              scrollSpeed={-1}
              src="/oras/joonassandell-oras-bathroom.mp4"
              transition="clip"
            />
          </div>
          <div className="grid-col grid-col:10 -end grid-col:6@m">
            <Figure
              alt="Oras get inspired animation concept"
              scrollSpeed={0.5}
              src="/oras/joonassandell-oras-get-inspired.mp4"
              transition="clip"
            />
          </div>
        </TemplateSection>
        <TemplateSection className="-bg:gradient-0-50-0" paddingTop="15vw">
          <div className="grid-col grid-col:9@m">
            <Figure
              alt="Oras products overview"
              priority
              scrolling={false}
              sizes={`${MQ.m} 70vw, 100vw`}
              {...getImage('joonassandell-oras-products-overview', images)}
            />
          </div>
          <div className="grid-col grid-col:8@m -start:2@m">
            <Figure
              alt="Oras blog"
              scrolling={false}
              sizes={`${MQ.m} 60vw, 100vw`}
              {...getImage('joonassandell-oras-blog', images)}
            />
          </div>
          <div className="grid-col grid-col:9@m -end">
            <Figure
              alt="Oras kitchen experience"
              priority
              scrolling={false}
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
              scrollSpeed={0.5}
              sizes={`${MQ.m} 70vw, 100vw`}
              transition="clip"
              {...getImage('joonassandell-oras-home-hero', images)}
            />
          </div>
          <div className="grid-col grid-col:9 -start:4 grid-col:5@m -start:9@m -align:end">
            <Figure
              alt="Oras live more page hero"
              scrollSpeed="negative"
              sizes={`${MQ.m} 33vw, 80vw`}
              transition="clip"
              {...getImage('joonassandell-oras-live-more-hero', images)}
            />
          </div>
          <div className="grid-col grid-col:9 grid-col:8@m -start:4@m">
            <Figure
              alt="Oras look book cta"
              scrolling={false}
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
            priority
            {...getImage('joonassandell-oras-hero-sense', images)}
          />
        </TemplateSection>
        <TemplateSection className="-bg:gradient-0-50-0" paddingTop="15vw">
          <div className="grid-col grid-col:8@m">
            <Figure
              alt="Oras single product page"
              priority
              scrolling={false}
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
        <TemplateSection grid={false} wrap={false} paddingTop="15vw">
          <div className="grid -gap:l -gap:row:xl pb:xxl">
            <div className="grid-col grid-col:10 grid-col:4@m -align:end">
              <Figure
                alt="Oras strategy 1"
                border
                scrolling={false}
                sizes={`${MQ.m} 33vw, 80vw`}
                {...getImage('joonassandell-oras-strategy-5', images)}
              />
            </div>
            <div className="grid-col grid-col:10 -start:2 grid-col:7@m -start:5@m">
              <Figure
                alt="Oras strategy 2"
                border
                scrolling={false}
                sizes="50vw"
                {...getImage('joonassandell-oras-strategy-6', images)}
              />
            </div>
          </div>
          <div className="grid -gap:l -gap:row:xl pb:xxl wrap@m">
            <div className="grid-col grid-col:10 -start:3 grid-col:7@m -start:1@m">
              <Figure
                alt="Oras strategy 3"
                border
                scrolling={false}
                sizes={`${MQ.m} 33vw, 80vw`}
                quality={90}
                {...getImage('joonassandell-oras-strategy-1', images)}
              />
            </div>
            <div className="grid-col grid-col:10 -start:2 grid-col:5@m -start:8@m">
              <Figure
                alt="Oras strategy 4"
                border
                scrolling={false}
                sizes={`${MQ.m} 33vw, 80vw`}
                {...getImage('joonassandell-oras-strategy-2', images)}
              />
            </div>
          </div>
          <div className="grid -gap:l -gap:row:xl pb:xxl">
            <div className="grid -gap:row:xl grid-col grid-col:10 grid-col:5@m">
              <div className="grid-col">
                <Figure
                  alt="Oras strategy 5"
                  border
                  scrolling={false}
                  sizes={`${MQ.m} 33vw, 80vw`}
                  {...getImage('joonassandell-oras-strategy-2', images)}
                />
              </div>
              <div className="grid-col grid-col:9 -start:3 grid-col:8@m -start:5@m">
                <Figure
                  alt="Oras strategy 6"
                  scrolling={false}
                  sizes={`${MQ.m} 33vw, 50vw`}
                  {...getImage('joonassandell-oras-strategy-7', images)}
                />
              </div>
            </div>
            <div className="grid-col grid-col:9 -start:4 grid-col:7@m -start:6@m">
              <Figure
                alt="Oras strategy 7"
                border
                scrolling={false}
                sizes={`${MQ.m} 50vw, 80vw`}
                quality={90}
                {...getImage('joonassandell-oras-strategy-4', images)}
              />
            </div>
          </div>
        </TemplateSection>
        <TemplateSection
          grid={false}
          className="Template-section"
          paddingTop="10vw"
          paddingBottom="15vw"
        >
          <div className="grid -gap:l pb:xxl">
            <div className="grid-col grid-col:5 grid-col:4@s grid-col:3@m">
              <Figure
                alt="Oras homepage mobile"
                priority
                sizes={`${MQ.m} 25vw, 50vw`}
                quality={100}
                {...getImage('joonassandell-oras-mobile', images)}
              />
            </div>
            <div className="grid-col grid-col:5 grid-col:4@s grid-col:3@m">
              <Figure
                alt="Oras homepage mobile 2"
                priority
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
                priority
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
