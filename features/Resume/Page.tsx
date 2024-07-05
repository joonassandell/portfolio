import { Aside, Content, Recommendations } from './';
import { Head } from '@/components/Head';
import { SITEMAP } from '@/lib/sitemap';
import { Template, TemplateMain, TemplateSection } from '@/components/Template';
import { useSetThemeColor } from '@/components/App';

export const ResumePage = () => {
  const { id, meta } = SITEMAP.resume;
  useSetThemeColor();

  return (
    <Template footerProps={{ fullWidth: true }} id={id} variant="unstyled">
      <Head title={meta.title} />
      <TemplateMain>
        <TemplateSection gridGap="m" gridRowGap="m" pt={false}>
          <Content />
          <Aside />
        </TemplateSection>
        <Recommendations />
      </TemplateMain>
    </Template>
  );
};
