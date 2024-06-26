import { ArrowRight } from '@/components/Icon';
import { Button } from '@/components/Button';
import { Figure } from '@/components/Figure';
import { getLink, getSitemap } from '@/lib/utils';
import { Heading } from '@/components/Heading';
import { Link } from '@/components/Link';
import { m } from 'framer-motion';
import { MQ, SCROLL_SPEED } from '@/lib/config';
import { TemplateSection } from '@/components/Template';
import { Text } from '@/components/Text';
import { TextReveal } from '@/components/TextReveal';
import { useInView } from '@/lib/useInView';
import { useMedia } from 'react-use';
import { useRef } from 'react';
import lineCube from '@/public/images/line-cube.png';
import profile from '@/public/images/joonassandell-profile-2.jpg';

export const AboutIntro = () => {
  const mqS = useMedia(MQ.s, true);
  const lineCubeAnim = useRef(null);
  const lineCubeInView = useInView(lineCubeAnim, 0, false);

  const heading = {
    desktop: [
      "I'm a creative developer and designer ",
      'with a keen eye for good design ',
      'and attention to detail',
    ],
    mobile: [
      "I'm a creative developer ",
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
        <Link href={getSitemap('resume', 'common').url}>experience</Link>, I
        have the skills to build hiqh-quality{' '}
      </>,
      'web experiences and assist clients in addressing ',
      'practical business challenges.',
    ],
    mobile: [
      'With more than a decade of design ',
      <>
        engineering{' '}
        <Link href={getSitemap('resume', 'common').url}>experience</Link>, I
        have the{' '}
      </>,
      'skills to build hiqh-quality web ',
      'web experiences and assist ',
      'clients in addressing practical ',
      'business challenges.',
    ],
  };

  return (
    <TemplateSection
      className="Template-intro"
      grid={false}
      id="intro"
      pt="15vw"
    >
      <div
        className="grid pb:5vw"
        {...(mqS && {
          'data-s': true,
          'data-s-position': 'top',
          'data-s-speed': SCROLL_SPEED,
        })}
      >
        <div className="grid-col -start:2@m -start:3@l">
          <Heading className="mb:m" size="h3" tag="h1">
            <TextReveal text={mqS ? heading.desktop : heading.mobile} />
          </Heading>
          <Text className="mb:l" size="xl">
            <p>
              <TextReveal text={mqS ? lead.desktop : lead.mobile} />
            </p>
          </Text>
          <Text animate className="mb:m">
            <Button
              href={getSitemap('resume', 'common').url}
              icon={<ArrowRight />}
            >
              View resume
            </Button>
          </Text>
        </div>
      </div>
      <div
        aria-hidden
        className="Template-cube-2"
        data-s
        data-s-position="top"
        data-s-speed={SCROLL_SPEED * -2}
      >
        <m.div
          animate={lineCubeInView ? 'animate' : ''}
          ref={lineCubeAnim}
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
            borderRadius={false}
            inViewOffset={-1}
            placeholder={false}
            priority
            sizes="33vw"
            {...lineCube}
          />
        </m.div>
      </div>
      <div className="grid -gap:0">
        <div className="Template-profileCol grid-col grid-col:8 grid-col:4@s">
          <Figure
            alt="Joonas Sandell profile picture"
            borderRadius="var(--border-radius-pill)"
            className="Template-profile"
            inViewOffset={-1}
            scroll="mask"
            sizes={`${MQ.s} 25vw, 70vw`}
            {...profile}
          />
        </div>
        <div className="grid-col grid-col:7@s -start:6@s grid-col:6@m grid-col:5@l -start:6@l">
          <Text animate className="mb:m">
            <p>
              I’m Joonas — UI/UX designer, front-end developer and sometimes
              even a{' '}
              <Link href={getLink('soundcloud').url}>music producer</Link>. I
              have a strong and great visual taste, broad understanding of
              front-end web technologies and a genuine passion for all aspects
              of product and visual design, including web services, touch
              platforms and branding.
            </p>
          </Text>
          <Text animate className="mb:m">
            <p>
              I get excited about finding unique and elegant solutions for
              complex user issues. I love designing by code in the browser but I
              work a lot with <em>Figma</em> and other design tools as well.
              Usually I prefer writing applications with <em>TypeScript</em>,{' '}
              <em>React</em>, <em>Sass</em> and other modern tools.
            </p>
          </Text>
          <Text animate className="mb:m">
            <p>
              With a background that spans both UI design and coding, I thrive
              at the intersection of aesthetics and functionality, blending the
              best of both worlds to deliver great user experiences.
            </p>
          </Text>
          <Text animate className="mb:l">
            <Button href="/approach" icon={<ArrowRight />}>
              My approach
            </Button>
          </Text>
        </div>
      </div>
    </TemplateSection>
  );
};
