import { Head } from '@/components/Head';
import { Heading } from '@/components/Heading';
import { type PageProps } from '@/types';
import { Template, TemplateMain } from '@/components/Template';
import { Text } from '@/components/Text';

export const Page404 = ({ id, title }: PageProps) => (
  <Template id={id} variant="default">
    <Head title={title} />
    <TemplateMain className="wrap">
      <Heading size="display" tag="h1">
        {id}
      </Heading>
      <Text>{title}</Text>
    </TemplateMain>
  </Template>
);
