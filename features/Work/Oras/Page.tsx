import { Figure } from '@/components/Figure';
import { getImage } from '@/lib/utils';
import { Head } from '@/components/Head';
import { Info } from '@/components/Info';
import { MQ } from '@/lib/config';
import { NextProject } from '@/components/NextProject';
import { OrasHero } from './';
import { type PageProps } from '@/types';
import { SITEMAP } from '@/lib/sitemap';
import { Template, TemplateArea } from '@/components/Template';
import { useSetThemeColor } from '@/components/App';

export const OrasPage = ({ images }: PageProps) => {
  const { id, meta, title, year } = SITEMAP.oras;
  const { id: nextProjectId } = SITEMAP.mediasignal;
  useSetThemeColor(meta.themeColor);

  return (
    <Template id={id} variant="unstyled">
      <Head description={meta.description} title={meta.title} />
      <OrasHero />
      <Info
        client={{ name: title }}
        heading="Oras is a significant developer, manufacturer and marketer of kitchen and bathroom faucets. Each technical detail in the products is designed to promote the efficient use of water and energy. We were asked to create an extensive web service solution for Europe’s leading faucet manufacturer."
        role={['UI/UX design', 'Concept strategy', 'Web development']}
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
        type={['Website', 'Web service']}
        year={year}
      />
      <TemplateArea gridGap={false} pt="2xl" wrap={false}>
        <div className="grid-col grid-col:6 grid-col:5@m grid-col:4@l">
          <Figure
            alt="Oras woman showering"
            className="mt:-6xl@l"
            inViewOffset={-1}
            priority
            scroll="mask"
            scrollImageSpeed="slow"
            sizes={`${MQ.l} 33vw, ${MQ.m} 40vw, 50vw`}
            transition="clip"
            {...getImage('joonassandell-oras-thumbnail', images)}
          />
        </div>
        <div className="grid-col grid-col:5 -start:8 grid-col:4@m -start:8@m">
          <Figure
            alt="Oras man showering"
            animate={false}
            className="mt:6xl mt:-2xl@m mt:2xl@l"
            priority
            scroll="mask"
            scrollImageSpeed="slow"
            sizes={`${MQ.m} 33vw, 40vw`}
            transition="clip"
            {...getImage('joonassandell-oras-man-square', images)}
          />
        </div>
      </TemplateArea>
      <TemplateArea
        className="bg:gradient-0-100-0"
        gridGap="m"
        pb="2xl-5xl"
        pt="2xl-5xl"
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
      </TemplateArea>
      <TemplateArea wrap={false}>
        <div className="grid-col grid-col:10 grid-col:6@m">
          <Figure
            alt="Oras lifestyle animation concept"
            className="Template-videoBathroom"
            scroll
            scrollReverse
            scrollSpeed="slowest"
            src="/oras/joonassandell-oras-bathroom.mp4"
            transition="clip"
          />
        </div>
        <div className="grid-col grid-col:10 -end grid-col:6@m">
          <Figure
            alt="Oras get inspired animation concept"
            scroll
            scrollSpeed="slowest"
            src="/oras/joonassandell-oras-get-inspired.mp4"
            transition="clip"
          />
        </div>
      </TemplateArea>
      <TemplateArea className="bg:gradient-0-100-0 pt:5xl@m" pt="2xl-5xl">
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
      </TemplateArea>
      <TemplateArea gridGap={false} pt="2xl-5xl">
        <div className="grid-col grid-col:7@m">
          <Figure
            alt="Oras homepage hero"
            border
            scroll
            scrollSpeed="slow"
            sizes={`${MQ.m} 70vw, 100vw`}
            transition="clip"
            {...getImage('joonassandell-oras-home-hero', images)}
          />
        </div>
        <div className="grid-col grid-col:9 -start:4 grid-col:5@m -start:9@m -align:end">
          <Figure
            alt="Oras live more page hero"
            scroll
            scrollReverse
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
      </TemplateArea>
      <TemplateArea grid={false} pt="2xl-5xl" wrap={false}>
        <Figure
          alt="Oras sense faucet"
          animate={false}
          borderRadius={false}
          scroll="mask"
          {...getImage('joonassandell-oras-hero-sense', images)}
        />
      </TemplateArea>
      <TemplateArea className="bg:gradient-0-100-0" pt="2xl-5xl">
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
            animate={false}
            scroll="mask"
            sizes={`${MQ.m} 50vw, 33vw`}
            {...getImage('joonassandell-oras-man', images)}
          />
        </div>
      </TemplateArea>
      <TemplateArea grid={false} pb="2xl-5xl" pt="2xl-5xl" wrap={false}>
        <div className="grid -gap:l -gap:row:l">
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
              sizes={`${MQ.m} 60vw, 80vw`}
              {...getImage('joonassandell-oras-strategy-6', images)}
            />
          </div>
        </div>
        <div className="grid -gap:l -gap:row:l pt:grid-gap-row-l wrap@m">
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
        <div className="grid -gap:l -gap:row:l pt:grid-gap-row-l">
          <div className="grid-col grid-col:10 grid-col:5@m grid -gap:row:l -gap:column:0">
            <div className="grid-col">
              <Figure
                alt="Oras strategy 5"
                border
                sizes={`${MQ.m} 33vw, 80vw`}
                {...getImage('joonassandell-oras-strategy-3', images)}
              />
            </div>
            <div className="grid-col grid-col:9 -start:3 grid-col:8@m -start:5@m">
              <Figure
                alt="Oras strategy 6"
                sizes={`${MQ.m} 25vw, 50vw`}
                {...getImage('joonassandell-oras-strategy-7', images)}
              />
            </div>
          </div>
          <div className="grid-col grid-col:9 -start:4 grid-col:7@m -start:6@m">
            <Figure
              alt="Oras strategy 7"
              border
              quality={90}
              sizes={`${MQ.m} 60vw, 80vw`}
              {...getImage('joonassandell-oras-strategy-4', images)}
            />
          </div>
        </div>
      </TemplateArea>
      <TemplateArea grid={false} pt="2xl-5xl">
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
              scrollReverse
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
              scrollSpeed="fast"
              sizes={`${MQ.m} 25vw, 50vw`}
              {...getImage('joonassandell-oras-mobile-3', images)}
            />
          </div>
        </div>
      </TemplateArea>
      <NextProject id={nextProjectId} />
    </Template>
  );
};
