import { easing, mq, scrollToDuration, transPrimary } from '../lib/config';
import { getSitemap, scrollTo } from '../lib/utility';
import { useEffect, useState } from 'react';

import Link from '../components/Link';
import { OrasHero } from '../containers/Oras';
import { Template } from '../containers/Template';
import c from 'classnames';
import { motion } from 'framer-motion';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import { useMedia } from 'react-use';

const home = getSitemap('home');
const about = getSitemap('about');

export default function Home() {
  const { scroll } = useLocomotiveScroll();
  const [animationHide, setAnimationHide] = useState(false);
  const [animation, setAnimation] = useState(false);
  const [currentHero, setCurrentHero] = useState('');
  const l = useMedia(mq.l);

  const handleClick = e => {
    e.preventDefault();
    setAnimationHide(true);
    const id = e.currentTarget.closest('[id]').id;
    setCurrentHero(id);

    if (l) {
      scroll &&
        scroll.scrollTo(`#${id}`, {
          duration: scrollToDuration,
          easing,
          callback: () => {
            setAnimation(true);
          },
        });
    } else {
      scrollTo(`#${id}`);
      setAnimation(true);
    }
  };

  return (
    <>
      <Template name={home.id} title="Portfolio">
        {/* <div data-scroll-section> */}
        <motion.div
          animate={
            animationHide && {
              opacity: 0,
            }
          }
          className="Template-about"
          transition={transPrimary}
        >
          <div className="wrap">
            <Link
              href={about.url}
              className="Template-about-mobile"
              orientation="vertical"
            >
              {about.title}
            </Link>
            <div className="Template-about-desktop">
              <h1>
                I'm a designer & creative developer of things that usually
                appear on screens. Read more{' '}
                <Link href={about.url} underline>
                  about me
                </Link>{' '}
                or just keep scrolling for selected works.
              </h1>
            </div>
          </div>
        </motion.div>

        <OrasHero
          animationStart={currentHero === 'oras' && animation}
          animationState="preAnimation"
          animationHide={currentHero != 'oras' && animationHide}
          id="oras"
          onClick={handleClick}
          // onFocus={handleClick}
        />
        {/* </div> */}
        <div
          data-id="test"
          onClick={handleClick}
          style={{ height: '100vh' }}
          data-scroll-section
        ></div>
      </Template>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      navTitle: home.title,
    },
  };
}
