import { ArrowRight } from '@/components/Icon';
import { Button } from '@/components/Button';
import { Head } from '@/components/Head';
import { Heading } from '@/components/Heading';
import { SITEMAP } from '@/lib/sitemap';
import { Template, TemplateMain } from '@/components/Template';
import { Text } from '@/components/Text';
import { useSetThemeColor } from '@/components/App';
import sitemap from './sitemap';

export const Page404 = () => {
  useSetThemeColor();

  return (
    <Template id={sitemap.id}>
      <Head title={sitemap.meta.title} />
      <TemplateMain className="wrap">
        <Heading className="mb:2xs" size="display" tag="h1">
          404
        </Heading>
        <Text
          className="flex flex-wrap:wrap flex-direction:column align-items:center"
          size="l"
        >
          <p>{sitemap.title}</p>
          <Button href={SITEMAP.home.url} icon={<ArrowRight />}>
            Go to homepage
          </Button>
        </Text>
      </TemplateMain>
    </Template>
  );
};
