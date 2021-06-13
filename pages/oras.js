import { OrasHero } from '../containers/Oras';
import { Template } from '../containers/Template';
import { getSitemap } from '../lib/utility';
import { motion, useAnimation } from 'framer-motion';
import {
  mq,
  scrollSpeed,
  transPrimary,
  transTertiary,
  transPrimaryFast,
  transPrimaryFastest,
  transSecondary,
  transSecondaryFast,
  transSecondaryFastest,
} from '../lib/config';
import Info from '../components/Info';
import Figure from '../components/Figure';

const oras = getSitemap('oras');

export default function Oras() {
  return (
    <Template name={oras.id} title={oras.title}>
      <OrasHero />
      <Info
        client={{ name: oras.title, href: 'https://oras.com' }}
        employer={{ name: 'Mediasignal', href: 'https://mediasignal.fi/en' }}
        heading="Oras is a significant developer, manufacturer and marketer of kitchen and bathroom faucets. Each technical detail in the products is designed to promote the efficient use of water and energy. We we're asked to create an extensive web service solution for Europe’s leading faucet manufacturer."
        smallPrint="Made together with wonderful people at Mediasignal and Hasan & Partners."
        text={
          <>
            <p>
              After several iterations the Oras brand was modernised entirely in
              connection with the web service overhaul. The web service was used
              to create a bold and distinct image of Oras and to strongly
              highlight the brand’s new promise.
            </p>
          </>
        }
        role={['UI/UX design', 'Web development', 'Concept strategy']}
        year="2016"
      />
      <section className="grid">
        <div className="grid-col grid-col:6 grid-col:4@l">
          <Figure
            alt="Oras woman showering"
            id="oras-woman"
            className="Template-img-1"
            mask={true}
            src="/assets/oras/joonassandell-oras-woman.jpg"
            sizes={`${mq.l} 33vw, ${mq.s} 50vw, 33vw`}
          />
        </div>
        <div className="grid-col grid-col:5 -start:8 grid-col:4@l -start:8@l -align:end">
          <Figure
            alt="Oras man showering"
            className="Template-img-2"
            id="oras-man"
            mask={true}
            scrollSpeed={1}
            src="/assets/oras/joonassandell-oras-man-square.jpg"
            size="1:1"
            sizes={`${mq.l} 33vw, ${mq.s} 50vw, 33vw`}
          />
        </div>
      </section>
      <section className="Template-section -bg:gradient-10-50-10">
        <div className="grid">
          <div className="grid-col grid-col:8 -start:3">
            <Figure
              alt="Oras product family"
              height={6072}
              id="oras-product-family"
              placeholderColor={50}
              scrolling={false}
              transition="fade"
              src="/assets/oras/joonassandell-oras-product-family.jpg"
              width={1584}
            />
          </div>
        </div>
      </section>
      <section className="grid -size:l">
        <div className="grid-col grid-col:6">
          <Figure
            className="Template-videoBathroom"
            alt="Oras lifestyle animation concept"
            id="oras-bathroom-animation"
            scrollSpeed={-1}
            transition="fade"
            src="/assets/oras/joonassandell-oras-bathroom.mp4"
          />
        </div>
        <div className="grid-col grid-col:6">
          <Figure
            alt="Oras get inspired animation concept"
            id="oras-get-inspired-animation"
            scrollSpeed={0.5}
            transition="fade"
            src="/assets/oras/joonassandell-oras-get-inspired.mp4"
          />
        </div>
      </section>
      <section className="Template-section -bg:gradient-10-50-10 paddingBottom-0">
        <div className="wrap grid">
          <div className="grid-col grid-col:7 -end">
            <Figure
              alt="Oras kitchen experience"
              height={6338}
              id="oras-ux-kitchen"
              placeholderColor={10}
              scrolling={false}
              transition="fade"
              src="/assets/oras/joonassandell-oras-ux-kitchen.jpg"
              width={1584}
            />
          </div>
        </div>
      </section>
      <section className="Template-section paddingBottom-0">
        <div className="wrap grid -size:l">
          <div className="grid-col grid-col:7">
            <Figure
              alt="Oras homepage hero"
              height={1200}
              id="oras-homepage"
              src="/assets/oras/joonassandell-oras-home-hero.jpg"
              width={1584}
            />
          </div>
          <div className="grid-col grid-col:4 -start:9 -align:end">
            <Figure
              alt="Oras live more page hero"
              height={890}
              id="oras-live-more"
              scrollSpeed={-scrollSpeed}
              transition="fade"
              src="/assets/oras/joonassandell-oras-live-more-hero.jpg"
              width={1584}
            />
          </div>
          <div className="grid-col grid-col:8 -start:4">
            <Figure
              alt="Oras look book cta"
              height={1368}
              id="oras-look-booked"
              scrolling={false}
              src="/assets/oras/joonassandell-oras-look-booked.jpg"
              width={1584}
            />
          </div>
        </div>
      </section>
      <section className="Template-section -bg:gradient-10-50-10">
        <div className="wra grid">
          <div className="grid-col grid-col:7">
            <Figure
              alt="Oras single product"
              height={4824}
              id="oras-product-single"
              placeholderColor={10}
              scrolling={false}
              transition="fade"
              src="/assets/oras/joonassandell-oras-product-single.jpg"
              width={1584}
            />
          </div>
          <div className="grid-col grid-col:4 -start:9 -align:center">
            <Figure
              alt="Oras man showering"
              id="oras-man-2"
              mask={true}
              src="/assets/oras/joonassandell-oras-man.jpg"
            />
          </div>
        </div>
      </section>
    </Template>
  );
}

export async function getStaticProps() {
  return {
    props: {
      navTitle: oras.title,
    },
  };
}
