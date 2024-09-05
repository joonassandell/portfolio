import { ArrowRight } from '@/components/Icon';
import { Button } from '@/components/Button';
import { Heading } from '@/components/Heading';
import { Hr } from '@/components/Hr';
import { MilestonesTableHighlight } from '@/features/Milestones';
import { TemplateArea } from '@/components/Template';
import { Text } from '@/components/Text';
import { TextReveal } from '@/components/TextReveal';

export const AboutMilestones = () => (
  <TemplateArea
    className="Template-milestones"
    gridGap="m"
    gridRowGap="m"
    pb="2xl-5xl"
    pt="2xl-5xl"
  >
    <div className="grid-col grid-col:8@s grid-col:6@m">
      <Hr className="mb:ml" />
      <Heading size="h3">
        <TextReveal text={["I'm enthusiastic ", 'about creating things']} />
      </Heading>
      <Text animate className="mb:m">
        <p>
          I enjoy dedicating some of my free time to various projects, crafting
          sketches, tweaking code, enhancing my personal website with new
          features, and producing music. See featured milestones below.
        </p>
      </Text>
    </div>
    <div className="grid-col">
      <MilestonesTableHighlight />
    </div>
    <div className="grid-col">
      <Button href="/milestones" icon={<ArrowRight />}>
        Explore milestones
      </Button>
    </div>
  </TemplateArea>
);
