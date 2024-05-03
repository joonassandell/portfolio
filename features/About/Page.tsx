import { m } from 'framer-motion';
import { Template, TemplateMain } from '@/components/Template';
import { SCROLL_SPEED, MQ, JUMP_FIX_VARIANTS } from '@/lib/config';
import { getLink } from '@/lib/utility';
import { Head } from '@/components/Head';
import { Heading } from '@/components/Heading';
import { Text } from '@/components/Text';
import { LinkRoll } from '@/components/LinkRoll';
import { Link } from '@/components/Link';
import { TextReveal } from '@/components/TextReveal';
import { Figure } from '@/components/Figure';
import { Hr } from '@/components/Hr';
import { useMedia } from 'react-use';
import { useRef } from 'react';
import { useInView } from '@/lib/useInView';
import { useAppContext } from '@/components/App';
import profileImage from '@/public/about/joonassandell-profile.jpg';
import profileImage2 from '@/public/about/joonassandell-profile-2.jpg';
import cubeImage from '@/public/about/line-cube.png';
import ballImage from '@/public/about/line-ball.png';
import { type PageProps } from '@/types';

export const AboutPage = ({ id, title }: PageProps) => {
  const mqS = useMedia(MQ.s, false);
  const cubeImageAnim = useRef(null);
  const cubeImageInView = useInView(cubeImageAnim, 0, false);
  const { appState } = useAppContext();
  const { transition } = appState;
  const templateTransition = transition === 'template';
  const subHeadingMobile = [
    "I'm creative developer ",
    'and designer based in ',
    'Helsinki, Finland. ',
    'Currently working for ',
    <>
      <LinkRoll href="https://biocode.io" underline>
        Biocode
      </LinkRoll>
      .
    </>,
  ];
  const subHeadingDesktop = [
    "I'm creative developer and designer",
    'based in Helsinki, Finland.',
    <>
      Currently working for{' '}
      <LinkRoll href="https://biocode.io" underline>
        Biocode
      </LinkRoll>
      .
    </>,
  ];

  return (
    <Template id={id}>
      <Head
        title={title}
        description="I'm creative developer and designer based in Helsinki, Finland."
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
            tag="h1"
          >
            <TextReveal text={['Hello. ✳︎ Moro ✳︎ Hi. ✳︎ Wassup.']} />
          </Heading>
        </div>
        <div className="Template-figure wrap@ grid">
          <div className="grid-col grid-col:7 -start:6 grid-col:6@m -start:7@m">
            <Figure
              alt="Joonas Sandell"
              borderRadius={false}
              mask
              priority
              scrollPosition="top"
              scrollImageSpeed={-4}
              sizes="50vw"
              transition="clip"
              {...profileImage}
            />
            <Figure
              aria-hidden="true"
              borderRadius={false}
              className="Template-cube"
              alt="Line cube"
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
        <div id="about" className="Template-about wrap grid pt:15vw">
          <div className="grid-col -start:3@m -start:5@l pb:5vw">
            <Heading
              size="h4"
              {...(mqS && {
                'data-s': true,
                'data-s-speed': SCROLL_SPEED,
                'data-s-position': 'top',
              })}
            >
              <TextReveal text={mqS ? subHeadingDesktop : subHeadingMobile} />
            </Heading>
            <div
              data-s
              data-s-speed={SCROLL_SPEED * -2}
              data-s-position="top"
              className="Template-cube-2"
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
                  sizes={`${MQ.m} 30vw, 40vw`}
                  placeholder={false}
                  {...cubeImage}
                />
              </m.div>
            </div>
          </div>
          <m.div
            animate="animate"
            className="Template-profileCol grid-col grid-col:8 grid-col:4@s"
            initial={templateTransition && 'initial'}
            variants={JUMP_FIX_VARIANTS}
          >
            <Figure
              alt="Joonas Sandell"
              className="Template-profile"
              borderRadius={false}
              mask
              scrollSpeed={-0.5}
              scrollPrevent
              sizes={`${MQ.s} 25vw, 70vw`}
              {...profileImage2}
            />
          </m.div>
          <div className="grid-col grid-col:7@s -start:6@s grid-col:6@m grid-col:5@l -start:7@l">
            <Text animate className="mb:m">
              <p>
                I’m Joonas — Front-end developer, art director and sometimes
                even a music producer. I have a strong passion for all aspects
                of product and visual design, including web and mobile services,
                branding and software development. I love designing in the
                browser but I work a lot with Figma and other design tools as
                well.
              </p>
            </Text>
            <Text animate className="mb:m">
              <p>
                With more than a decade of experience in the design and software
                industry, I have the skills to assist clients in addressing
                practical business challenges.
              </p>
            </Text>
            <Text animate className="mb:l">
              <p>
                In my spare time I like to hang out with my family,{' '}
                <Link href={getLink('soundcloud').url} underline>
                  create music
                </Link>
                , follow eSports, play games and bicycle.
              </p>
            </Text>
          </div>
        </div>
        <div id="skills" className="Template-skills">
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
        <div id="clients" className="Template-clients wrap grid pt:10vw">
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
              Vapriikki,
              YIT
            </Text>
          </div>
        </div>
        <div id="follow" className="wrap grid -gap:l pt:10vw">
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