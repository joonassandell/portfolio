import { Avatar } from '@/components/Avatar';
import { Figure } from '@/components/Figure';
import { getImage } from '@/lib/utils';
import { Heading } from '@/components/Heading';
import { Link } from '@/components/Link';
import { MQ } from '@/lib/config';
import { type PageProps } from '@/types';
import { Quote, QuoteFooter, QuoteText } from '@/components/Quote';
import { Subtitle } from '@/components/Subtitle';
import { TemplateArea } from '@/components/Template';
import { Text } from '@/components/Text';
import profileAnnu from '@/public/biocode/annu-kuure.jpg';

export const BiocodeDesignSystem = ({ images }: PageProps) => (
  <section className="Template-ds" id="design-system">
    <TemplateArea className="Template-ds-heading" grid={false} pt="2xl-5xl">
      <Subtitle animate center>
        Design system
      </Subtitle>
      <Heading animate center size="h1" tag="h2">
        Biocode Design System
      </Heading>
      <Text animate center className="mb:0" color="mute" size="l" tag="p">
        The foundation of our design, hosted on{' '}
        <em>
          <Link href="https://github.com/joonassandell/bds">GitHub</Link>
        </em>{' '}
        and designed with <em>Figma</em>, serves as a comprehensive library used
        across our entire ecosystem, providing a consistent look and
        standardized approach in maintaining coherence throughout our products
      </Text>
    </TemplateArea>
    <TemplateArea gridGap="m" gridRowGap="m" pt="l-2xl">
      <div className="grid-col grid-col:9@s grid align-items:start">
        <Figure
          alt="Biocode design system button component"
          border
          borderStyle="dashed"
          className="grid-col grid-col:5@s -align:end"
          sizes={`${MQ.s} 33vw, 100vw`}
          {...getImage('joonassandell-biocode-design-system-button', images)}
        />
        <Figure
          alt="Biocode design system alert component"
          border
          borderStyle="dashed"
          className="grid-col grid-col:7 visible@s"
          quality={100}
          sizes={`${MQ.s} 50vw, 100vw`}
          {...getImage('joonassandell-biocode-design-system-alert', images)}
        />
        <div className="grid-col grid-col:8@s grid">
          <Figure
            alt="Biocode design system tabs component"
            border
            borderStyle="dashed"
            className="grid-col grid-col:8@s"
            quality={100}
            sizes={`${MQ.s} 33vw, 100vw`}
            {...getImage('joonassandell-biocode-design-system-tabs', images)}
          />
          <Figure
            alt="Biocode design system beacon component"
            border
            borderStyle="dashed"
            className="grid-col grid-col:4 -align:end visible@s"
            sizes="15vw"
            {...getImage('joonassandell-biocode-design-system-beacon', images)}
          />
          <Figure
            alt="Biocode design system avatar component"
            border
            borderStyle="dashed"
            className="grid-col grid-col:6"
            sizes={`${MQ.s} 25vw, 50vw`}
            {...getImage('joonassandell-biocode-design-system-avatar', images)}
          />
          <Figure
            alt="Biocode design system switch component"
            border
            borderStyle="dashed"
            className="grid-col grid-col:6 -align:end"
            sizes={`${MQ.s} 25vw, 50vw`}
            {...getImage('joonassandell-biocode-design-system-switch', images)}
          />
        </div>
        <div className="grid-col grid-col:4 grid -gap:column:0 visible@s">
          <Figure
            alt="Biocode design system menu component"
            border
            borderStyle="dashed"
            className="grid-col"
            quality={100}
            sizes="25vw"
            {...getImage('joonassandell-biocode-design-system-menu', images)}
          />
          <Figure
            alt="Biocode design system beacon component"
            border
            borderStyle="dashed"
            className="grid-col grid-col:6 -end visible@s"
            sizes="15vw"
            {...getImage('joonassandell-biocode-design-system-spinner', images)}
          />
        </div>
      </div>
      <div className="grid-col grid-col:4 grid-col:3@s grid -gap:column:0 -align:end">
        <Figure
          alt="Biocode design system radial chart component"
          border
          borderStyle="dashed"
          className="grid-col"
          quality={100}
          sizes={`${MQ.s} 25vw, 33vw`}
          {...getImage('joonassandell-biocode-design-system-radial', images)}
        />
        <Figure
          alt="Biocode design system popover component"
          border
          borderStyle="dashed"
          className="grid-col visible@s"
          quality={100}
          sizes="25vw"
          {...getImage('joonassandell-biocode-design-system-popover', images)}
        />
      </div>
      <div className="grid-col grid-col:8 grid-col:5@s -start:2@s grid -gap:column:0">
        <Figure
          alt="Biocode design system dialog component"
          border
          borderStyle="dashed"
          className="grid-col"
          quality={100}
          sizes={`${MQ.s} 40vw, 100vw`}
          {...getImage('joonassandell-biocode-design-system-dialog', images)}
        />
        <Figure
          alt="Biocode design system progress component"
          border
          borderStyle="dashed"
          className="grid-col grid-col:9 -end -align:end visible@s"
          sizes="25vw"
          {...getImage('joonassandell-biocode-design-system-progress', images)}
        />
      </div>
      <Figure
        alt="Biocode design system cards component"
        border
        borderStyle="dashed"
        className="grid-col grid-col:6@s"
        quality={100}
        sizes={`${MQ.s} 50vw, 100vw`}
        {...getImage('joonassandell-biocode-design-system-cards', images)}
      />
    </TemplateArea>
    <TemplateArea gridRowGap="m" pt="2xl-5xl">
      <div className="grid-col grid-col:5@l grid-col:4@xl grid -gap:row:l -gap:column:0">
        <div className="grid-col">
          <Heading animate size="h5" tag="h3">
            Flexible components
          </Heading>
          <Text animate className="mb:0" color="mute" tag="p">
            Both our Figma and{' '}
            <Link href="https://github.com/joonassandell/bds">
              code libraries
            </Link>{' '}
            are highly flexible, allowing us to create a wide variety of
            component combinations. Our data display components, such as charts,
            and data tables, are designed to effectively present emissions
            results in an easy-to-understand format.
          </Text>
        </div>
        <div className="grid-col grid-col:7@s grid-col:12@l grid -align:end">
          <Figure
            alt="Biocode design system donut chart component"
            border
            borderStyle="dashed"
            className="grid-col grid-col:8"
            quality={100}
            sizes={`${MQ.l} 20vw, ${MQ.s} 40vw, 60vw`}
            {...getImage('joonassandell-biocode-design-system-donut', images)}
          />
          <div className="grid-col grid-col:4 grid -gap:column:0">
            <Figure
              alt="Biocode design system donut chart component"
              border
              borderStyle="dashed"
              className="grid-col"
              quality={100}
              sizes={`${MQ.l} 10vw, ${MQ.s} 20vw, 33vw`}
              {...getImage(
                'joonassandell-biocode-design-system-donut-small-1',
                images,
              )}
            />
            <Figure
              alt="Biocode design system donut chart component"
              border
              borderStyle="dashed"
              className="grid-col"
              quality={100}
              sizes={`${MQ.l} 10vw, ${MQ.s} 20vw, 33vw`}
              {...getImage(
                'joonassandell-biocode-design-system-donut-small-2',
                images,
              )}
            />
          </div>
        </div>
      </div>
      <Figure
        alt="Biocode design system table"
        border
        className="grid-col grid-col:10@s grid-col:7@l grid-col:8@xl -end -align:end"
        quality={90}
        sizes={`${MQ.s} 90vw, 100vw`} // Intentional for better quality
        {...getImage('joonassandell-biocode-design-system-table', images)}
      />
    </TemplateArea>
    <TemplateArea grid={false} pt="l-2xl">
      <Quote animate size="l">
        <QuoteText>
          <p>
            Biocode has dramatically increased our understanding of our products
            and their emissions. For example, our own knowledge of the carbon
            footprint of our oatmeal is now crystal clear.
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
    </TemplateArea>
    <TemplateArea pt="2xl-5xl">
      <div className="grid-col grid-col:8@l grid">
        <Figure
          alt="Biocode for producers mark"
          border
          borderStyle="dashed"
          className="grid-col grid-col:4"
          sizes={`${MQ.l} 25vw, 33vw`}
          {...getImage('joonassandell-biocode-producer-mark', images)}
        />
        <Figure
          alt="Biocode for products mark"
          border
          borderStyle="dashed"
          className="grid-col grid-col:4"
          inViewOffset={0.3}
          sizes={`${MQ.l} 25vw, 33vw`}
          {...getImage('joonassandell-biocode-product-mark', images)}
        />
        <Figure
          alt="Biocode for reporting mark"
          border
          borderStyle="dashed"
          className="grid-col grid-col:4"
          inViewOffset={0.6}
          sizes={`${MQ.l} 25vw, 33vw`}
          {...getImage('joonassandell-biocode-report-mark', images)}
        />
      </div>
      <div className="grid-col grid-col:8@m -start:5@m grid-col:4@l -start:9@l">
        <Heading animate maxWidth size="h5" tag="h3">
          Distinguishing key areas with symbols
        </Heading>
        <Text animate className="mb:0" color="mute" tag="p">
          To help users easily identify the distinct sections of Biocode, our
          design system includes specific symbols for each area: for producers,
          for food businesses, and the reporting service, along with essential
          iconography.
        </Text>
      </div>
    </TemplateArea>
    <TemplateArea className="align-items:start" pt="2xl-5xl">
      <div className="grid-col grid-col:10@m -start:3@m grid-col:4@l -start:1@l grid -gap:column:0">
        <Figure
          alt="Biocode design system colors"
          border
          className="grid-col"
          sizes={`${MQ.l} 33vw, ${MQ.m} 70vw, 100vw`}
          {...getImage('joonassandell-biocode-design-system-colors', images)}
        />
        <div className="grid-col">
          <Heading animate className="mt:xs" maxWidth size="h5" tag="h3">
            Reflecting brand identity with typography and color tokens
          </Heading>
          <Text animate className="mb:0" color="mute" tag="p">
            Complementary colors, green and yellow, were selected to reflect the
            connection to nature, reinforcing the environmental focus of our
            brand. To make our data displays both clear and accessible, we chose
            accent colors specifically for this purpose.
          </Text>
        </div>
      </div>
      <Figure
        alt="Biocode design system typeface: Space Grotesk"
        className="grid-col grid-col:10@m grid-col:8@l"
        quality={100}
        sizes={`${MQ.l} 60vw, ${MQ.m} 70vw, 100vw`}
        {...getImage('joonassandell-biocode-design-system-typeface', images)}
      />
      <Figure
        alt="Biocode design system color tokens"
        border
        className="grid-col grid-col:8@l"
        sizes={`${MQ.l} 60vw, 100vw`}
        {...getImage(
          'joonassandell-biocode-design-system-color-tokens',
          images,
        )}
      />
      <div className="grid-col grid-col:4@l">
        <Text animate color="mute" tag="p">
          The primary color, a clear blue, symbolizes the sky and our commitment
          to preserving the climate in its natural state. Our main typeface,{' '}
          <em>Space Grotesk</em>, features a custom stylistic set that balances
          credibility with subtle sense of creativity.
        </Text>
        <Text animate color="mute" tag="p">
          The brand's dark/light theme and selected imagery, such as the globe,
          subtly reference the global challenge of climate change. Each
          component, from typography to color choice, was designed to convey a
          sense of reliability while maintaining slightly playful and modern
          aesthetic.
        </Text>
        <Text animate className="mb:0" color="mute" tag="small">
          Note that this case study showcases mainly dark themed elements for
          simplicity. Biocode's design system consists tokens for light theme as
          well, <Link href="#software">see below</Link>.
        </Text>
      </div>
    </TemplateArea>
  </section>
);
