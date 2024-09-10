import { Figure } from '@/components/Figure';
import { getImage } from '@/lib/utils';
import { Heading } from '@/components/Heading';
import { MQ } from '@/lib/config';
import { type PageProps } from '@/types';
import { Subtitle } from '@/components/Subtitle';
import { TemplateArea } from '@/components/Template';
import { Text } from '@/components/Text';

export const BiocodeSoftware = ({ images }: PageProps) => {
  return (
    <section className="Template-software">
      <TemplateArea
        className="Template-software-hero"
        grid={false}
        pt="2xl-5xl"
        wrap={false}
      >
        <Figure
          alt="Isometric Biocode software for producers"
          animate={false}
          borderRadius={false}
          placeholder={false}
          {...getImage(
            'joonassandell-biocode-software-for-producers-hero',
            images,
          )}
        />
      </TemplateArea>
      <TemplateArea grid={false} id="software" pt="2xl-5xl">
        <Subtitle animate center className="mb">
          The Software
        </Subtitle>
        <Heading animate center size="h1" tag="h2">
          Simplifying the carbon footprint calculating
        </Heading>
        <Text animate center className="mb:0" color="mute" size="l" tag="p">
          Biocode’s software is designed to make calculations straightforward
          and accessible for food businesses and producers. While the process
          may seem complex, our platform simplifies each step, allowing users to
          easily track and reduce their environmental impact with confidence and
          clarity.
        </Text>
      </TemplateArea>
      <TemplateArea grid={false} pt="2xl-5xl">
        <Figure
          alt="Biocode software collection"
          animate={false}
          background="var(--biocode-light-bg-300)"
          border
          borderRadius="var(--border-radius-l)"
          fill="large"
          scroll="mask"
          scrollImageSpeed="medium"
          scrollImageStartPosition="negative"
          scrollImageStartPositionMultiplier={2}
          scrollSpeed="slow"
          scrollStartPosition={0}
          {...getImage('joonassandell-biocode-software-collection', images)}
        />
      </TemplateArea>
      <TemplateArea gridRowGap="m" pt="l">
        <div className="grid-col grid-col:4@l -start:1@l">
          <Heading animate size="h5" tag="h3">
            Continuous UX research to match user needs
          </Heading>
          <Text animate className="mb:0" color="mute" tag="p">
            Our UX processes begin with planning user interviews, in
            collaboration with the marketing team, to better understand user
            needs and improve both the UX and UI of the software. As one part of
            this effort, we are currently designing new UI and unifying the
            interfaces of the producer and product sections, with a focus on
            consistency across the platform.
          </Text>
        </div>
        <div className="grid-col grid-col:10@m grid-col:8@l">
          <Figure
            alt="Biocode for food brands overview"
            border
            sizes={`${MQ.l} 60vw, ${MQ.m} 70vw, 100vw`}
            {...getImage(
              'joonassandell-biocode-software-for-food-brands-overview',
              images,
            )}
          />
        </div>
        <div className="grid-col grid-col:10@m -start:3@m grid-col:8@l -start:1@l">
          <Figure
            alt="Biocode for producers overview"
            border
            sizes={`${MQ.l} 60vw, ${MQ.m} 70vw, 100vw`}
            {...getImage(
              'joonassandell-biocode-software-for-producers-overview',
              images,
            )}
          />
        </div>
        <div className="grid-col grid-col:10@m -start:3@m grid-col:4@l -start:9@l">
          <Text animate color="mute" tag="p">
            The UI unification process involves converting design elements like
            spacing, colors, and components to match our cohesive design system.
            Our UI is constantly evolving, and we continuously refine our
            approach, selecting the best components and solutions for each use
            case to optimize clarity and accessibility, for example:
          </Text>
          <Text animate color="mute">
            <ul>
              <li>
                Notice the subtle differences in spacings; currently spacings
                are too big (latter image) and we need to reduce them to give
                more space to essential elements such as inputs
              </li>
              <li>
                Better positioning and visibility for the main action button
                (first image)
              </li>
              <li>
                Clear wording: <q>New calculation</q> is more understandable
                than <q>New assessment</q>
              </li>
            </ul>
          </Text>
        </div>
      </TemplateArea>
    </section>
  );
};
