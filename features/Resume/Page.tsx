import { Head } from '@/components/Head';
import { ResumeAside, ResumeContent, ResumeRecommendations } from './';
import { SITEMAP } from '@/lib/sitemap';
import { Template, TemplateMain, TemplateSection } from '@/components/Template';
import { useSetThemeColor } from '@/components/App';

export const ResumePage = () => {
  const { id, meta } = SITEMAP.resume;
  useSetThemeColor();

  return (
    <Template footerProps={{ fullWidth: true }} id={id} variant="unstyled">
      <Head description={meta.description} title={meta.title} />
      <TemplateMain>
        <TemplateSection gridGap="m" gridRowGap="m" pt={false}>
          <ResumeContent />
          <ResumeAside />
        </TemplateSection>
        <ResumeRecommendations />
      </TemplateMain>
    </Template>
  );
};
