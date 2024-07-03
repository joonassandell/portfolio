import { Aside, Content, Recommendations } from './';
import { Head } from '@/components/Head';
import { Template, TemplateMain, TemplateSection } from '@/components/Template';
import { useSetThemeColor } from '@/components/App';
import sitemap from './sitemap';

export const ResumePage = () => {
  useSetThemeColor();

  return (
    <Template
      footerProps={{ fullWidth: true }}
      id={sitemap.id}
      variant="unstyled"
    >
      <Head title={sitemap.title} />
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
