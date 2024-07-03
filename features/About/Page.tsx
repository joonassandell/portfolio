import {
  AboutClients,
  AboutIntro,
  AboutMilestones,
  AboutSkills,
  AboutTop,
} from './';
import { Head } from '@/components/Head';
import { Template, TemplateMain } from '@/components/Template';
import { useSetThemeColor } from '@/components/App';
import sitemap from './sitemap';

export const AboutPage = () => {
  useSetThemeColor(sitemap.meta.themeColor);

  return (
    <Template id={sitemap.id}>
      <Head description={sitemap.meta.description} title={sitemap.meta.title} />
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
