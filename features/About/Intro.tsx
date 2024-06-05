import { Button } from '@/components/Button';
import { Download } from '@/components/Icon';
import { Figure } from '@/components/Figure';
import { getLink } from '@/lib/utils';
import { Heading } from '@/components/Heading';
import { JUMP_FIX_VARIANTS, MQ, SCROLL_SPEED } from '@/lib/config';
import { Link } from '@/components/Link';
import { m } from 'framer-motion';
import { Text } from '@/components/Text';
import { TextReveal } from '@/components/TextReveal';
import { useApp } from '@/components/App';
import { useInView } from '@/lib/useInView';
import { useMedia } from 'react-use';
import { useRef } from 'react';
import cubeImage from '@/public/about/line-cube.png';
import profileImage2 from '@/public/about/joonassandell-profile-2.jpg';

export const AboutIntro = () => {
  const mqS = useMedia(MQ.s, true);
  const cubeImageAnim = useRef(null);
  const cubeImageInView = useInView(cubeImageAnim, 0, false);
  const { transition } = useApp();

  const heading = {
    desktop: [
      "I'm creative developer and designer ",
      'with a keen eye for good design ',
      'and attention to detail',
    ],
    mobile: [
      "I'm creative developer ",
      'and designer with ',
      'a keen eye for good ',
      'design and attention ',
      'to detail',
    ],
  };

  const lead = {
    desktop: [
      'With more than a decade of design engineering ',
      <>
        <Link href="/milestones">experience</Link>, I have the skills to build
        hiqh-quality{' '}
      </>,
      'web experiences and assist clients in addressing ',
      'practical business challenges.',
    ],
    mobile: [
      'With more than a decade of design ',
      <>
        engineering <Link href="/milestones">experience</Link>, I have the{' '}
      </>,
      'skills to build hiqh-quality web ',
      'web experiences and assist ',
      'clients in addressing practical ',
      'business challenges.',
    ],
  };

  return (
    <div className="Template-intro wrap pt:15vw" id="intro">
      <div
        className="grid pb:5vw"
        {...(mqS && {
          'data-s': true,
          'data-s-delay': 0.15,
          'data-s-position': 'top',
          'data-s-speed': SCROLL_SPEED,
        })}
      >
        <div className="grid-col -start:3@m -start:3@l">
          <Heading size="h3" tag="h1">
            <TextReveal text={mqS ? heading.desktop : heading.mobile} />
          </Heading>
          <Text className="mb:l" size="xl">
            <p>
              <TextReveal text={mqS ? lead.desktop : lead.mobile} />
            </p>
          </Text>
          <Text animate className="mb:m">
            <Button
              href="/about/Joonas-Sandell-CV.pdf"
              icon={<Download />}
              target="_blank"
            >
              Download resume
            </Button>
          </Text>
        </div>
      </div>
      <div
        className="Template-cube-2"
        data-s
        data-s-position="top"
        data-s-speed={SCROLL_SPEED * -2}
      >
        <m.div
          animate={cubeImageInView ? 'animate' : ''}
          ref={cubeImageAnim}
          variants={{
            animate: {
              rotate: 360,
              transition: {
                duration: 20,
                ease: 'linear',
                repeat: Infinity,
              },
            },
          }}
        >
          <Figure
            alt="Another line cube"
            aria-hidden="true"
            borderRadius={false}
            inViewOffset={-1}
            placeholder={false}
            sizes="33vw"
            {...cubeImage}
          />
        </m.div>
      </div>
      <div className="grid -gap:0">
        <m.div
          animate="animate"
          className="Template-profileCol grid-col grid-col:8 grid-col:4@s"
          initial={transition === 'template' && 'initial'}
          variants={JUMP_FIX_VARIANTS}
        >
          <Figure
            alt="Joonas Sandell"
            className="Template-profile"
            inViewOffset={-1}
            mask
            scrollPrevent
            sizes={`${MQ.s} 25vw, 70vw`}
            {...profileImage2}
          />
        </m.div>
        <div className="grid-col grid-col:7@s -start:6@s grid-col:6@m grid-col:5@l -start:6@l">
          <Text animate className="mb:m">
            <p>
              I’m Joonas — Front-end developer, UI/UX designer and sometimes
              even a{' '}
              <Link href={getLink('soundcloud').url}>music producer</Link>. I
              have a strong visual taste, broad understanding of front-end web
              technologies and a genuine passion for all aspects of product and
              visual design, including web services, touch platforms and
              branding.
            </p>
          </Text>
          <Text animate className="mb:m">
            <p>
              I love designing by code in the browser but I work a lot with
              Figma and other design tools as well. Usually I prefer writing
              applications with <em>TypeScript</em>, <em>React</em>,{' '}
              <em>Sass</em> and other modern tools.
            </p>
          </Text>
          <Text animate className="mb:l">
            <p>
              With a background that spans both UI design and coding, I thrive
              at the intersection of aesthetics and functionality, blending the
              best of both worlds to deliver great user experiences.
            </p>
          </Text>
        </div>
      </div>
    </div>
  );
};
