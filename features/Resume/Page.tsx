import { Aside, Content, Recommendations } from './';
import { Head } from '@/components/Head';
import { type PageProps } from '@/types';
import { Template, TemplateMain, TemplateSection } from '@/components/Template';
import { useSetThemeColor } from '@/components/App';

export const ResumePage = ({ id, themeColor, title }: PageProps) => {
  useSetThemeColor(themeColor);

  return (
    <Template footerProps={{ fullWidth: true }} id={id} variant="unstyled">
      <Head title={title} />
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
