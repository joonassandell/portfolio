import { ArrowRight, Check, Download } from '@/components/Icon';
import { Button } from '@/components/Button';
import { Figure } from '@/components/Figure';
import { Heading } from '@/components/Heading';
import { Link } from '@/components/Link';
import { SITEMAP } from '@/lib/sitemap';
import { Stepper, StepperItem, StepperStep } from '@/components/Stepper';
import { Text } from '@/components/Text';
import biocodeLogomark from '@/public/biocode/hero/joonassandell-biocode-logomark.png';
import mediasignalLogomark from '@/public/mediasignal/joonassandell-mediasignal-logomark.png';
import profile from '@/public/images/joonassandell-2.jpg';

export const ResumeContent = () => (
  <div className="Template-content grid-col grid-col:11@s grid-col:9@m">
    <Figure
      alt="Joonas Sandell profile picture"
      animate={false}
      borderRadius="var(--border-radius-full)"
      className="Template-profileMobile mb:m hidden@m"
      priority
      sizes="25vw"
      {...profile}
    />
    <Heading className="mb:2xs" size="h2" tag="h1">
      Joonas Sandell
    </Heading>
    <Text color="mute" tag="p">
      UI/UX Designer, Front-end Developer ✳︎ CV
    </Text>
    <Text className="mb:m" size="l">
      <p className="hidden@s">
        A designer and creative developer with a keen eye for good design. With
        more than 15 years of design engineering experience, I have the skills
        to build high-quality websites and products.
      </p>
      <p className="visible@s">
        A designer and creative developer with a keen eye for good design and
        attention to detail. With more than 15 years of design engineering
        experience, I have the skills to build high-quality websites and
        products and assist clients in addressing practical business challenges.
      </p>
    </Text>
    <Button
      className="mb:xl"
      href="/cv"
      icon={<Download />}
      target="_blank"
      variant="dark"
    >
      Download CV
    </Button>
    <Heading className="mb:m" size="h4" tag="h2">
      Experience
    </Heading>
    <Stepper className="Template-stepper mb:xl">
      <StepperItem>
        <StepperStep beacon />
        <Heading className="mb:2xs" size="h6" tag="h3">
          Lead Product Designer, Front-end Developer —{' '}
          <Figure
            alt="Biocode logomark"
            animate={false}
            borderRadius="var(--border-radius-full)"
            className="Template-stepper-image"
            inline
            sizes="3rem"
            {...biocodeLogomark}
          />{' '}
          <Link href={SITEMAP.biocode.url} underline={false}>
            Biocode
          </Link>
        </Heading>
        <Text color="mute" tag="p">
          Nov 2020 – Now
        </Text>
        <Text>
          <ul className="pl">
            <li>
              Played an active role in enhancing overall direction of the
              product
            </li>
            <li>
              Designed the application and its features including prototypes and
              user flows with focus on detailed UX/UI, accessibility and
              ease-of-use
            </li>
            <li>
              Conducted user research and usability testing to validate designs
              and make data-driven decisions
            </li>
            <li>
              Built and maintained{' '}
              <em>
                <Link href={`${SITEMAP.biocode.url}/#design-system`}>
                  Biocode Design System
                </Link>{' '}
              </em>
              including brand assets such as logomarks and icons to ensure
              consistency across products
            </li>
            <li>
              Built the{' '}
              <Link href={`${SITEMAP.biocode.url}/#software`}>software</Link>{' '}
              front-end together with the team including various features such
              as real time carbon footprint calculation
            </li>
            <li>
              Developed and designed{' '}
              <Link href={SITEMAP.biocode.url}>Biocode</Link>’s end-to-end{' '}
              <Link href="https://biocode.io">website</Link> including features
              such as dark/light modes, CMS and <em>Hubspot</em> integration
            </li>
            <li>
              Designed and developed headless{' '}
              <em>
                <Link href="https://report.biocode.io">
                  Biocode for reporting
                </Link>
              </em>{' '}
              Next.js web service to market the impact of Biocode for the public
              audience
            </li>
            <li>
              Aided other engineers to ensure quality UI/UX and implementation
            </li>
          </ul>
          <Button href={SITEMAP.biocode.url} icon={<ArrowRight />}>
            Case study
          </Button>
        </Text>
      </StepperItem>
      <StepperItem>
        <StepperStep icon={<Check />} />
        <Heading className="mb:2xs" size="h6" tag="h3">
          UI/UX Designer, Front-end Developer —{' '}
          <Figure
            alt="Mediasignal logomark"
            animate={false}
            borderRadius="var(--border-radius-full)"
            className="Template-stepper-image"
            inline
            sizes="3rem"
            {...mediasignalLogomark}
          />{' '}
          <Link href={SITEMAP.mediasignal.url} underline={false}>
            Mediasignal
          </Link>
        </Heading>
        <Text color="mute" tag="p">
          Sep 2014 – Nov 2020
        </Text>
        <Text>
          <ul className="pl">
            <li>
              Arranged workshops and planned interviews to ensure products meet
              user needs and business objectives
            </li>
            <li>
              Developed and designed hundreds of applications and websites for
              clients such as{' '}
              <em>
                <Link href={SITEMAP.oras.url}>Oras</Link>
              </em>
              ,{' '}
              <em>
                <Link href={`${SITEMAP.moreWork.url}/#academic-bookstore`}>
                  Bonnier Books
                </Link>
              </em>
              ,{' '}
              <em>
                <Link href={`${SITEMAP.moreWork.url}/#finnpark`}>Finnpark</Link>
              </em>
              , <em>Kia</em>, <em>Fair Trade</em>, <em>Kesla</em>,{' '}
              <em>Caverion</em>,{' '}
              <em>
                <Link href={`${SITEMAP.moreWork.url}/#hukka`}>Luke</Link>
              </em>
              ,{' '}
              <em>
                <Link href={`${SITEMAP.moreWork.url}/#takk`}>TAKK</Link>
              </em>{' '}
              and{' '}
              <em>
                <Link href={`${SITEMAP.moreWork.url}/#hankkija`}>Hankkija</Link>
              </em>
            </li>
            <li>
              Refreshed{' '}
              <Link href={SITEMAP.mediasignal.url}>
                Mediasignal’s brand twice
              </Link>{' '}
              including logomark design, brand book crafting, business card
              design and website renewal
            </li>
            <li>
              Developed and designed{' '}
              <Link href="https://github.com/joonassandell/rebirth">
                internal tools
              </Link>{' '}
              and products such as{' '}
              <em>
                <Link href={`${SITEMAP.moreWork.url}/#rubik`}>Rubik</Link>
              </em>{' '}
              that were sold to variety of customers
            </li>
            <li>
              Managed to acquire new clients based on past experience, outside
              connections and word-to-mouth reputation
            </li>
            <li>
              Led and aided cross-functional teams and communicated with the
              customers occasionally utilizing agile <em>Scrum</em> sprints
            </li>
          </ul>
          <Button href={SITEMAP.mediasignal.url} icon={<ArrowRight />}>
            Case study
          </Button>
        </Text>
      </StepperItem>
      <StepperItem>
        <StepperStep icon={<Check />} />
        <Heading className="mb:2xs" size="h6" tag="h3">
          UI/UX Designer, Front-end Developer — City of Tampere
        </Heading>
        <Text color="mute" tag="p">
          Apr 2007 – Sep 2014
        </Text>
        <Text>
          <ul className="pl">
            <li>
              Built and curated valuable <em>Exhibition Guide</em> mobile app to
              help visitors gain an enjoyable and insightful museum experiences
            </li>
            <li>
              Built <em>Museum Guide</em> screen which featured inteactive maps
              and other features integrated to the website CMS
            </li>
            <li>
              Built <em>Twitter Social Wall</em> screen to engage museum
              visitors sharing their museum experiences
            </li>
            <li>
              Designed and developed user interfaces, wireframes, graphic
              assets, and prototypes for <em>Museum Centre Vapriikki</em>,{' '}
              <em>Moominvalley</em>, <em>Tampere Music Festivals</em> and other
              city sectors
            </li>
          </ul>
        </Text>
      </StepperItem>
    </Stepper>
    <Heading size="h4" tag="h2">
      About me 👋
    </Heading>
    <Text>
      <p>
        I enjoy crafting interfaces, design systems, and products while
        connecting with new people online and dedicating some of my free time to
        various projects. <Link href={SITEMAP.contact.url}>Contact me</Link> or
        learn more about me from the links below.
      </p>
      <p className="flex flex-wrap:wrap gap:s">
        <Button href={SITEMAP.about.url} size="s">
          {SITEMAP.about.title}
        </Button>
        <Button href={SITEMAP.milestones.url} size="s">
          {SITEMAP.milestones.title}
        </Button>
        <Button href={SITEMAP.approach.url} size="s">
          {SITEMAP.approach.title}
        </Button>
      </p>
    </Text>
  </div>
);
