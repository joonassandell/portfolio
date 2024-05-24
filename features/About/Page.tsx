import { Figure } from '@/components/Figure';
import { getLink } from '@/lib/utils';
import { Head } from '@/components/Head';
import { Heading } from '@/components/Heading';
import { Hr } from '@/components/Hr';
import { JUMP_FIX_VARIANTS, MQ, SCROLL_SPEED } from '@/lib/config';
import { Link } from '@/components/Link';
import { LinkRoll } from '@/components/LinkRoll';
import { m } from 'framer-motion';
import { type PageProps } from '@/types';
import { Template, TemplateMain } from '@/components/Template';
import { Text } from '@/components/Text';
import { TextReveal } from '@/components/TextReveal';
import { useApp, useSetThemeColor } from '@/components/App';
import { useInView } from '@/lib/useInView';
import { useMedia } from 'react-use';
import { useRef } from 'react';
import ballImage from '@/public/about/line-ball.png';
import cubeImage from '@/public/about/line-cube.png';
import profileImage from '@/public/about/joonassandell-profile.png';
import profileImage2 from '@/public/about/joonassandell-profile-2.jpg';

export const AboutPage = ({ id, themeColor, title }: PageProps) => {
  useSetThemeColor(themeColor);
  const mqS = useMedia(MQ.s, false);
  const cubeImageAnim = useRef(null);
  const cubeImageInView = useInView(cubeImageAnim, 0, false);
  const { transition } = useApp();
  const templateTransition = transition === 'template';

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
      <>
        With more than a decade of{' '}
        <Link href="/milestones">design engineering</Link>{' '}
      </>,
      <>
        <Link href="/milestones">experience</Link>, I have the skills to build
        hiqh-quality{' '}
      </>,
      'web experiences and assist clients in addressing ',
      'practical business challenges.',
    ],
    mobile: [
      <>
        With more than a decade of <Link href="/milestones">design</Link>{' '}
      </>,
      <>
        <Link href="/milestones">engineering experience</Link>, I have the{' '}
      </>,
      'skills to build hiqh-quality web ',
      'web experiences and assist ',
      'clients in addressing practical ',
      'business challenges.',
    ],
  };

  return (
    <Template id={id}>
      <Head
        description="I'm creative developer and designer based in Helsinki, Finland."
        title={title}
      />
      <TemplateMain>
        <div className="Template-heading wrap pr:0">
          <Heading
            className="white-space:nowrap mb:0"
            data-s
            data-s-direction="horizontal"
            data-s-position="left"
            data-s-speed={SCROLL_SPEED}
            size="display"
            tag="div"
          >
            <TextReveal text={["Hello. ✳︎ Moro. ✳︎ Hi. ✳︎ What's up?"]} />
          </Heading>
        </div>
        <div className="Template-figure grid">
          <div className="grid-col grid-col:7 -start:6 grid-col:6@m -start:7@m">
            <Figure
              alt="Joonas Sandell"
              borderRadius={false}
              mask
              priority
              quality={90}
              scrollImageSpeed={-4}
              scrollPosition="top"
              sizes="50vw"
              transition="clip"
              {...profileImage}
            />
            <Figure
              alt="Line cube"
              aria-hidden="true"
              borderRadius={false}
              className="Template-cube"
              placeholder={false}
              priority
              scroll
              scrollPosition="top"
              scrollSpeed={3}
              sizes={`${MQ.m} 30vw, 40vw`}
              {...cubeImage}
            />
          </div>
        </div>
        <div className="Template-about wrap pt:15vw" id="about">
          <div
            className="grid pb:5vw"
            {...(mqS && {
              'data-s': true,
              'data-s-position': 'top',
              'data-s-speed': SCROLL_SPEED,
            })}
          >
            <div className="grid-col -start:3@m -start:3@l pb:5vw">
              <Heading className="mb:l" size="h3" tag="h1">
                <TextReveal text={mqS ? heading.desktop : heading.mobile} />
              </Heading>
              <Text className="mb:0" size="xl" tag="p">
                <TextReveal
                  custom={{ delay: mqS ? 0.5 : 1 }}
                  text={mqS ? lead.desktop : lead.mobile}
                />
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
                sizes={`${MQ.m} 30vw, 40vw`}
                {...cubeImage}
              />
            </m.div>
          </div>
          <div className="grid">
            <m.div
              animate="animate"
              className="Template-profileCol grid-col grid-col:8 grid-col:4@s"
              initial={templateTransition && 'initial'}
              variants={JUMP_FIX_VARIANTS}
            >
              <Figure
                alt="Joonas Sandell"
                className="Template-profile"
                mask
                scrollPrevent
                scrollSpeed={-0.5}
                sizes={`${MQ.s} 25vw, 70vw`}
                {...profileImage2}
              />
            </m.div>
            <div className="grid-col grid-col:7@s -start:6@s grid-col:6@m grid-col:5@l -start:6@l">
              <Text animate className="mb:m">
                <p>
                  I’m Joonas — Front-end developer, UI/UX designer and sometimes
                  even a{' '}
                  <Link href={getLink('soundcloud').url}>music producer</Link>.
                  I have a strong visual taste, broad understanding of front-end
                  web technologies and a genuine passion for all aspects of
                  product and visual design, including web services, touch
                  platforms and branding.
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
                  With a background that spans both UI design and coding, I
                  thrive at the intersection of aesthetics and functionality,
                  blending the best of both worlds to deliver great user
                  experiences.
                </p>
              </Text>
            </div>
          </div>
        </div>
        <div className="Template-skills" id="skills">
          <div className="wrap">
            <Text animate className="mb:xl pt:15vw">
              Wow, such services and skills 🤹‍♂️
            </Text>
          </div>
          <Heading
            className="white-space:nowrap"
            data-s
            data-s-direction="horizontal"
            data-s-position="left"
            data-s-speed={SCROLL_SPEED * 4}
            size="h2"
            tag="div"
          >
            <TextReveal
              text={[
                'Art direction — Product design — Visual design — Web & mobile design — Interaction design — Animation — Art direction',
              ]}
            />
          </Heading>
          <Heading
            className="white-space:nowrap flex justify-content:end"
            data-s
            data-s-direction="horizontal"
            data-s-position="left"
            data-s-speed={SCROLL_SPEED * -4}
            size="h2"
            tag="div"
          >
            <TextReveal
              text={[
                'HTML — MobX — Next.js — JavaScript — GSAP — TypeScript — React — Node.js — Framer motion — SASS — Redux',
              ]}
            />
          </Heading>
          <Heading
            className="white-space:nowrap"
            data-s
            data-s-direction="horizontal"
            data-s-position="left"
            data-s-speed={SCROLL_SPEED * 2}
            size="h2"
            tag="div"
          >
            <TextReveal
              text={[
                'TYPO3 — WordPress — PHP — MongoDB — Firebase — MySQL — AWS — Apache — Unix',
              ]}
            />
          </Heading>
          <Heading
            className="white-space:nowrap flex justify-content:end"
            data-s
            data-s-direction="horizontal"
            data-s-position="left"
            data-s-speed={SCROLL_SPEED * -2}
            size="h2"
            tag="div"
          >
            <TextReveal
              text={[
                'Design systems — Photoshop — Illustrator — Rive — Figma — Sketch — Indesign — Design systems',
              ]}
            />
          </Heading>
        </div>
        <div className="Template-clients wrap grid pt:10vw" id="clients">
          <Figure
            alt="Line ball"
            aria-hidden="true"
            borderRadius={false}
            className="Template-ball"
            placeholder={false}
            scroll
            scrollSpeed={-3}
            sizes={`${MQ.m} 30vw, 40vw`}
            {...ballImage}
          />
          <div className="grid-col grid-col:6@s -start:6@s -start:7@m">
            <Hr className="mb:l" />
            <Heading className="mm" size="h4">
              <TextReveal text={['Clients']} />
            </Heading>
          </div>
          <div className="grid-col grid-col:6@s -start:6@s -start:7@m">
            {/* prettier-ignore */}
            <Text animate className="mb">
              Anton&Anton,
              Avecra,
              Biocode,
              Bonnier Books (Academic bookstore),
              Caverion,
              City of Tampere,
              Coxa,
              Dahl,
              Ekovilla,
              Enervent,
              Fair trade,
              Finefoods,
              Finnpark,
              Hailia,
              Hankkija,
              Hansa,
              Himos Festivals,
              HK Scan,
              Holiday Club,
              Hotelzon,
              Huhtahyvät,
              HW-Company,
              Jatke,
              Jollas,
              Katepal,
              Kesla,
              Luke,
              Mediasignal,
              NCC,
              Omoroi,
              Oras,
              Paunu,
              SEY,
              SOS-Lapsikylä,
              TAKK,
              Ursa,
              Valio,
              Vapriikki,
              Vöner,
              YIT
            </Text>
          </div>
        </div>
        <div className="wrap grid -gap:l pt:10vw" id="follow">
          <div className="grid-col grid-col:1@m">
            <Heading aria-hidden="true" size="display" tag="div">
              <TextReveal text={['↳']} />
            </Heading>
          </div>
          <div className="grid-col grid-col:4@m -align:center -en">
            <Text animate className="mb:m" size="l">
              Visit my social profiles found from the footer and follow if you
              like 🤙
            </Text>
          </div>
        </div>
      </TemplateMain>
    </Template>
  );
};
