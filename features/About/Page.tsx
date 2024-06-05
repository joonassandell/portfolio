import { AboutClients, AboutIntro, AboutSkills, AboutTop } from './';
import { Head } from '@/components/Head';
import { type PageProps } from '@/types';
import { Template, TemplateMain } from '@/components/Template';
import { useSetThemeColor } from '@/components/App';

export const AboutPage = ({ id, themeColor, title }: PageProps) => {
  useSetThemeColor(themeColor);

  return (
    <Template id={id}>
      <Head
        description="I'm creative developer and designer based in Helsinki, Finland."
        title={title}
      />
      <TemplateMain>
        <AboutTop />
        <AboutIntro />
        <AboutSkills />
        <AboutClients />
      </TemplateMain>
    </Template>
  );
};
