import { Heading } from '@/components/Heading';
import { SCROLL_SPEED } from '@/lib/config';
import { TemplateSection } from '@/components/Template';
import { Text } from '@/components/Text';
import { TextReveal } from '@/components/TextReveal';

export const AboutSkills = () => (
  <TemplateSection
    className="Template-skills"
    grid={false}
    id="skills"
    paddingTop="10vw"
    wrap={false}
  >
    <div className="wrap">
      <Text animate className="mb:l">
        Skills{' '}
        <span className="color:gray:mute">
          (Competencies, languages, tech etc.)
        </span>
      </Text>
    </div>
    <Heading
      className="white-space:nowrap"
      data-s
      data-s-direction="horizontal"
      data-s-position="left"
      data-s-speed={SCROLL_SPEED * 4}
      size="h2"
    >
      <TextReveal
        text={[
          'Art direction — Visual design — Web design & development — Product design — App design & development — Responsive design — Web animations',
        ]}
      />
    </Heading>
    <Heading
      className="white-space:nowrap flex justify-content:end"
      data-s
      data-s-direction="horizontal"
      data-s-position="left"
      data-s-speed={SCROLL_SPEED * -3}
      size="h2"
    >
      <TextReveal
        text={[
          'HTML — CSS — Sass — Next.js — TypeScript — JavaScript — React — Node.js — Zustand — Framer Motion — Redux',
        ]}
      />
    </Heading>
    <Heading
      className="white-space:nowrap"
      data-s
      data-s-direction="horizontal"
      data-s-position="left"
      data-s-speed={SCROLL_SPEED * 2}
      size="h2"
    >
      <TextReveal
        text={[
          'TYPO3 — PHP — WordPress — Bundlers — Databases — GraphQL — Firebase — AWS — Apache — Bash',
        ]}
      />
    </Heading>
    <Heading
      className="white-space:nowrap flex justify-content:end"
      data-s
      data-s-direction="horizontal"
      data-s-position="left"
      data-s-speed={SCROLL_SPEED * -2}
      size="h2"
    >
      <TextReveal
        text={[
          'Design systems — Figma — Sketch — Photoshop — Illustrator — Rive — Indesign — Storybook',
        ]}
      />
    </Heading>
  </TemplateSection>
);
