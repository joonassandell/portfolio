import { Template, TemplateMain } from '@/components/Template';
import { SCROLL_SPEED, MQ } from '@/lib/config';
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
import profileImage from '@/public/about/joonassandell-profile.jpg';
import profileImage2 from '@/public/about/joonassandell-profile-2.jpg';
import cubeImage from '@/public/about/line-cube.png';

export const AboutPage = ({ id, title }) => {
  const mqS = useMedia(MQ.s, false);

  const subHeadingMobile = [
    "I'm creative developer",
    'and designer based in',
    'Helsinki, Finland.',
    'Currently working for',
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
      <Head title={title} />
      <TemplateMain>
        <div className="Template-heading wrap pr:0">
          <Heading
            className="white-space:nowrap mb:0"
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-position="left"
            data-scroll-speed={SCROLL_SPEED}
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
              className="Template-figure-cube"
              alt="Line cube"
              priority
              scroll
              scrollPosition="top"
              scrollSpeed={-3}
              sizes={`${MQ.m} 30vw, 40vw`}
              {...cubeImage}
            />
          </div>
        </div>
        <div id="about" className="Template-mainContent wrap grid pt:10vw">
          <div className="grid-col -start:3@m -start:5@l pb:5vw">
            <Heading
              className="Template-subHeading"
              size="h4"
              {...(mqS && {
                'data-scroll': true,
                'data-scroll-speed': SCROLL_SPEED,
              })}
            >
              <TextReveal text={mqS ? subHeadingDesktop : subHeadingMobile} />
            </Heading>
          </div>
          <div className="Template-figureCol grid-col grid-col:8 grid-col:3@s">
            <Figure
              alt="Joonas Sandell"
              borderRadius="var(--border-radius-pill)"
              mask
              priority
              sizes={`${MQ.m} 25vw, 70vw`}
              transition="clip"
              {...profileImage2}
            />
          </div>
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
                , follow eSports, play games (mainly DayZ) and bicycle.
              </p>
            </Text>
          </div>
        </div>
        <div id="skills">
          <div className="wrap">
            <Text animate className="mb:xl pt:10vw">
              Wow, such services and skills 🤹‍♂️
            </Text>
          </div>
          <Heading
            className="white-space:nowrap"
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-position="left"
            data-scroll-speed={SCROLL_SPEED * 4}
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
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-position="left"
            data-scroll-speed={SCROLL_SPEED * -4}
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
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-position="left"
            data-scroll-speed={SCROLL_SPEED * 2}
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
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-position="left"
            data-scroll-speed={SCROLL_SPEED * -2}
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
        <div id="clients" className="wrap grid pt:10vw">
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
              Evervent,
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
            <Text animate className="mb:m" size="large">
              Visit my social profiles found from the footer and follow if you
              like, thanks!
            </Text>
          </div>
        </div>
      </TemplateMain>
    </Template>
  );
};
