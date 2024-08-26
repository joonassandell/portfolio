import { Figure } from '@/components/Figure';
import { getImage } from '@/lib/utils';
import { Heading } from '@/components/Heading';
import { Hr } from '@/components/Hr';
import { Link } from '@/components/Link';
import { MQ } from '@/lib/config';
import { type PageProps } from '@/types';
import { Subtitle } from '@/components/Subtitle';
import { TemplateSection } from '@/components/Template';
import { Text } from '@/components/Text';

export const BiocodeBrand = ({ images }: PageProps) => {
  return (
    <>
      <TemplateSection className="pt:2xl pt:5xl@l" gridGap="xl" pt={false}>
        <div className="grid-col grid-col:10@l -start:2@l">
          <Figure
            alt="Biocode homepage and isometric Biocode application"
            border
            glare
            priority
            quality={100}
            sizes={`${MQ.l} 80vw, 100vw`}
            {...getImage('joonassandell-biocode-website-home-hero', images)}
          />
        </div>
      </TemplateSection>
      <TemplateSection
        className="pt:2xl pt:5xl@l pb:2xl"
        grid={false}
        id="brand"
        pt={false}
      >
        <Subtitle animate className="text:center ml:auto mr:auto">
          New brand & website
        </Subtitle>
        <Heading
          animate
          className="text:center ml:auto mr:auto"
          maxWidth
          size="h1"
          tag="h2"
        >
          Understanding the positioning of Biocode
        </Heading>
        <Text
          animate
          className="text:center ml:auto mr:auto mb:0"
          color="mute"
          maxWidth
          size="l"
          tag="p"
        >
          The brand renewal began with a clear objective: to reposition Biocode,
          initially perceived as a consulting service, into a scalable SaaS
          product. This transition was necessary to better align with our
          mission of providing food businesses with an efficient carbon
          footprint calculator.
        </Text>
      </TemplateSection>
      <TemplateSection gridRowGap="m" pt={false}>
        <div className="grid-col grid -gap:row:0">
          <div className="grid-col">
            <Hr animate className="mb:2xl" />
          </div>
          <div className="grid-col grid-col:6@m">
            <Heading animate size="h5" tag="h3">
              Problems
            </Heading>
          </div>
          <div className="grid-col grid-col:6@m">
            <Text animate color="mute" tag="p">
              During the positioning project, we discovered that Biocode's brand
              and website were not effectively communicating its USPs and the{' '}
              <em>real value</em> it provides to customers. This misalignment
              created confusion among potential users, leading to lower
              engagement and a lack of clarity about the product's value
              proposition.
            </Text>
          </div>
        </div>
        <div className="grid-col grid -gap:row:0">
          <div className="grid-col grid-col:6@m">
            <Heading animate size="h5" tag="h3">
              Challenges
            </Heading>
          </div>
          <div className="grid-col grid-col:6@m">
            <Text animate color="mute" tag="p">
              We needed to shift Biocode's positioning from a service-oriented
              brand to a product-centric SaaS model and ensure that the website
              conveyed the specific value Biocode offers to its users. The main
              challenge was to translate these discoveries into a new brand
              design that clearly communicated Biocode's key advantages and
              differentiated it from competitors.
            </Text>
          </div>
        </div>
        <div className="grid-col grid -gap:row:0">
          <div className="grid-col grid-col:6@m">
            <Heading animate size="h5" tag="h3">
              Solutions
            </Heading>
          </div>
          <div className="grid-col grid-col:6@m">
            <Text animate className="mb:0" color="mute" tag="p">
              To address these challenges, we focused on showcasing Biocode’s
              selling points, such as its ease of use, credibility, and agility.
              The new design emphasizes the problems Biocode solves for its
              users, with clear messaging, structure and a user-friendly
              interface that guides potential customers through the product's
              benefits.
            </Text>
          </div>
        </div>
        <div className="grid-col hidden@s">
          <Hr animate className="mb:0 mt:ml" />
        </div>
      </TemplateSection>
      <TemplateSection className="pt:5xl@l" gridGap="xl">
        <div className="grid-col grid-col:10@m grid-col:7@l ">
          <Figure
            alt="'Who Biocode is for' cards and call to action to sign up for Biocode"
            border
            glare
            quality={100}
            sizes={`${MQ.l} 60vw, ${MQ.m} 70vw, 100vw`}
            {...getImage(
              'joonassandell-biocode-website-home-whoitsfor',
              images,
            )}
          />
        </div>
        <div className="grid-col grid-col:10@m grid-col:5@l -end -align:end">
          <Heading animate size="h5" tag="h3">
            {/* Required features for the new website */}
            {/* Key features we needed for the website */}
            What key features did we need?
          </Heading>
          <Text animate className="mb:2xl mb:l@l" color="mute">
            <ul>
              <li>
                Essential features of the software, highlighting the main USPs
              </li>
              <li>
                Strategically placed CTAs to guide users toward signing up
                {/* or exploring pricing options */}
              </li>
              <li>
                Integrated feedback quotes from satisfied clients
                {/* to add authenticity and trust */}
              </li>
              <li>
                Clearly structured navigation and logical content structure
              </li>
              <li>Highlighting transparency and trustworthy of the software</li>
              <li>
                Dedicated sections for target groups, addressing the specific
                needs and solutions
              </li>
            </ul>
          </Text>
          <Figure
            alt="Four main Biocode features and quote of Biocode's customer"
            border
            glare
            quality={100}
            sizes={`${MQ.l} 40vw, ${MQ.m} 70vw, 100vw`}
            {...getImage(
              'joonassandell-biocode-website-home-calculate',
              images,
            )}
          />
        </div>
        <div className="grid-col grid-col:7@m grid-col:4@l">
          <Heading animate size="h5" tag="h3">
            {/* Trustworthy and transparent reporting */}
            How did we engage our users?
          </Heading>
          <Text animate color="mute" maxWidth>
            <p>
              We decided to build Biocode's{' '}
              <Link href="https://report.biocode.io">reporting service</Link> to
              not only provide our users with a powerful tool for sharing their
              emissions data and attracting environmentally-conscious consumers
              but also to strategically promote Biocode.
            </p>
            <p>
              This commitment to environmental responsibility are compelling
              selling points that help differentiate Biocode in the market,
              driving more businesses to adopt our platform and further
              expanding our user base.
            </p>
          </Text>
        </div>
        <div className="grid-col grid-col:10@m grid-col:8@l">
          <Figure
            alt="Call to action to discover Biocode reporting service"
            border
            glare
            quality={100}
            sizes={`${MQ.l} 60vw, ${MQ.m} 70vw, 100vw`}
            {...getImage(
              'joonassandell-biocode-website-home-reporting',
              images,
            )}
          />
        </div>
      </TemplateSection>
      <TemplateSection
        className="pt:2xl pt:5xl@l pb:2xl pb:5xl@l"
        grid={false}
        pt={false}
      >
        <Subtitle animate className="text:center ml:auto mr:auto mb">
          New brand & website
        </Subtitle>
        <Heading
          animate
          className="text:center ml:auto mr:auto"
          maxWidth
          size="h3"
          tag="h2"
        >
          Shifting the focus to a product-centric design
        </Heading>
        <Text
          animate
          className="text:center ml:auto mr:auto mb:0"
          color="mute"
          maxWidth
          size="l"
          tag="p"
        >
          The transformation involved significant UX and aesthetic overhaul to
          embody the efficiency and sophistication of modern SaaS products.
          Guided by insights from the positioning project, the redesign focused
          on presenting Biocode as a clear and compelling software solution.
        </Text>
      </TemplateSection>
      <TemplateSection gridGap="xl" pt={false}>
        <div className="grid-col grid-col:8@l">
          <Figure
            alt="Biocode homepage animation"
            border
            glare
            src="/biocode/joonassandell-biocode-website-home.mp4"
          />
        </div>
        <div className="grid-col grid-col:6@m grid-col:4@l -align:end">
          <Heading animate size="h5" tag="h3">
            Powerful first impression
          </Heading>
          <Text animate color="mute" maxWidth>
            <p>
              The homepage was strategically redesigned to make a strong first
              impression with a captivating isometric animation of the software.
            </p>
            <p>
              The headline <q>Carbon footprint calculator that makes sense</q>,
              assures users that anyone, regardless of expertise, can easily
              calculate their emissions using Biocode.
            </p>
          </Text>
        </div>
      </TemplateSection>
      <TemplateSection gridGap="xl">
        <div className="grid-col grid-col:6 -start:4 grid-col:4@m -start:3@m grid-col:3@l -start:3@l">
          <Figure
            alt="Mobile view of Biocode's homepage"
            borderRadius="1.5rem"
            glare
            quality={100}
            sizes={`${MQ.m} 25vw, 50vw`}
            {...getImage('joonassandell-biocode-website-mobile', images)}
          />
        </div>
        <div className="grid-col grid-col:5@m -align:end">
          <Heading animate size="h5" tag="h3">
            Professional, international, and distinctive
          </Heading>
          <Text animate color="mute" maxWidth tag="p">
            The overall website design was first conceptualized in dark mode,
            offering a sleek, modern aesthetic, and was later adapted to light
            mode for broader accessibility across different user environments.
          </Text>
          <Text animate className="mb:0" color="mute" maxWidth tag="p">
            We aimed to create a professional and international "software-like"
            feel. We avoided adding too much imagery of food items to ensure
            that the brand remains versatile, as the software is capable of
            calculating emissions for a wide range of items beyond just food
            products.
          </Text>
        </div>
      </TemplateSection>
      <TemplateSection
        className="pt:2xl pt:5xl@l"
        gridGap="xl"
        gridRowGap="m"
        pt={false}
      >
        <div className="grid-col grid-col:6@m grid-col:4@l">
          <Heading animate size="h5" tag="h3">
            Unified visual identity
          </Heading>
          <Text animate className="mb:0" color="mute" maxWidth tag="p">
            We were missing an icon, or logomark, which is a crucial piece of
            any fully-fledged software product. We created a new logomark which
            we also integrated as part of the wordmark to ensure consistency and
            recognition.
          </Text>
        </div>
        <div className="grid-col grid-col:8@l grid -gap:l">
          <div className="grid-col grid-col:4@s visible@s">
            <Figure
              alt="Biocode monotone logomark"
              border
              glare
              sizes={`${MQ.m} 25vw, 50vw`}
              {...getImage('joonassandell-biocode-logomark-monotone', images)}
            />
          </div>
          <div className="grid-col grid-col:6 grid-col:4@s">
            <Figure
              alt="Biocode logomark"
              border
              glare
              inViewOffset={0.3}
              sizes={`${MQ.m} 25vw, 50vw`}
              {...getImage('joonassandell-biocode-logomark', images)}
            />
          </div>
          <div className="grid-col grid-col:6 grid-col:4@s">
            <Figure
              alt="Biocode application icon"
              border
              glare
              inViewOffset={0.6}
              sizes={`${MQ.m} 25vw, 50vw`}
              {...getImage('joonassandell-biocode-icon', images)}
            />
          </div>
          <div className="grid-col grid-col:8@m -start:5@m grid-col:8@l">
            <Figure
              alt="Biocode wordmark"
              border
              glare
              sizes={`${MQ.l} 33vw, ${MQ.m} 50vw, 100vw`}
              {...getImage('joonassandell-biocode-wordmark', images)}
            />
          </div>
        </div>
      </TemplateSection>
      <TemplateSection className="pt:2xl pt:5xl@l" gridRowGap="m" pt={false}>
        <div className="grid-col grid-col:10@m grid-col:8@l">
          <Figure
            alt="Biocode feature page hero cards"
            border
            glare
            quality={100}
            sizes={`${MQ.l} 60vw, ${MQ.m} 70vw, 100vw`}
            {...getImage('joonassandell-biocode-website-features-hero', images)}
          />
        </div>
        <div className="grid-col hidden@m">
          <Heading animate className="mt:m" size="h5" tag="h3">
            Emphasizing core strengths
          </Heading>
          <Text animate color="mute" maxWidth tag="p">
            We really wanted to highlight the core advantages, so we designed
            sections that showcase them using visually appealing <q>cards</q>{' '}
            and other elements.
          </Text>
        </div>
        <div className="grid-col grid-col:6 grid-col:5@m grid-col:4@l -align:end">
          <div className="visible@m">
            <Heading animate size="h5" tag="h3">
              Emphasizing core strengths
            </Heading>
            <Text animate className="mb:l" color="mute" tag="p">
              We really wanted to highlight the core advantages, so we designed
              sections that showcase them using visually appealing <q>cards</q>{' '}
              and other elements.
            </Text>
          </div>
          <Figure
            alt="Example of Biocode's easy to use card"
            border
            glare
            quality={100}
            sizes={`${MQ.l} 33vw, 50vw`}
            {...getImage(
              'joonassandell-biocode-website-card-easy-to-use',
              images,
            )}
          />
        </div>
        <div className="grid-col grid-col:6 grid-col:5@m grid-col:4@l flex">
          <Figure
            alt="Example of Biocode's agile card"
            border
            className="mt:auto"
            glare
            quality={100}
            sizes={`${MQ.l} 33vw, 50vw`}
            {...getImage('joonassandell-biocode-website-card-agile', images)}
          />
        </div>
        <div className="grid-col grid-col:6 grid-col:5@m -start:3@m grid-col:4@l -start:5@l">
          <Figure
            alt="Example of Biocode's insightful card"
            border
            glare
            inViewOffset={0.3}
            quality={100}
            sizes={`${MQ.l} 33vw, 50vw`}
            {...getImage(
              'joonassandell-biocode-website-card-insightful',
              images,
            )}
          />
        </div>
        <div className="grid-col grid-col:6 grid-col:5@m grid-col:4@l -end">
          <Figure
            alt="Example of Biocode's credible card"
            border
            glare
            inViewOffset={0.6}
            quality={100}
            sizes={`${MQ.l} 33vw, 50vw`}
            {...getImage('joonassandell-biocode-website-card-credible', images)}
          />
        </div>
        <div className="grid-col grid-col:10@m -start:3@m grid-col:4@l -start:1@l">
          <Figure
            alt="Biocode feature page assessments"
            border
            className="mb:l"
            glare
            quality={100}
            sizes={`${MQ.l} 33vw, ${MQ.m} 70vw, 100vw`}
            {...getImage(
              'joonassandell-biocode-website-features-assessments',
              images,
            )}
          />
          <Heading animate className="mt:xl" size="h5" tag="h3">
            In-depth features
          </Heading>
          <Text animate color="mute" maxWidth tag="p">
            Among emphasizing the core USPs we also planned detailed sections of
            individual features of the software to gain a deeper insight into
            the specific tools and capabilities.
          </Text>
        </div>
        <div className="grid-col grid-col:10@m grid-col:8@l">
          <Figure
            alt="Biocode feature page results"
            border
            glare
            quality={100}
            sizes={`${MQ.l} 60vw, ${MQ.m} 70vw, 100vw`}
            {...getImage(
              'joonassandell-biocode-website-features-results',
              images,
            )}
          />
        </div>
      </TemplateSection>
      <TemplateSection className="pt:2xl pt:5xl@l">
        <div className="grid-col grid-col:10@m grid-col:8@l">
          <Figure
            alt="About us page of Biocode homepage"
            border
            glare
            quality={100}
            sizes={`${MQ.l} 60vw, ${MQ.m} 70vw, 100vw`}
            {...getImage('joonassandell-biocode-website-about', images)}
          />
        </div>
        <div className="grid-col grid-col:4@l">
          <Heading animate size="h5" tag="h3">
            Transparent and reliable expertise
          </Heading>
          <Text animate className="mb:0" color="mute" maxWidth tag="p">
            We also aimed to showcase the transparency, expertise, and
            dedication of our team. Our staff is committed to delivering
            accurate carbon calculations and clear, trustworthy results.
          </Text>
        </div>
      </TemplateSection>
    </>
  );
};
