import { HeroBiocode } from '@/components/Hero';
import { Template } from '@/containers/Template';
import { getSitemap, getImage } from '@/lib/utility';
import NextProject from '@/components/NextProject';
import { mq, scrollSpeed } from '@/lib/config';
import Info from '@/components/Info';
import Figure from '@/components/Figure';
import getImages from '@/lib/getImages';
import useIsMobile from '@/lib/useIsMobile';

const biocode = getSitemap('biocode');
const oras = getSitemap('oras');

const Biocode = ({ images }) => {
  const isMobile = useIsMobile();
  const woman = getImage('joonassandell-oras-thumbnail', images);
  const manSquare = getImage('joonassandell-oras-man-square', images);
  const family = getImage('joonassandell-oras-product-family', images);
  const kitchen = getImage('joonassandell-oras-ux-kitchen', images);
  const homeHero = getImage('joonassandell-oras-home-hero', images);
  const liveMore = getImage('joonassandell-oras-live-more-hero', images);
  const lookBooked = getImage('joonassandell-oras-look-booked', images);
  const single = getImage('joonassandell-oras-product-single', images);
  const man = getImage('joonassandell-oras-man', images);
  const productsOverview = getImage(
    'joonassandell-oras-products-overview',
    images,
  );
  const blog = getImage('joonassandell-oras-blog', images);
  const heroSense = getImage('joonassandell-oras-hero-sense', images);
  const s1 = getImage('joonassandell-oras-strategy-1', images);
  const s2 = getImage('joonassandell-oras-strategy-2', images);
  const s3 = getImage('joonassandell-oras-strategy-3', images);
  const s4 = getImage('joonassandell-oras-strategy-4', images);
  const s5 = getImage('joonassandell-oras-strategy-5', images);
  const s6 = getImage('joonassandell-oras-strategy-6', images);
  const s7 = getImage('joonassandell-oras-strategy-7', images);
  const mobile = getImage('joonassandell-oras-mobile', images);
  const mobile2 = getImage('joonassandell-oras-mobile-2', images);
  const mobile3 = getImage('joonassandell-oras-mobile-3', images);

  return (
    <Template name={biocode.id} title={biocode.title}>
      <HeroBiocode />
      <Info
        client={{ name: biocode.title, href: 'https://biocode.io' }}
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
        year="2021"
      />
      <section className="grid">
        <div className="grid-col grid-col:6 grid-col:4@l">
          <Figure
            alt="Oras woman showering"
            className="Template-img-1"
            mask
            priority
            scrollOffset={isMobile ? 0 : '-25%'}
            sizes={`${mq.l} 33vw, ${mq.s} 50vw, 33vw`}
            transition="clip"
            {...woman}
          />
        </div>
        <div className="grid-col grid-col:5 -start:8 grid-col:4@l -start:8@l -align:end">
          <Figure
            alt="Oras man showering"
            className="Template-img-2"
            mask
            priority
            scrollOffset={isMobile ? 0 : '-25%'}
            scrollSpeed={1}
            sizes={`${mq.l} 33vw, ${mq.s} 50vw, 33vw`}
            transition="clip"
            {...manSquare}
          />
        </div>
      </section>
      <section className="Template-section -bg:gradient-10-50-10 -padding:bottom">
        <div className="grid wrap">
          <div className="grid-col grid-col:10@m -start:2@m">
            <Figure
              alt="Oras product family"
              scrolling={false}
              sizes={`${mq.l} 80vw, 100vw`}
              quality={90}
              blurhash={false}
              priority
              {...family}
            />
          </div>
        </div>
      </section>
      <section className="grid -size:l">
        <div className="grid-col grid-col:10 grid-col:6@m">
          <Figure
            className="Template-videoBathroom"
            alt="Oras lifestyle animation concept"
            scrollSpeed={-1}
            src="/assets/oras/joonassandell-oras-bathroom.mp4"
            transition="clip"
          />
        </div>
        <div className="grid-col grid-col:10 -end grid-col:6@m">
          <Figure
            alt="Oras get inspired animation concept"
            scrollSpeed={0.5}
            src="/assets/oras/joonassandell-oras-get-inspired.mp4"
            transition="clip"
          />
        </div>
      </section>
      <section className="Template-section -bg:gradient-10-50-10">
        <div className="wrap grid -size:l">
          <div className="grid-col grid-col:9@m">
            <Figure
              alt="Oras products overview"
              scrolling={false}
              sizes={`${mq.m} 70vw, 100vw`}
              blurhash={false}
              priority
              {...productsOverview}
            />
          </div>
          <div className="grid-col grid-col:8@m -start:2@m">
            <Figure
              alt="Oras blog"
              scrolling={false}
              sizes={`${mq.m} 60vw, 100vw`}
              {...blog}
            />
          </div>
          <div className="grid-col grid-col:9@m -end">
            <Figure
              alt="Oras kitchen experience"
              scrolling={false}
              sizes={`${mq.m} 70vw, 100vw`}
              blurhash={false}
              priority
              {...kitchen}
            />
          </div>
        </div>
      </section>
      <section className="Template-section">
        <div className="wrap grid -size:full">
          <div className="grid-col grid-col:7@m">
            <Figure
              alt="Oras homepage hero"
              scrollSpeed={0.5}
              sizes={`${mq.m} 70vw, 100vw`}
              transition="clip"
              {...homeHero}
            />
          </div>
          <div className="grid-col grid-col:9 -start:4 grid-col:5@m -start:9@m -align:end">
            <Figure
              alt="Oras live more page hero"
              scrollSpeed={-scrollSpeed}
              sizes={`${mq.m} 33vw, 80vw`}
              transition="clip"
              {...liveMore}
            />
          </div>
          <div className="grid-col grid-col:9 grid-col:8@m -start:4@m">
            <Figure
              alt="Oras look book cta"
              scrolling={false}
              sizes={`${mq.m} 80vw, 100vw`}
              transition="clip"
              {...lookBooked}
            />
          </div>
        </div>
      </section>
      <section className="Template-section">
        <Figure
          alt="Oras sense faucet"
          blurhash={false}
          mask
          priority
          {...heroSense}
        />
      </section>
      <section className="Template-section -bg:gradient-10-50-10">
        <div className="wrap grid -size:l">
          <div className="grid-col grid-col:8@m">
            <Figure
              alt="Oras single product page"
              scrolling={false}
              sizes={`${mq.m} 80vw, 100vw`}
              blurhash={false}
              priority
              {...single}
            />
          </div>
          <div className="grid-col grid-col:6 -start:7 grid-col:4@m -start:9@m -align:center">
            <Figure
              alt="Oras man showering"
              mask
              sizes={`${mq.m} 50vw, 33vw`}
              {...man}
            />
          </div>
        </div>
      </section>
      <section className="Template-section">
        <div className="grid -size:l">
          <div className="grid-col grid-col:10 grid-col:4@m -align:end">
            <Figure
              alt="Oras strategy 1"
              scrolling={false}
              sizes={`${mq.m} 33vw, 80vw`}
              {...s5}
            />
          </div>
          <div className="grid-col grid-col:10 -start:2 grid-col:7@m -start:5@m">
            <Figure
              alt="Oras strategy 2"
              scrolling={false}
              sizes={`${mq.m} 33vw, 50vw`}
              {...s6}
            />
          </div>
        </div>
        <div className="grid -size:l wrap@m">
          <div className="grid-col grid-col:10 -start:3 grid-col:7@m -start:1@m">
            <Figure
              alt="Oras strategy 3"
              scrolling={false}
              sizes={`${mq.m} 33vw, 80vw`}
              quality={90}
              {...s1}
            />
          </div>
          <div className="grid-col grid-col:10 -start:2 grid-col:5@m -start:8@m">
            <Figure
              alt="Oras strategy 4"
              scrolling={false}
              sizes={`${mq.m} 33vw, 80vw`}
              {...s2}
            />
          </div>
        </div>
        <div className="grid -size:l">
          <div className="grid-col grid-col:10 grid-col:5@m">
            <Figure
              alt="Oras strategy 5"
              scrolling={false}
              sizes={`${mq.m} 33vw, 80vw`}
              {...s3}
            />
            <div className="grid">
              <div className="grid-col grid-col:9 -start:3 grid-col:8@m -start:5@m">
                <Figure
                  alt="Oras strategy 6"
                  scrolling={false}
                  sizes={`${mq.m} 33vw, 50vw`}
                  {...s7}
                />
              </div>
            </div>
          </div>
          <div className="grid-col grid-col:9 -start:4 grid-col:7@m -start:6@m">
            <Figure
              alt="Oras strategy 7"
              scrolling={false}
              sizes={`80vw`}
              quality={90}
              {...s4}
            />
          </div>
        </div>
      </section>
      <section className="Template-section -padding:bottom">
        <div className="wrap grid -size:l">
          <div className="grid-col grid-col:5 grid-col:4@s grid-col:3@m">
            <Figure
              alt="Oras homepage mobile"
              priority
              sizes={`${mq.m} 25vw, 50vw`}
              quality={100}
              {...mobile}
            />
          </div>
          <div className="grid-col grid-col:5 grid-col:4@s grid-col:3@m">
            <Figure
              alt="Oras homepage mobile 2"
              scrollSpeed={-scrollSpeed}
              priority
              sizes={`${mq.m} 25vw, 50vw`}
              {...mobile2}
            />
          </div>
        </div>
        <div className="wrap grid -size:l">
          <div className="grid-col grid-col:5 -start:7 grid-col:4@s grid-col:3@m">
            <Figure
              alt="Oras homepage mobile 3"
              scrollSpeed={scrollSpeed * 2}
              priority
              sizes={`${mq.m} 25vw, 50vw`}
              {...mobile3}
            />
          </div>
        </div>
      </section>
      <NextProject id="oras" />
    </Template>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      navTitle: biocode.title,
      images: await getImages(oras.id),
    },
  };
};

export default Biocode;
