import { Avatar } from '@/components/Avatar';
import { Figure } from '@/components/Figure';
import { getImage } from '@/lib/utils';
import { Heading } from '@/components/Heading';
import { Hr } from '@/components/Hr';
import { Link } from '@/components/Link';
import { MQ } from '@/lib/config';
import { type PageProps } from '@/types';
import { Quote, QuoteFooter, QuoteText } from '@/components/Quote';
import { Subtitle } from '@/components/Subtitle';
import { TemplateArea } from '@/components/Template';
import { Text } from '@/components/Text';
import profileAnnu from '@/public/biocode/annu-kuure.jpg';

export const BiocodeBrandAndWebsite = ({ images }: PageProps) => (
  <section id="brand-and-website">
    <TemplateArea grid={false} pt="2xl-5xl">
      <Subtitle animate center>
        New brand & website
      </Subtitle>
      <Heading animate center size="h1" tag="h2">
        Understanding the positioning of Biocode
      </Heading>
      <Text
        animate
        balance
        center
        className="mb:0"
        color="mute"
        size="l"
        tag="p"
      >
        The brand renewal began with a clear objective: to reposition Biocode,
        initially perceived as a consulting service, into a scalable SaaS
        product, aligning with our mission to provide food businesses with an
        efficient carbon footprint calculator
      </Text>
    </TemplateArea>
    <TemplateArea pt="l-2xl">
      <div className="grid-col grid -gap:row:0">
        <Hr animate className="grid-col mb:l mb:2xl@l" />
        <Heading
          animate
          className="grid-col grid-col:4@s grid-col:5@m grid-col:7@l"
          size="h5"
          tag="h3"
        >
          Problems
        </Heading>
        <Text
          animate
          className="grid-col grid-col:8@s grid-col:7@m grid-col:5@l mb:0"
          color="mute"
          tag="p"
        >
          During the positioning project, we discovered that Biocode's brand and{' '}
          <Link
            href="/_next/image?url=%2Fsandbox%2Fjoonassandell-biocode-home.jpg&w=1080&q=100"
            target="_blank"
          >
            old website
          </Link>{' '}
          were not effectively communicating its USPs and the{' '}
          <em>real value</em> it provides to users. This misalignment created
          confusion among potential customers, leading to lower engagement and a
          lack of clarity.
        </Text>
      </div>
      <div className="grid-col grid -gap:row:0">
        <Heading
          animate
          className="grid-col grid-col:4@s grid-col:5@m grid-col:7@l"
          maxWidth
          size="h5"
          tag="h3"
        >
          Challenges
        </Heading>
        <Text
          animate
          className="grid-col grid-col:8@s grid-col:7@m grid-col:5@l mb:0"
          color="mute"
          tag="p"
        >
          We needed to shift Biocode's positioning from a service-oriented brand
          to a product-centric SaaS model and ensure that the website conveyed
          the value Biocode offers to its users. The main challenge was
          translating this into a brand design that highlighted Biocode's key
          advantages and set it apart from competitors.
        </Text>
      </div>
      <div className="grid-col grid -gap:row:0">
        <Heading
          animate
          className="grid-col grid-col:4@s grid-col:5@m grid-col:7@l"
          size="h5"
          tag="h3"
        >
          Solutions
        </Heading>
        <Text
          animate
          className="grid-col grid-col:8@s grid-col:7@m grid-col:5@l mb:0"
          color="mute"
          tag="p"
        >
          We addressed these challenges by showcasing Biocode’s strengths, like
          ease of use and credibility. The new design highlights the problems
          Biocode solves, with clear messaging and a user-friendly interface
          that guides potential customers through the product's benefits.
        </Text>
      </div>
    </TemplateArea>
    <TemplateArea pt="2xl-5xl">
      <Figure
        alt="'Who Biocode is for' cards and call to action to sign up for Biocode"
        border
        className="grid-col grid-col:10@m grid-col:7@l"
        sizes={`${MQ.l} 60vw, ${MQ.m} 70vw, 100vw`}
        {...getImage('joonassandell-biocode-website-home-whoitsfor', images)}
      />
      <div className="grid-col grid-col:10@m grid-col:5@l -end -align:end grid">
        <div className="grid-col">
          <Heading animate size="h5" tag="h3">
            Essential features we needed
          </Heading>
          <Text animate className="mb:xs" color="mute">
            <ul>
              <li>Key app features showcasing main USPs</li>
              <li>Strategically placed CTAs for user sign-up</li>
              <li>Feedback quotes from satisfied clients</li>
              <li>Logical navigation and content structure</li>
              <li>Emphasis on software trustworthiness</li>
              <li>Targeted sections addressing user needs</li>
            </ul>
          </Text>
        </div>
        <Figure
          alt="Four main Biocode features and quote of Biocode's customer"
          border
          className="grid-col"
          quality={100}
          sizes={`${MQ.l} 40vw, ${MQ.m} 70vw, 100vw`}
          {...getImage('joonassandell-biocode-website-home-calculate', images)}
        />
      </div>
      <div className="grid-col grid-col:6@m grid-col:4@l">
        <Heading animate size="h5" tag="h3">
          How to engage our users?
        </Heading>
        <Text animate className="mb:0" color="mute" tag="p">
          We built Biocode's{' '}
          <Link href="https://report.biocode.io">reporting service</Link> to
          empower users to share emissions data, attract eco-conscious
          consumers, and strategically promote Biocode. This commitment to
          environmental responsibility differentiates Biocode, driving more
          businesses to adopt our platform.
        </Text>
      </div>
      <Figure
        alt="Call to action to discover Biocode reporting service"
        border
        className="grid-col grid-col:10@m grid-col:8@l"
        quality={100}
        sizes={`${MQ.l} 60vw, ${MQ.m} 70vw, 100vw`}
        {...getImage('joonassandell-biocode-website-home-reporting', images)}
      />
    </TemplateArea>
    <TemplateArea grid={false} pt="2xl-5xl">
      <Subtitle animate center>
        New brand & website
      </Subtitle>
      <Heading animate center size="h2">
        Shifting the focus to a product-centric design
      </Heading>
      <Text
        animate
        balance
        center
        className="mb:0"
        color="mute"
        size="l"
        tag="p"
      >
        The transformation required a major UX and aesthetic overhaul to reflect
        modern SaaS efficiency. Guided by the positioning, the redesign focused
        on presenting Biocode as a clear and compelling software solution.
      </Text>
    </TemplateArea>
    <TemplateArea pt="l-2xl">
      <Figure
        alt="Biocode homepage animation"
        border
        borderRadius="var(--border-radius-app)"
        className="grid-col grid-col:8@l"
        glare
        src="/biocode/joonassandell-biocode-website-home.mp4"
      />
      <div className="grid-col grid-col:6@m grid-col:4@l -align:end">
        <Heading animate size="h5" tag="h3">
          Strong first impression
        </Heading>
        <Text animate className="mb:0" color="mute" tag="p">
          The homepage was strategically redesigned to make a powerful first
          impression. We wanted to convey that anyone can easily calculate
          emissions, regardless of expertise, making the tool accessible to
          eveyone.
        </Text>
      </div>
    </TemplateArea>
    <TemplateArea pt="grid-gap-row-l">
      <Figure
        alt="Mobile view of Biocode's homepage"
        borderRadius="1.5rem"
        className="grid-col grid-col:6 -start:4 grid-col:4@m -start:3@m grid-col:3@l -start:3@l mt:xs mb:xs mb:0@m mt:0@m"
        quality={100}
        sizes={`${MQ.m} 25vw, 50vw`}
        {...getImage('joonassandell-biocode-website-mobile', images)}
      />
      <div className="grid-col grid-col:6@m grid-col:4@l -align:end">
        <Heading animate size="h5" tag="h3">
          International and distinctive
        </Heading>
        <Text animate className="mb:0" color="mute" tag="p">
          The website was initially designed in dark mode for a modern look,
          then adapted to light mode for broader accessibility. We aimed for
          global professional <q>software-like</q> feel and limited food imagery
          to keep the brand versatile, reflecting the software's broad emission
          calculation capabilities.
        </Text>
      </div>
    </TemplateArea>
    <TemplateArea pt="2xl-5xl">
      <div className="grid-col grid-col:6@m grid-col:4@l">
        <Heading animate size="h5" tag="h3">
          Unified visual identity
        </Heading>
        <Text animate className="mb:0" color="mute" tag="p">
          Biocode was missing a logomark and an icon, which is a crucial piece
          of any fully-fledged software product. We created a new logomark which
          was also integrated as part of the wordmark to ensure recognition.
        </Text>
      </div>
      <div className="grid-col grid-col:8@l grid">
        <Figure
          alt="Biocode monotone logomark"
          border
          borderStyle="dashed"
          className="grid-col grid-col:4@s visible@s"
          sizes={`${MQ.l} 20vw, ${MQ.s} 33vw, 50vw`}
          {...getImage('joonassandell-biocode-logomark-monotone', images)}
        />
        <Figure
          alt="Biocode logomark"
          border
          borderStyle="dashed"
          className="grid-col grid-col:6 grid-col:4@s"
          inViewOffset={0.3}
          sizes={`${MQ.l} 20vw, ${MQ.s} 33vw, 50vw`}
          {...getImage('joonassandell-biocode-logomark', images)}
        />
        <Figure
          alt="Biocode application icon"
          border
          borderStyle="dashed"
          className="grid-col grid-col:6 grid-col:4@s"
          inViewOffset={0.6}
          sizes={`${MQ.l} 20vw, ${MQ.s} 33vw, 50vw`}
          {...getImage('joonassandell-biocode-icon', images)}
        />
        <Figure
          alt="Biocode wordmark"
          border
          borderStyle="dashed"
          className="grid-col grid-col:8@s -start:5@s"
          sizes={`${MQ.l} 40vw, ${MQ.s} 60vw, 100vw`}
          {...getImage('joonassandell-biocode-wordmark', images)}
        />
      </div>
    </TemplateArea>
    <TemplateArea className="align-items:start" gridRowGap="m" pt="2xl-5xl">
      <Figure
        alt="Biocode feature page hero cards"
        border
        borderRadius="var(--border-radius-app)"
        className="grid-col grid-col:10@m grid-col:8@l"
        quality={100}
        sizes={`${MQ.l} 60vw, ${MQ.m} 70vw, 100vw`}
        {...getImage('joonassandell-biocode-website-features-hero', images)}
      />
      <div className="grid-col hidden@m">
        <Heading animate className="mt:xs" size="h5" tag="h3">
          Emphasizing core strengths
        </Heading>
        <Text animate className="mb:xs" color="mute" tag="p">
          We really wanted to highlight the core advantages by designing
          sections that showcase them using visually appealing{' '}
          <q>bento grids</q> and other flashy elements.
        </Text>
      </div>
      <div className="grid-col grid-col:6 grid-col:5@m grid-col:4@l -align:end grid -gap:column:0">
        <div className="grid-col visible@m">
          <Heading animate size="h5" tag="h3">
            Emphasizing core strengths
          </Heading>
          <Text animate className="mb:xs" color="mute" tag="p">
            We really wanted to highlight the core advantages by designing
            sections that showcase them using visually appealing{' '}
            <q>bento grids</q> and other flashy elements.
          </Text>
        </div>
        <Figure
          alt="Example of Biocode's easy to use card"
          border
          className="grid-col"
          glare
          quality={100}
          sizes={`${MQ.l} 33vw, 50vw`}
          {...getImage(
            'joonassandell-biocode-website-card-easy-to-use',
            images,
          )}
        />
      </div>
      <Figure
        alt="Example of Biocode's agile card"
        border
        className="grid-col grid-col:6 grid-col:5@m grid-col:4@l flex mt:auto"
        glare
        quality={100}
        sizes={`${MQ.l} 33vw, 50vw`}
        {...getImage('joonassandell-biocode-website-card-agile', images)}
      />
      <Figure
        alt="Example of Biocode's insightful card"
        border
        className="grid-col grid-col:6 grid-col:5@m -start:3@m grid-col:4@l -start:5@l"
        glare
        inViewOffset={0.3}
        quality={100}
        sizes={`${MQ.l} 33vw, 50vw`}
        {...getImage('joonassandell-biocode-website-card-insightful', images)}
      />
      <Figure
        alt="Example of Biocode's credible card"
        border
        className="grid-col grid-col:6 grid-col:5@m grid-col:4@l -end"
        glare
        inViewOffset={0.6}
        quality={100}
        sizes={`${MQ.l} 33vw, 50vw`}
        {...getImage('joonassandell-biocode-website-card-credible', images)}
      />
      <div className="grid-col grid-col:10@m -start:3@m grid-col:4@l -start:1@l grid -gap:column:0">
        <Figure
          alt="Biocode feature page assessments"
          border
          className="grid-col"
          quality={100}
          sizes={`${MQ.l} 33vw, ${MQ.m} 70vw, 100vw`}
          {...getImage(
            'joonassandell-biocode-website-features-assessments',
            images,
          )}
        />
        <div className="grid-col">
          <Heading animate className="mt:xs" size="h5" tag="h3">
            In-depth features
          </Heading>
          <Text animate className="mb:xs mb:0@m" color="mute" tag="p">
            Among emphasizing the core USPs we also planned detailed sections of
            individual features of the software to gain a deeper insight into
            the specific tools and capabilities.
          </Text>
        </div>
      </div>
      <Figure
        alt="Biocode feature page results"
        border
        className="grid-col grid-col:10@m grid-col:8@l"
        quality={90}
        sizes={`${MQ.l} 60vw, ${MQ.m} 70vw, 100vw`}
        {...getImage('joonassandell-biocode-website-features-results', images)}
      />
    </TemplateArea>
    <TemplateArea pt="2xl-5xl">
      <Figure
        alt="About us page of Biocode homepage"
        border
        borderRadius="var(--border-radius-app)"
        className="grid-col grid-col:10@m -start:3@m grid-col:7@l -start:1@l"
        sizes={`${MQ.l} 50vw, ${MQ.m} 70vw, 100vw`}
        {...getImage('joonassandell-biocode-website-about', images)}
      />
      <div className="grid-col grid-col:10@m -start:3@m grid-col:4@l -start:8@l grid -gap:row:l">
        <div className="grid-col">
          <Heading animate size="h5" tag="h3">
            Transparent and trustworthy expertise
          </Heading>
          <Text animate color="mute" tag="p">
            We aimed to showcase the transparency, expertise, and dedication of
            our team. Our staff is committed to delivering accurate carbon
            calculations and clear, reliable results.
          </Text>
          <Text animate className="mb:0" color="mute" tag="p">
            Additionally we arranged a photoshoot to create unique visuals that
            are also used in our various marketing materials.
          </Text>
        </div>
        <Quote animate className="grid-col -align:end">
          <QuoteText>
            <p>
              It wasn't easy to trust a carbon footprinting service provider,
              but Biocode has solid connections with universities and research
              institutes, which convinced us. Biocode is more unubiased.
            </p>
          </QuoteText>
          <QuoteFooter>
            <Avatar
              image={{
                alt: 'Annu Kuure’s profile picture',
                ...profileAnnu,
              }}
              name="Annu Kuure"
              text="CEO, Kinnusen Mylly"
            />
          </QuoteFooter>
        </Quote>
      </div>
    </TemplateArea>
  </section>
);
