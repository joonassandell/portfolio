import { Figure } from '@/components/Figure';
import { getImage } from '@/lib/utils';
import { Heading } from '@/components/Heading';
import { m } from 'framer-motion';
import { type PageProps } from '@/types';
import { Subtitle } from '@/components/Subtitle';
import { TemplateArea } from '@/components/Template';
import { Text } from '@/components/Text';
import { useParallax } from '@/lib/useParallax';

export const BiocodeSoftware = ({ images }: PageProps) => {
  const { ref: softwareCollectionRef, value: headingY } = useParallax({
    offset: 'start-80',
    speed: 'slow',
  });

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
        <m.div style={{ y: headingY }}>
          <Subtitle animate center>
            The Software
          </Subtitle>
          <Heading animate center size="h1" tag="h2">
            Biocode Software
          </Heading>
          <Text animate center className="mb:0" color="mute" size="l" tag="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit laborum amet
            dignissimos ipsum omnis inventore illum repellendus blanditiis quae
            facere pariatur perspiciatis eligendi maiores commodi ipsam
          </Text>
        </m.div>
      </TemplateArea>
      <TemplateArea grid={false} pt="2xl-5xl" ref={softwareCollectionRef}>
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
    </section>
  );
};
