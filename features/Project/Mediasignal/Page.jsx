import { MediasignalHero } from '@/features/Project';
import { Template, TemplateMain, TemplateSection } from '@/components/Template';
import { getImage, getSitemap } from '@/lib/utility';
import { NextProject } from '@/components/NextProject';
import { MQ, SCROLL_SPEED } from '@/lib/config';
import { Info } from '@/components/Info';
import { Figure } from '@/components/Figure';
import { useIsMobile } from '@/lib/useIsMobile';

export const MediasignalPage = ({ images, id, title, year }) => {
  const { id: nextProjectId } = getSitemap('biocode');

  return (
    <Template name={id} title={title}>
      <TemplateMain>
        <MediasignalHero />
        <Info
          client={{ name: title, href: 'https://mediasignal.fi/en' }}
          type={['Web service', 'Branding', 'Commission']}
          heading="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
          dicta expedita voluptatum rerum a nostrum cupiditate similique
          delectus recusandae error officiis, numquam ipsam veniam voluptas
          voluptate. Aliquid tenetur quod nisi"
          text={
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
              dicta expedita voluptatum rerum a nostrum cupiditate similique
              delectus recusandae error officiis, numquam ipsam veniam voluptas
              voluptate. Aliquid tenetur quod nisi
            </p>
          }
          role={['UI/UX/Brand design', 'Web development', 'Concept strategy']}
          year={year}
        />
      </TemplateMain>
      <NextProject id={nextProjectId} />
    </Template>
  );
};
