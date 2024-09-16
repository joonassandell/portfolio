import {
  AboutClients,
  AboutIntro,
  AboutMilestones,
  AboutSkills,
  AboutTop,
} from './';
import { Head } from '@/components/Head';
import { SITEMAP } from '@/lib/sitemap';
import { Template } from '@/components/Template';
import { useSetThemeColor } from '@/components/App';

export const AboutPage = () => {
  const { id, meta } = SITEMAP.about;
  useSetThemeColor(meta.themeColor);

  return (
    <Template id={id}>
      <Head {...meta} />
      <AboutTop />
      <AboutIntro />
      <AboutSkills />
      <AboutClients />
      <AboutMilestones />
    </Template>
  );
};
