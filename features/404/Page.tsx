import { Template, TemplateMain } from '@/components/Template';
import { Head } from '@/components/Head';
import { Heading } from '@/components/Heading';
import { Text } from '@/components/Text';
import { type PageProps } from '@/types';

export const Page404 = ({ id, title }: PageProps) => (
  <Template id={id}>
    <Head title={title} />
    <TemplateMain className="wrap">
      <Heading tag="div" size="display">
        {id}
      </Heading>
      <Text>{title}</Text>
    </TemplateMain>
  </Template>
);
