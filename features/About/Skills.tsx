import { Heading } from '@/components/Heading';
import { TemplateSection } from '@/components/Template';
import { Text } from '@/components/Text';
import { TextReveal } from '@/components/TextReveal';
import { useParallax } from '@/lib/useParallax';

export const AboutSkills = () => {
  const { ref, value: x1 } = useParallax({
    speed: 'fastest',
    speedMultiplier: 2,
  });
  const { value: x2 } = useParallax({
    ref,
    reverse: true,
    speed: 'fastest',
  });

  return (
    <TemplateSection
      className="Template-skills"
      grid={false}
      id="skills"
      pt="10vw"
      ref={ref}
      wrap={false}
    >
      <div className="wrap">
        <Text animate className="mb:l">
          Skills{' '}
          <span className="color:mute">
            (Competencies, languages, tech etc.)
          </span>
        </Text>
      </div>
      <Heading className="white-space:nowrap" size="h2" style={{ x: x1 }}>
        <TextReveal
          text={[
            'Art direction — Visual design — Web design & development — Product design — App design & development — Responsive design — Web animations',
          ]}
        />
      </Heading>
      <Heading
        className="white-space:nowrap flex justify-content:end"
        size="h2"
        style={{ x: x2 }}
      >
        <TextReveal
          text={[
            'HTML — CSS — Sass — Next.js — TypeScript — JavaScript — React — Node.js — Zustand — Framer Motion — Redux',
          ]}
        />
      </Heading>
      <Heading className="white-space:nowrap" size="h2" style={{ x: x1 }}>
        <TextReveal
          text={[
            'TYPO3 — PHP — WordPress — Bundlers — Databases — GraphQL — Firebase — AWS — Apache — Bash',
          ]}
        />
      </Heading>
      <Heading
        className="white-space:nowrap flex justify-content:end"
        size="h2"
        style={{ x: x2 }}
      >
        <TextReveal
          text={[
            'Design systems — Figma — Sketch — Photoshop — Illustrator — Rive — Indesign — Storybook',
          ]}
        />
      </Heading>
    </TemplateSection>
  );
};
