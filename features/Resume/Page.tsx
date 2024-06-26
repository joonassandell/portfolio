import { Button } from '@/components/Button';
import { Check, Download } from '@/components/Icon';
import { Figure } from '@/components/Figure';
import { getLink, getSitemap, stripUrl } from '@/lib/utils';
import { Head } from '@/components/Head';
import { Heading } from '@/components/Heading';
import { Link } from '@/components/Link';
import { type PageProps } from '@/types';
import { Stepper, StepperItem, StepperStep } from '@/components/Stepper';
import { Template, TemplateMain, TemplateSection } from '@/components/Template';
import { Text } from '@/components/Text';
import { useSetThemeColor } from '@/components/App';
import biocodeLogomark from '@/public/biocode/hero/joonassandell-biocode-logomark.png';
import Image from 'next/image';
import mediasignalLogomark from '@/public/mediasignal/joonassandell-mediasignal-logomark.png';
import profile from '@/public/images/joonassandell-profile-2.jpg';

export const ResumePage = ({ id, themeColor, title }: PageProps) => {
  useSetThemeColor(themeColor);

  return (
    <Template footerProps={{ fullWidth: true }} id={id} variant="unstyled">
      <Head title={title} />
      <TemplateMain>
        <TemplateSection gridGap="m" gridRowGap="m" pt={false}>
          <div className="Template-content grid-col grid-col:11@s grid-col:9@m">
            <Figure
              alt="Joonas Sandell profile picture"
              animate={false}
              borderRadius="var(--border-radius-pill)"
              className="Template-profileMobile mb:m hidden@m"
              priority
              sizes="33vw"
              {...profile}
            />
            <Heading className="mb" size="h2" tag="h1">
              Joonas Sandell
              <Text color="mute" size="m">
                Curriculum vitae
              </Text>
            </Heading>
            <Text className="mb:m" size="l">
              <p className="hidden@m">
                A designer and creative developer with a keen eye for good
                design. With more than a decade of design engineering
                experience, I have the skills to build hiqh-quality web
                experiences.
              </p>
              <p className="visible@m text-wrap:balance@s">
                UI/UX designer and creative front-end developer with a keen eye
                for good design and attention to detail. With more than a decade
                of design engineering experience, I have the skills to build
                hiqh-quality web experiences and assist clients in addressing
                practical business challenges.
              </p>
            </Text>
            <Button
              className="mb:xl"
              href="/Joonas-Sandell-CV.pdf"
              icon={<Download />}
              target="_blank"
              variant="negative"
            >
              Download resume
            </Button>
            <Heading className="mb:m" size="h4" tag="h2">
              Experience
            </Heading>
            <Stepper className="Template-stepper mb:xl">
              <StepperItem>
                <StepperStep beacon />
                <Heading className="mb:2xs" size="h6" tag="h3">
                  Lead product designer, Front-end developer —{' '}
                  <Image
                    alt="Biocode logomark"
                    className="Template-stepper-image"
                    draggable="false"
                    sizes="3rem"
                    src={biocodeLogomark}
                  />
                  <Link href={getSitemap('biocode').url} underline={false}>
                    Biocode
                  </Link>
                </Heading>
                <Text className="mb" color="mute" tag="p">
                  Nov 2020 — Present
                </Text>
                <Text>
                  <ul className="pl">
                    <li>
                      Built the{' '}
                      <Link href={getSitemap('biocode').url}>application</Link>{' '}
                      front-end together with the team including various
                      features such as real time carbon footprint calculation
                    </li>
                    <li>
                      Designed the application and its features including
                      prototypes and user flows with focus on detailed UX/UI,
                      accessibility and ease-of-use
                    </li>
                    <li>
                      Played an active role in enhancing overall direction of
                      the product and suggesting user-centric features based on
                      analytics
                    </li>
                    <li>
                      Developed and built{' '}
                      <Link href={getSitemap('biocode').url}>Biocode</Link>’s
                      end-to-end <Link href="https://biocode.io">website</Link>{' '}
                      including dark/light modes, CMS and <em>Hubspot</em>{' '}
                      integration among many other features
                    </li>
                    <li>
                      Designed, developed and authored{' '}
                      <em>
                        <Link href="https://github.com/joonassandell/bds">
                          Biocode Design System
                        </Link>{' '}
                      </em>
                      including brand assets such as logomarks, icons and
                      product packaging stamps
                    </li>
                    <li>
                      Designed and built headless{' '}
                      <em>
                        <Link href="https://report.biocode.io">
                          Biocode for reporting
                        </Link>
                      </em>{' '}
                      Next.js web service to market the impact of Biocode for
                      the public audience
                    </li>
                    <li>
                      Contributed and planned interviews with the marketing team
                      for users in order to improve the UX and UI of the
                      application
                    </li>
                    <li>
                      Aided other engineers to ensure quality UI/UX and
                      implementation
                    </li>
                  </ul>
                </Text>
              </StepperItem>
              <StepperItem>
                <StepperStep icon={<Check />} />
                <Heading className="mb:2xs" size="h6" tag="h3">
                  UI/UX designer, Front-end developer —{' '}
                  <Image
                    alt="Mediasignal logomark"
                    className="Template-stepper-image"
                    draggable="false"
                    sizes="3rem"
                    src={mediasignalLogomark}
                  />
                  <Link href={getSitemap('mediasignal').url} underline={false}>
                    Mediasignal
                  </Link>
                </Heading>
                <Text className="mb" color="mute" tag="p">
                  Sep 2014 — Nov 2020
                </Text>
                <Text>
                  <ul className="pl">
                    <li>
                      Developed and designed applications for clients such as{' '}
                      <em>
                        <Link
                          href={`${getSitemap('more-work').url}/#academic-bookstore`}
                        >
                          Bonnier Books
                        </Link>
                      </em>
                      , <em>Finefoods</em>,{' '}
                      <em>
                        <Link href={`${getSitemap('more-work').url}/#hukka`}>
                          Luke
                        </Link>
                      </em>
                      , <em>Kesla</em>, <em>Dahl</em> and{' '}
                      <em>
                        <Link href={`${getSitemap('more-work').url}/#finnpark`}>
                          Finnpark
                        </Link>
                      </em>
                    </li>
                    <li>
                      Developed and designed websites, e-commerce stores and web
                      services for clients such as{' '}
                      <em>
                        <Link
                          href={`${getSitemap('more-work').url}/#academic-bookstore`}
                        >
                          Academic Bookstore
                        </Link>
                      </em>
                      ,{' '}
                      <em>
                        <Link href={getSitemap('oras').url}>Oras</Link>
                      </em>
                      , <em>Fair trade</em>, <em>Kia</em>, <em>Caverion</em>,{' '}
                      <em>
                        <Link href={`${getSitemap('more-work').url}/#takk`}>
                          TAKK
                        </Link>
                      </em>{' '}
                      and{' '}
                      <em>
                        <Link href={`${getSitemap('more-work').url}/#hankkija`}>
                          Hankkija
                        </Link>
                      </em>
                    </li>
                    <li>
                      Arranged workshops and planned UX interviews to get
                      valuable feedback from clients and end-users to build
                      successful products
                    </li>
                    <li>
                      Refreshed{' '}
                      <Link href={getSitemap('mediasignal').url}>
                        Mediasignal’s brand twice
                      </Link>{' '}
                      including logomark design, brand book crafting, business
                      card design and website renewal
                    </li>
                    <li>
                      Designed and built internal products such as{' '}
                      <em>
                        <Link href={`${getSitemap('more-work').url}/#rubik`}>
                          Rubik
                        </Link>
                      </em>{' '}
                      (PIM), <em>Avainia</em> and <em>ImageBank</em> that were
                      sold to variety of customers
                    </li>
                    <li>
                      Crafted and documented internal tools to quickly
                      kick-start projects
                    </li>
                    <li>
                      Managed to acquire new clients based on past experience,
                      outside connections and word-to-mouth reputation
                    </li>
                    <li>
                      Led and aided groups of developers and communicated with
                      the customers about project progress’
                    </li>
                  </ul>
                </Text>
              </StepperItem>
              <StepperItem>
                <StepperStep icon={<Check />} />
                <Heading className="mb:2xs" size="h6" tag="h3">
                  UI/UX designer, Front-end developer — City of Tampere
                </Heading>
                <Text className="mb" color="mute" tag="p">
                  Apr 2007 — Sep 2014
                </Text>
                <Text>
                  <ul className="pl">
                    <li>
                      Built and curated valuable <em>Exhibition Guide</em>{' '}
                      mobile app to help visitors gain an enjoyable and
                      insightful museum experiences
                    </li>
                    <li>
                      Built <em>Museum Guide</em> screen which featured maps,
                      restaurant menus and other museum information integrated
                      to the website CMS
                    </li>
                    <li>
                      Built <em>Twitter Social Wall</em> screen to engage museum
                      visitors sharing their museum experiences
                    </li>
                    <li>
                      Developed and designed websites and posters for{' '}
                      <em>Museum Centre Vapriikki</em>, <em>Moominvalley</em>,{' '}
                      <em>Tampere Music Festivals</em> and other city sectors
                    </li>
                  </ul>
                </Text>
              </StepperItem>
            </Stepper>
            <Heading size="h4" tag="h2">
              About me 👋
            </Heading>
            <Text>
              <div className="grid">
                <p className="grid-col grid-col:9@s">
                  I’m Joonas — UI/UX designer, front-end developer and sometimes
                  even a{' '}
                  <Link href={getLink('soundcloud').url}>music producer</Link>.
                  I enjoy connecting with new people online and dedicating some
                  of my free time to various projects.{' '}
                  <Link href={getSitemap('contact', 'common').url}>
                    Contact me
                  </Link>{' '}
                  or learn more about me from below.
                </p>
              </div>
              <p className="flex flex-wrap:wrap gap:s">
                <Button href={getSitemap('about', 'common').url} size="s">
                  {getSitemap('about', 'common').navTitle}
                </Button>
                <Button href={getSitemap('milestones', 'common').url} size="s">
                  {getSitemap('milestones', 'common').navTitle}
                </Button>
                <Button href={getSitemap('approach', 'common').url} size="s">
                  {getSitemap('approach', 'common').navTitle}
                </Button>
              </p>
            </Text>
          </div>
          <aside className="Template-aside grid-col grid-col:3@m">
            <Figure
              alt="Joonas Sandell profile picture"
              animate={false}
              borderRadius="var(--border-radius-pill)"
              className="Template-profile mb:l visible@m"
              priority
              sizes="20vw"
              {...profile}
            />
            <Heading className="hidden@m" size="h6" tag="h4">
              Contact
            </Heading>
            <Text className="mb:m" size="s" tag="ul">
              <li>
                <Link
                  href="mailto:me@joonassandell.com"
                  target="_self"
                  truncate
                >
                  me@joonassandell.com
                </Link>
              </li>
              <li>Helsinki, Finland</li>
              <li>
                <Link href={getSitemap('contact', 'common').url} truncate>
                  {getSitemap('contact', 'common').navTitle} me
                </Link>
              </li>
            </Text>
            <Text className="mb:l visible@m" size="s" tag="ul">
              <li>
                <Link href={getLink('linkedin').url} truncate>
                  {stripUrl(getLink('linkedin').url)}
                </Link>
              </li>
              <li>
                <Link href={getLink('github').url} truncate>
                  {stripUrl(getLink('github').url)}
                </Link>
              </li>
              <li>
                <Link href={getLink('dribbble').url} truncate>
                  {stripUrl(getLink('dribbble').url)}
                </Link>
              </li>
              <li>
                <Link href={getLink('twitter').url} truncate>
                  {stripUrl(getLink('twitter').url)}
                </Link>
              </li>
            </Text>
            <Heading size="h6" tag="h4">
              Skills
            </Heading>
            <Text className="mb:m" size="s">
              <Text className="mb:2xs" color="mute" tag="p">
                Languages
              </Text>
              <p>
                TypeScript, JavaScript, Node.js, CSS, Sass, HTML, PHP, Bash,
                English (fluent), Finnish (native)
              </p>
            </Text>
            <Text className="mb:m" size="s">
              <Text className="mb:2xs" color="mute" tag="p">
                Essential tech
              </Text>
              <p>
                React, Next.js, Bundlers, Git, Databases, GraphQL, Storybook,
                WordPress, Firebase, AWS, Apache, Unix, GSAP, Framer motion,
                ChatGPT, Redux, Zustand
              </p>
            </Text>
            <Text className="mb:m" size="s">
              <Text className="mb:2xs" color="mute" tag="p">
                Design tools
              </Text>
              <p>Figma, Sketch, Adobe CC</p>
            </Text>
            <Text size="s">
              <Text className="mb:2xs" color="mute" tag="p">
                Competencies
              </Text>
              <p>
                UI/UX design, Product design, Website design & development,
                Application design & development, Responsive design, Design
                systems & patterns, Animations
              </p>
            </Text>
          </aside>
        </TemplateSection>
      </TemplateMain>
    </Template>
  );
};
