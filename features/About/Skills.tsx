import { Heading } from '@/components/Heading';
import { SCROLL_SPEED } from '@/lib/config';
import { Text } from '@/components/Text';
import { TextReveal } from '@/components/TextReveal';

export const AboutSkills = () => {
  return (
    <div className="Template-skills pt:10vw" id="skills">
      <div className="wrap">
        <Text animate className="mb:xl">
          Skills{' '}
          <span className="text:color:700">(Languages, competencies etc.)</span>
        </Text>
      </div>
      <Heading
        className="white-space:nowrap"
        data-s
        data-s-direction="horizontal"
        data-s-position="left"
        data-s-speed={SCROLL_SPEED * 4}
        size="h2"
        tag="div"
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
        tag="div"
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
        tag="div"
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
        tag="div"
      >
        <TextReveal
          text={[
            'Design systems — Figma — Sketch — Photoshop — Illustrator — Rive — Indesign — Storybook',
          ]}
        />
      </Heading>
    </div>
  );
};
