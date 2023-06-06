import { HeroBiocode } from '@/components/Hero';
import { Template, TemplateMain, TemplateSection } from '@/components/Template';
import { getSitemap, getImage } from '@/lib/utility';
import { NextProject } from '@/components/NextProject';
import { mq, scrollSpeed } from '@/lib/config';
import { Info } from '@/components/Info';
import { Figure } from '@/components/Figure';
import { getImages } from '@/lib/getImages';

const { id, title } = getSitemap('biocode');

const Biocode = ({ images }) => {
  return (
    <Template name={id} title={title}>
      <TemplateMain>
        <HeroBiocode />
        <Info
          client={{ name: title, href: 'https://biocode.io' }}
          type={['Web app', 'Web service', 'Commission']}
          heading="Biocode is Carbon footprint calculator that makes sense. It's aimed for food brands, producers and farmers. It’s an easy tool for tackling the reporting chaos and clearly communicating environmental values to customers."
          smallPrint="Building together with awesome co-workers at Biocode."
          text={
            <p>
              After several iterations the Oras brand was modernised entirely in
              connection with the web service overhaul. The web service was used
              to create a bold and distinct image of Oras and to strongly
              highlight the brand’s new promise.
            </p>
          }
          role={['Product design', 'App development', 'Web development']}
          year="2021—"
        />
        <TemplateSection gridGap="xl">
          <div className="grid-col grid-col:10@l -start:2@l">
            <Figure
              alt="Biocode homepage and isometric Biocode application"
              border
              priority
              scrolling={false}
              sizes={`${mq.l} 80vw, 100vw`}
              quality={100}
              {...getImage('joonassandell-biocode-website-home-hero', images)}
            />
          </div>
          <div className="grid-col grid-col:10 grid-col:7@m">
            <Figure
              alt="'Who Biocode is for' cards and call to action to sign up for Biocode"
              border
              scrolling={false}
              sizes={`${mq.m} 40vw, 70vw`}
              quality={100}
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
              scrolling={false}
              sizes={`${mq.m} 40vw, 70vw`}
              quality={100}
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
              scrolling={false}
              sizes={`${mq.m} 60vw, 70vw`}
              quality={100}
              {...getImage(
                'joonassandell-biocode-website-home-reporting',
                images,
              )}
            />
          </div>
          <div className="grid-col grid-col:10 grid-col:7@m -start:2@m">
            <Figure
              border
              src="/assets/biocode/joonassandell-biocode-website-home.mp4"
              scrolling={false}
            />
          </div>
        </TemplateSection>
        <TemplateSection gridGap="l" gridRowGap="default">
          <div className="grid-col grid-col:6 grid-col:3@m">
            <Figure
              alt="Biocode application icon"
              border
              scrolling={false}
              sizes={`${mq.m} 20vw, 50vw`}
              {...getImage('joonassandell-biocode-app-icon', images)}
              blurhash={false}
            />
          </div>
          <div className="grid-col grid-col:6 grid-col:3@m">
            <Figure
              alt="Biocode for producers mark"
              border
              scrolling={false}
              sizes={`${mq.m} 20vw, 50vw`}
              {...getImage('joonassandell-biocode-producer-mark', images)}
              blurhash={false}
            />
          </div>
          <div className="grid-col grid-col:6 grid-col:3@m">
            <Figure
              alt="Biocode for products mark"
              border
              scrolling={false}
              sizes={`${mq.m} 20vw, 50vw`}
              {...getImage('joonassandell-biocode-product-mark', images)}
              blurhash={false}
            />
          </div>
          <div className="grid-col grid-col:6 grid-col:3@m">
            <Figure
              alt="Biocode for reporting mark"
              border
              scrolling={false}
              sizes={`${mq.m} 20vw, 50vw`}
              {...getImage('joonassandell-biocode-report-mark', images)}
              blurhash={false}
            />
          </div>
        </TemplateSection>
        <TemplateSection gridGap="l" gridRowGap="default">
          <div className="grid-col grid-col:6 grid-col:4@m -align:end">
            <Figure
              alt="Example of Biocode's easy to use card"
              border
              scrolling={false}
              sizes={`${mq.m} 33vw, 50vw`}
              quality={100}
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
              scrolling={false}
              sizes={`${mq.m} 60vw, 100vw`}
              quality={100}
              {...getImage('joonassandell-biocode-website-about', images)}
            />
          </div>
          <div className="grid-col grid-col:6 grid-col:4@m">
            <Figure
              alt="Example of Biocode's agile card"
              border
              scrolling={false}
              sizes={`${mq.m} 33vw, 50vw`}
              quality={100}
              {...getImage('joonassandell-biocode-website-card-agile', images)}
            />
          </div>
          <div className="grid-col grid-col:6 grid-col:4@m">
            <Figure
              alt="Example of Biocode's insightful card"
              border
              scrolling={false}
              sizes={`${mq.m} 33vw, 50vw`}
              quality={100}
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
              scrolling={false}
              sizes={`${mq.m} 33vw, 50vw`}
              quality={100}
              {...getImage(
                'joonassandell-biocode-website-card-credible',
                images,
              )}
            />
          </div>
        </TemplateSection>
        <TemplateSection>
          <div className="grid-col grid-col:11 grid-col:10@m">
            <Figure
              alt="Biocode feature page hero cards"
              border
              scrolling={false}
              sizes={`${mq.m} 70vw, 90w`}
              quality={100}
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
              scrolling={false}
              sizes={`${mq.m} 60vw, 90w`}
              quality={100}
              {...getImage(
                'joonassandell-biocode-website-features-assessments',
                images,
              )}
            />
          </div>
          <div className="grid-col grid-col:10 grid-col:9@m -end">
            <Figure
              alt="Biocode feature page results image"
              border
              scrolling={false}
              sizes={`${mq.l} 70vw, 80vw`}
              quality={100}
              {...getImage(
                'joonassandell-biocode-website-features-results',
                images,
              )}
            />
          </div>
          <div className="grid-col grid-col:10@l -start:2@l">
            <Figure
              alt="Biocode for producers app in dark mode"
              border="var(--border-900)"
              scrolling={false}
              sizes={`${mq.l} 80vw, 100vw`}
              quality={100}
              {...getImage(
                'joonassandell-biocode-app-producer-crop-dark',
                images,
              )}
            />
          </div>
        </TemplateSection>
        <TemplateSection className="Template-app" paddingBottom theme="light">
          <div className="grid-col grid-col:9@m">
            <Figure
              alt="Biocode app sign in page"
              border
              scrolling={false}
              sizes={`${mq.l} 70vw, 100vw`}
              {...getImage('joonassandell-biocode-app-auth', images)}
            />
          </div>
          <div className="grid-col grid-col:11 grid-col:9@m -end">
            <Figure
              alt="Biocode app for producers overview page"
              border
              scrolling={false}
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
              scrolling={false}
              sizes={`${mq.m} 50vw, 70vw`}
              {...getImage('joonassandell-biocode-app-producer-crop', images)}
            />
          </div>
          <div className="grid-col grid-col:11 grid-col:6@m -end -align:end">
            <Figure
              alt="Example of Biocode's user interface elements"
              border="var(--border-900)"
              scrolling={false}
              sizes={`${mq.m} 50vw, 90vw`}
              {...getImage('joonassandell-biocode-app-ui', images)}
            />
          </div>
          <div className="grid-col grid-col:11 grid-col:8@m -start:3@m">
            <Figure
              alt="Another example of Biocode's user interface elements"
              border="var(--border-900)"
              scrolling={false}
              sizes={`${mq.m} 70vw, 90vw`}
              {...getImage('joonassandell-biocode-app-ui-2', images)}
            />
          </div>
          <div className="grid-col grid-col:8@m -end">
            <Figure
              alt="Biocode for producers application teaser image"
              border
              scrolling={false}
              sizes={`${mq.m} 70vw, 100vw`}
              {...getImage('joonassandell-biocode-app-producer-frame', images)}
            />
          </div>
        </TemplateSection>
      </TemplateMain>
      <NextProject id="oras" />
    </Template>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      navTitle: title,
      images: await getImages(id),
    },
  };
};

export default Biocode;
