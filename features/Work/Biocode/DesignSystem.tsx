import { Figure } from '@/components/Figure';
import { getImage } from '@/lib/utils';
import { Heading } from '@/components/Heading';
import { Link } from '@/components/Link';
import { MQ } from '@/lib/config';
import { type PageProps } from '@/types';
import { Subtitle } from '@/components/Subtitle';
import { TemplateArea } from '@/components/Template';
import { Text } from '@/components/Text';

export const BiocodeDesignSystem = ({ images }: PageProps) => (
  <section className="Template-ds" id="design-system">
    <TemplateArea className="Template-ds-heading" grid={false} pt="2xl-5xl">
      <Subtitle animate center>
        Design System
      </Subtitle>
      <Heading animate center size="h1" tag="h2">
        Biocode Design System
      </Heading>
      <Text animate center className="mb:0" color="mute" size="l" tag="p">
        The foundation of our design, hosted on{' '}
        <em>
          <Link href="https://github.com/joonassandell/bds">GitHub</Link>
        </em>{' '}
        and designed with <em>Figma</em>, serves as a comprehensive components
        library used across our entire ecosystem ensuring a consistent look and
        standardized approach in maintaining uniformity throughout our products.
      </Text>
    </TemplateArea>
    <TemplateArea gridGap="s" gridRowGap="s" pb="2xl-5xl" pt="2xl">
      <div className="grid-col grid-col:9@s grid -gap:s align-items:start">
        <div className="grid-col grid-col:5@s -align:end">
          <Figure
            alt="Biocode design system button component"
            border
            borderStyle="dashed"
            quality={100}
            sizes={`${MQ.s} 33vw, 100vw`}
            {...getImage('joonassandell-biocode-design-system-button', images)}
          />
        </div>
        <div className="grid-col grid-col:7 visible@s">
          <Figure
            alt="Biocode design system alert component"
            border
            borderStyle="dashed"
            quality={100}
            sizes={`${MQ.s} 50vw, 100vw`}
            {...getImage('joonassandell-biocode-design-system-alert', images)}
          />
        </div>
        <div className="grid-col grid-col:8@s grid -gap:s">
          <div className="grid-col grid-col:8@s">
            <Figure
              alt="Biocode design system tabs component"
              border
              borderStyle="dashed"
              quality={100}
              sizes={`${MQ.s} 33vw, 100vw`}
              {...getImage('joonassandell-biocode-design-system-tabs', images)}
            />
          </div>
          <div className="grid-col grid-col:4 -align:end visible@s">
            <Figure
              alt="Biocode design system beacon component"
              border
              borderStyle="dashed"
              sizes="15vw"
              {...getImage(
                'joonassandell-biocode-design-system-beacon',
                images,
              )}
            />
          </div>
          <div className="grid-col grid-col:6">
            <Figure
              alt="Biocode design system avatar component"
              border
              borderStyle="dashed"
              sizes={`${MQ.s} 25vw, 50vw`}
              {...getImage(
                'joonassandell-biocode-design-system-avatar',
                images,
              )}
            />
          </div>
          <div className="grid-col grid-col:6 -align:end">
            <Figure
              alt="Biocode design system switch component"
              border
              borderStyle="dashed"
              sizes={`${MQ.s} 25vw, 50vw`}
              {...getImage(
                'joonassandell-biocode-design-system-switch',
                images,
              )}
            />
          </div>
        </div>
        <div className="grid-col grid-col:4 grid -gap:s -gap:column:0 visible@s">
          <div className="grid-col">
            <Figure
              alt="Biocode design system menu component"
              border
              borderStyle="dashed"
              quality={100}
              sizes="25vw"
              {...getImage('joonassandell-biocode-design-system-menu', images)}
            />
          </div>
          <div className="grid-col grid-col:6 -end visible@s">
            <Figure
              alt="Biocode design system beacon component"
              border
              borderStyle="dashed"
              sizes="15vw"
              {...getImage(
                'joonassandell-biocode-design-system-spinner',
                images,
              )}
            />
          </div>
        </div>
      </div>
      <div className="grid-col grid-col:4 grid-col:3@s grid -gap:s -gap:column:0 -align:end">
        <div className="grid-col">
          <Figure
            alt="Biocode design system donut component"
            border
            borderStyle="dashed"
            sizes={`${MQ.s} 33vw, 25vw`}
            {...getImage('joonassandell-biocode-design-system-donut', images)}
          />
        </div>
        <div className="grid-col visible@s">
          <Figure
            alt="Biocode design system popover component"
            border
            borderStyle="dashed"
            quality={100}
            sizes="25vw"
            {...getImage('joonassandell-biocode-design-system-popover', images)}
          />
        </div>
      </div>
      <div className="grid-col grid-col:8 grid-col:5@s -start:2@s grid -gap:s">
        <div className="grid-col">
          <Figure
            alt="Biocode design system dialog component"
            border
            borderStyle="dashed"
            quality={100}
            sizes={`${MQ.s} 40vw, 100vw`}
            {...getImage('joonassandell-biocode-design-system-dialog', images)}
          />
        </div>
        <div className="grid-col grid-col:9 -end -align:end visible@s">
          <Figure
            alt="Biocode design system progress component"
            border
            borderStyle="dashed"
            sizes="25vw"
            {...getImage(
              'joonassandell-biocode-design-system-progress',
              images,
            )}
          />
        </div>
      </div>
      <div className="grid-col grid-col:6@s">
        <Figure
          alt="Biocode design system cards component"
          border
          borderStyle="dashed"
          quality={100}
          sizes={`${MQ.s} 50vw, 100vw`}
          {...getImage('joonassandell-biocode-design-system-cards', images)}
        />
      </div>
    </TemplateArea>
  </section>
);
