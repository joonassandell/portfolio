import { Head } from '@/components/Head';
import { Heading } from '@/components/Heading';
import { Template, TemplateMain } from '@/components/Template';
import { Text } from '@/components/Text';
import { useSetThemeColor } from '@/components/App';

export const Page404 = () => {
  useSetThemeColor();

  return (
    <Template id="404">
      <Head title="Page not found" />
      <TemplateMain className="wrap">
        <Heading size="display" tag="h1">
          404
        </Heading>
        <Text>Page not found</Text>
      </TemplateMain>
    </Template>
  );
};
