import { OrasHero } from '../containers/Oras';
import { Template } from '../containers/Template';
import { getSitemap, getImage } from '../lib/utility';
import { mq, scrollSpeed } from '../lib/config';
import Info from '../components/Info';
import Figure from '../components/Figure';
import { getPlaiceholder } from 'plaiceholder';
import { getImages } from '../lib/getImages';

const oras = getSitemap('oras');

const Oras = ({ images }) => {
  const woman = getImage('joonassandell-oras-woman', images);
  const manSquare = getImage('joonassandell-oras-man-square', images);
  const family = getImage('joonassandell-oras-product-family', images);
  const kitchen = getImage('joonassandell-oras-ux-kitchen', images);
  const homeHero = getImage('joonassandell-oras-home-hero', images);
  const liveMore = getImage('joonassandell-oras-live-more-hero', images);
  const lookBooked = getImage('joonassandell-oras-look-booked', images);
  const single = getImage('joonassandell-oras-product-single', images);
  const man = getImage('joonassandell-oras-man', images);
  const s1 = getImage('joonassandell-oras-strategy-1', images);
  const s2 = getImage('joonassandell-oras-strategy-2', images);
  const s3 = getImage('joonassandell-oras-strategy-3', images);
  const s4 = getImage('joonassandell-oras-strategy-4', images);
  const s5 = getImage('joonassandell-oras-strategy-5', images);
  const s6 = getImage('joonassandell-oras-strategy-6', images);
  const s7 = getImage('joonassandell-oras-strategy-7', images);

  return (
    <Template name={oras.id} title={oras.title}>
      <OrasHero priority={true} />
      <Info
        client={{ name: oras.title, href: 'https://oras.com' }}
        employer={{ name: 'Mediasignal', href: 'https://mediasignal.fi/en' }}
        heading="Oras is a significant developer, manufacturer and marketer of kitchen and bathroom faucets. Each technical detail in the products is designed to promote the efficient use of water and energy. We we're asked to create an extensive web service solution for Europe’s leading faucet manufacturer."
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
      <section className="grid">
        <div className="grid-col grid-col:6 grid-col:4@l">
          <Figure
            alt="Oras woman showering"
            className="Template-img-1"
            mask={true}
            sizes={`${mq.l} 33vw, ${mq.s} 50vw, 33vw`}
            {...woman}
          />
        </div>
        <div className="grid-col grid-col:5 -start:8 grid-col:4@l -start:8@l -align:end">
          <Figure
            alt="Oras man showering"
            className="Template-img-2"
            mask={true}
            scrollSpeed={1}
            sizes={`${mq.l} 33vw, ${mq.s} 50vw, 33vw`}
            {...manSquare}
          />
        </div>
      </section>
      <section className="Template-section -bg:gradient-10-50-10 -padding:full">
        <div className="grid wrap">
          <div className="grid-col grid-col:10 -start:2">
            <Figure
              alt="Oras product family"
              placeholderColor={10}
              scrolling={false}
              transition="fade"
              sizes={`${mq.l} 80vw, 100vw`}
              quality={90}
              {...family}
              blurhash={false}
              priority
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
          />
        </div>
        <div className="grid-col grid-col:10 -end grid-col:6@m">
          <Figure
            alt="Oras get inspired animation concept"
            scrollSpeed={0.5}
            src="/assets/oras/joonassandell-oras-get-inspired.mp4"
          />
        </div>
      </section>
      <section className="Template-section -bg:gradient-10-50-10">
        <div className="wrap grid -size:l">
          <div className="grid-col grid-col:8@m -end">
            <Figure
              alt="Oras kitchen experience"
              placeholderColor={10}
              scrolling={false}
              transition="fade"
              sizes={`${mq.m} 80vw, 100vw`}
              {...kitchen}
              blurhash={false}
              priority
            />
          </div>
        </div>
      </section>
      <section className="Template-section">
        <div className="wrap grid -size:l">
          <div className="grid-col grid-col:7@m">
            <Figure
              alt="Oras homepage hero"
              scrollSpeed={0.5}
              sizes={`${mq.m} 70vw, 100vw`}
              {...homeHero}
            />
          </div>
          <div className="grid-col grid-col:9 -start:4 grid-col:4@m -start:9@m -align:end">
            <Figure
              alt="Oras live more page hero"
              scrollSpeed={-scrollSpeed}
              sizes={`${mq.m} 33vw, 80vw`}
              {...liveMore}
            />
          </div>
          <div className="grid-col grid-col:9 grid-col:8@m -start:4@m">
            <Figure
              alt="Oras look book cta"
              scrolling={false}
              sizes={`${mq.m} 80vw, 100vw`}
              {...lookBooked}
            />
          </div>
        </div>
      </section>
      <section className="Template-section -bg:gradient-10-50-10">
        <div className="wrap grid -size:l">
          <div className="grid-col grid-col:8@m">
            <Figure
              alt="Oras single product page"
              placeholderColor={10}
              scrolling={false}
              transition="fade"
              sizes={`${mq.m} 80vw, 100vw`}
              {...single}
              blurhash={false}
              priority
            />
          </div>
          <div className="grid-col grid-col:6 -start:7 grid-col:4@m -start:9@m -align:center">
            <Figure
              alt="Oras man showering"
              mask={true}
              sizes={`${mq.m} 50vw, 33vw`}
              {...man}
            />
          </div>
        </div>
      </section>
      <section className="Template-section -padding:full">
        <div className="grid -size:l wra">
          <div className="grid-col grid-col:4 -align:end">
            <Figure
              alt="Oras strategy 1"
              scrolling={false}
              sizes={`${mq.m} 33vw, 50vw`}
              {...s5}
            />
          </div>
          <div className="grid-col grid-col:7">
            <Figure
              alt="Oras strategy 2"
              scrolling={false}
              sizes={`100vw`}
              quality={90}
              {...s1}
            />
          </div>
        </div>
        <div className="grid -size:l wrap">
          <div className="grid-col grid-col:7">
            <Figure
              alt="Oras strategy 3"
              scrolling={false}
              sizes={`${mq.m} 33vw, 50vw`}
              {...s4}
            />
          </div>
          <div className="grid-col grid-col:5 -start:">
            <Figure
              alt="Oras strategy 3"
              scrolling={false}
              sizes={`${mq.m} 33vw, 50vw`}
              {...s2}
            />
          </div>
        </div>
        <div className="grid -size:l wra">
          <div className="grid-col grid-col:5">
            <Figure
              alt="Oras strategy 3"
              scrolling={false}
              sizes={`${mq.m} 33vw, 50vw`}
              {...s3}
            />
            <div className="grid">
              <div className="grid-col grid-col:8 -start:5">
                <Figure
                  alt="Oras strategy 3"
                  scrolling={false}
                  sizes={`${mq.m} 33vw, 50vw`}
                  {...s7}
                />
              </div>
            </div>
          </div>
          <div className="grid-col grid-col:7">
            <Figure
              alt="Oras strategy 3"
              scrolling={false}
              sizes={`${mq.m} 33vw, 50vw`}
              {...s6}
            />
          </div>
        </div>
      </section>
    </Template>
  );
};

export const getStaticProps = async () => {
  const imagePaths = getImages(oras.id);
  const images = await Promise.all(
    imagePaths.map(async src => {
      const { blurhash, img } = await getPlaiceholder(src, {
        size: 32,
      });

      return {
        ...img,
        blurhash,
      };
    }),
  ).then(values => values);

  return {
    props: {
      navTitle: oras.title,
      images,
    },
  };
};

export default Oras;
