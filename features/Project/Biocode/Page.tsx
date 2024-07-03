import { BiocodeHero } from './Hero';
import { Figure } from '@/components/Figure';
import { getImage, getSitemap } from '@/lib/utils';
import { Head } from '@/components/Head';
import { Info } from '@/components/Info';
import { MQ, SCROLL_SPEED } from '@/lib/config';
import { NextProject } from '@/components/NextProject';
import { type PageProps } from '@/types';
import { Template, TemplateMain, TemplateSection } from '@/components/Template';
import { useSetThemeColor } from '@/components/App';
import sitemap from './sitemap';

export const BiocodePage = ({ images }: PageProps) => {
  const { id: nextProjectId } = getSitemap('oras');
  useSetThemeColor(sitemap.meta.themeColor);

  return (
    <Template id={sitemap.id} variant="unstyled">
      <Head title={sitemap.meta.title} />
      <TemplateMain>
        <BiocodeHero />
        <Info
          client={{ href: 'https://biocode.io', name: sitemap.title }}
          heading="Biocode is Carbon footprint calculator that makes sense. It’s aimed for food brands, producers and farmers. It’s an easy tool for tackling the reporting chaos and clearly communicating environmental values to customers."
          role={['Product design', 'App development', 'Web development']}
          smallPrint="Building together with awesome co-workers from Biocode."
          tech={['Next.js, Headless', 'React, GraphQL', 'Framer motion']}
          text={
            <p>
              I’m currently working for Biocode as lead product designer and
              front-end developer. I’m responsible for crafting our design
              system and making sure our application’s code stays manageable.
              Work samples here are mainly from the latest brand redesign which
              included iconography, logo design and website renewal from my
              part.
            </p>
          }
          type={['Web app', 'Web service', 'Commission']}
          year="2020–"
        />
        <TemplateSection gridGap="xl" pt="10vw">
          <div className="grid-col grid-col:10@l -start:2@l">
            <Figure
              alt="Biocode homepage and isometric Biocode application"
              border
              glare
              priority
              quality={100}
              sizes={`${MQ.l} 80vw, 100vw`}
              {...getImage('joonassandell-biocode-website-home-hero', images)}
            />
          </div>
          <div className="grid-col grid-col:10 grid-col:7@m">
            <Figure
              alt="'Who Biocode is for' cards and call to action to sign up for Biocode"
              border
              quality={100}
              scroll
              sizes={`${MQ.m} 60vw, 70vw`}
              {...getImage(
                'joonassandell-biocode-website-home-whoitsfor',
                images,
              )}
            />
          </div>
          <div className="grid-col grid-col:10 grid-col:5@m -end -align:end">
            <Figure
              alt="Four main Biocode features and quote of Biocode's customer"
              border
              quality={100}
              scroll
              scrollSpeed="negative"
              sizes={`${MQ.m} 40vw, 70vw`}
              {...getImage(
                'joonassandell-biocode-website-home-calculate',
                images,
              )}
            />
          </div>
          <div className="grid-col grid-col:11 -start:2 grid-col:8@m -start:4@m">
            <Figure
              alt="Call to action to discover Biocode reporting service"
              border
              quality={100}
              sizes={`${MQ.m} 60vw, 70vw`}
              {...getImage(
                'joonassandell-biocode-website-home-reporting',
                images,
              )}
            />
          </div>
          <div className="grid-col grid-col:10 grid-col:7@m -start:2@m">
            <Figure
              alt="Biocode homepage animation"
              border
              glare
              scroll
              scrollSpeed={2}
              src="/biocode/joonassandell-biocode-website-home.mp4"
            />
          </div>
        </TemplateSection>
        <TemplateSection gridRowGap="m">
          <div className="grid-col grid-col:6 grid-col:3@m">
            <Figure
              alt="Biocode application icon"
              border
              scroll
              sizes={`${MQ.m} 20vw, 50vw`}
              {...getImage('joonassandell-biocode-app-icon', images)}
            />
          </div>
          <div className="grid-col grid-col:6 grid-col:3@m">
            <Figure
              alt="Biocode for producers mark"
              border
              inViewOffset={0.3}
              scroll
              scrollSpeed={SCROLL_SPEED + 0.3}
              sizes={`${MQ.m} 20vw, 50vw`}
              {...getImage('joonassandell-biocode-producer-mark', images)}
            />
          </div>
          <div className="grid-col grid-col:6 grid-col:3@m">
            <Figure
              alt="Biocode for products mark"
              border
              inViewOffset={0.6}
              scroll
              scrollSpeed={SCROLL_SPEED + 0.6}
              sizes={`${MQ.m} 20vw, 50vw`}
              {...getImage('joonassandell-biocode-product-mark', images)}
            />
          </div>
          <div className="grid-col grid-col:6 grid-col:3@m">
            <Figure
              alt="Biocode for reporting mark"
              border
              inViewOffset={0.9}
              scroll
              scrollSpeed={SCROLL_SPEED + 0.9}
              sizes={`${MQ.m} 20vw, 50vw`}
              {...getImage('joonassandell-biocode-report-mark', images)}
            />
          </div>
        </TemplateSection>
        <TemplateSection gridRowGap="m">
          <div className="grid-col grid-col:6 grid-col:4@m -align:end">
            <Figure
              alt="Example of Biocode's easy to use card"
              border
              glare
              quality={100}
              sizes={`${MQ.m} 33vw, 50vw`}
              {...getImage(
                'joonassandell-biocode-website-card-easy-to-use',
                images,
              )}
            />
          </div>
          <div className="grid-col grid-col:8@m">
            <Figure
              alt="About us page of Biocode homepage"
              border
              quality={100}
              sizes={`${MQ.m} 60vw, 100vw`}
              {...getImage('joonassandell-biocode-website-about', images)}
            />
          </div>
          <div className="grid-col grid-col:6 grid-col:4@m">
            <Figure
              alt="Example of Biocode's agile card"
              border
              glare
              quality={100}
              sizes={`${MQ.m} 33vw, 50vw`}
              {...getImage('joonassandell-biocode-website-card-agile', images)}
            />
          </div>
          <div className="grid-col grid-col:6 grid-col:4@m">
            <Figure
              alt="Example of Biocode's insightful card"
              border
              glare
              inViewOffset={0.4}
              quality={100}
              sizes={`${MQ.m} 33vw, 50vw`}
              {...getImage(
                'joonassandell-biocode-website-card-insightful',
                images,
              )}
            />
          </div>
          <div className="grid-col grid-col:6 grid-col:4@m -end">
            <Figure
              alt="Example of Biocode's credible card"
              border
              glare
              inViewOffset={0.7}
              quality={100}
              sizes={`${MQ.m} 33vw, 50vw`}
              {...getImage(
                'joonassandell-biocode-website-card-credible',
                images,
              )}
            />
          </div>
        </TemplateSection>
        <TemplateSection gridGap="xl">
          <div className="grid-col grid-col:11 grid-col:10@m">
            <Figure
              alt="Biocode feature page hero cards"
              border
              quality={100}
              scroll
              scrollSpeed={1}
              sizes={`${MQ.m} 70vw, 90w`}
              {...getImage(
                'joonassandell-biocode-website-features-hero',
                images,
              )}
            />
          </div>
          <div className="grid-col grid-col:11 grid-col:9@m -start:2 -start:2@m">
            <Figure
              alt="Biocode feature page assessment image"
              border
              quality={100}
              sizes={`${MQ.m} 60vw, 90w`}
              {...getImage(
                'joonassandell-biocode-website-features-assessments',
                images,
              )}
            />
          </div>
          <div className="grid-col grid-col:6 -start:3 grid-col:3@m -start:1@m -align:center">
            <Figure
              alt="Mobile view of Biocode's homepage"
              glare
              quality={100}
              sizes={`${MQ.m} 25vw, 33vw`}
              {...getImage('joonassandell-biocode-website-mobile', images)}
            />
          </div>
          <div className="grid-col grid-col:10 grid-col:9@m -end">
            <Figure
              alt="Biocode feature page results image"
              border
              quality={100}
              scroll
              sizes={`${MQ.l} 70vw, 80vw`}
              {...getImage(
                'joonassandell-biocode-website-features-results',
                images,
              )}
            />
          </div>
          <div className="grid-col grid-col:10@l -start:2@l">
            <Figure
              alt="Biocode for producers app in dark mode"
              border
              quality={100}
              sizes={`${MQ.l} 80vw, 100vw`}
              transition="clip"
              {...getImage(
                'joonassandell-biocode-app-producer-crop-dark',
                images,
              )}
            />
          </div>
        </TemplateSection>
        <TemplateSection className="Template-app" pt={false} theme="light">
          <div className="grid-col grid-col:9@m">
            <Figure
              alt="Biocode app sign in page"
              border
              sizes={`${MQ.l} 70vw, 100vw`}
              {...getImage('joonassandell-biocode-app-auth', images)}
            />
          </div>
          <div className="grid-col grid-col:11 grid-col:9@m -end">
            <Figure
              alt="Biocode app for producers overview page"
              border
              sizes="70vw"
              {...getImage(
                'joonassandell-biocode-app-producer-overview',
                images,
              )}
            />
          </div>
          <div className="grid-col grid-col:10 grid-col:6@m">
            <Figure
              alt="Biocode app for producers assessment page"
              border
              sizes={`${MQ.m} 50vw, 70vw`}
              {...getImage('joonassandell-biocode-app-producer-crop', images)}
            />
          </div>
          <div className="grid-col grid-col:11 grid-col:6@m -end -align:end">
            <Figure
              alt="Example of Biocode's user interface elements"
              border
              sizes={`${MQ.m} 50vw, 90vw`}
              {...getImage('joonassandell-biocode-app-ui', images)}
            />
          </div>
          <div className="grid-col grid-col:11 grid-col:8@m -start:3@m">
            <Figure
              alt="Another example of Biocode's user interface elements"
              border
              sizes={`${MQ.m} 70vw, 90vw`}
              {...getImage('joonassandell-biocode-app-ui-2', images)}
            />
          </div>
          <div className="grid-col grid-col:8@m -end">
            <Figure
              alt="Biocode for producers application teaser image"
              border
              sizes={`${MQ.m} 70vw, 100vw`}
              {...getImage('joonassandell-biocode-app-producer-frame', images)}
            />
          </div>
        </TemplateSection>
      </TemplateMain>
      <NextProject id={nextProjectId} />
    </Template>
  );
};
