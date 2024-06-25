import {
  AboutClients,
  AboutIntro,
  AboutMilestones,
  AboutSkills,
  AboutTop,
} from './';
import { Head } from '@/components/Head';
import { type PageProps } from '@/types';
import { Template, TemplateMain } from '@/components/Template';
import { useSetThemeColor } from '@/components/App';

export const AboutPage = ({ id, themeColor, title }: PageProps) => {
  useSetThemeColor(themeColor);

  return (
    <Template id={id}>
      <Head
        description="I'm UI/UX designer and creative front-end developer of things that usually appear on screens."
        title={title}
      />
      <TemplateMain>
        <AboutTop />
        <AboutIntro />
        <AboutSkills />
        <AboutClients />
        <AboutMilestones />
      </TemplateMain>
    </Template>
  );
};
