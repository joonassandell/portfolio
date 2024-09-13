import { Head } from '@/components/Head';
import { ResumeAside, ResumeContent, ResumeRecommendations } from './';
import { SITEMAP } from '@/lib/sitemap';
import { Template, TemplateArea } from '@/components/Template';
import { useSetThemeColor } from '@/components/App';

export const ResumePage = () => {
  const { id, meta } = SITEMAP.resume;
  useSetThemeColor();

  return (
    <Template footerProps={{ fullWidth: true }} id={id} variant="unstyled">
      <Head description={meta.description} title={meta.title} />
      <TemplateArea gridGap="m" pt={false}>
        <ResumeContent />
        <ResumeAside />
      </TemplateArea>
      <ResumeRecommendations />
    </Template>
  );
};
