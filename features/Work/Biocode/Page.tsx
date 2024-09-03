import { BiocodeBrandAndWebsite, BiocodeDesignSystem, BiocodeHero } from './';
import { Figure } from '@/components/Figure';
import { getImage } from '@/lib/utils';
import { Head } from '@/components/Head';
import { Info } from '@/components/Info';
import { MQ } from '@/lib/config';
import { NextProject } from '@/components/NextProject';
import { type PageProps } from '@/types';
import { SITEMAP } from '@/lib/sitemap';
import { Template, TemplateArea } from '@/components/Template';
import { useSetThemeColor } from '@/components/App';

export const BiocodePage = ({ images }: PageProps) => {
  const { id, meta, title } = SITEMAP.biocode;
  const { id: nextProjectId } = SITEMAP.oras;
  useSetThemeColor(meta.themeColor);

  return (
    <Template id={id} variant="unstyled">
      <Head description={meta.description} title={meta.title} />
      <BiocodeHero />
      <Info
        client={{ href: 'https://biocode.io', name: title }}
        heading={
          <>
            Biocode is <em>the</em> carbon footprint calculator for food brands
            and producers. It’s an easy tool for calculating emissions and
            clearly communicating environmental values to end customers.
          </>
        }
        role={['Product design', 'App development', 'Web development']}
        smallPrint="Building together with awesome co-workers from Biocode."
        tech={['Next.js, Headless', 'React, GraphQL', 'Framer Motion']}
        text={
          <p>
            I’m currently working for Biocode as a Lead Product Designer and
            Front-end Developer. I’m crafting our design system, building our
            website, developing our software and enhancing the overall direction
            of our product.
          </p>
        }
        type={['Web app', 'Web service', 'Commission']}
        year="2020–"
      />
      <TemplateArea pt="2xl-5xl">
        <div className="grid-col grid-col:10@l -start:2@l">
          <Figure
            alt="Biocode homepage with isometric Biocode application"
            border
            glare
            priority
            quality={90}
            sizes={`${MQ.l} 80vw, 100vw`}
            {...getImage('joonassandell-biocode-website-home-hero', images)}
          />
        </div>
      </TemplateArea>
      <BiocodeBrandAndWebsite images={images} />
      <BiocodeDesignSystem images={images} />
      <NextProject id={nextProjectId} />
    </Template>
  );
};
