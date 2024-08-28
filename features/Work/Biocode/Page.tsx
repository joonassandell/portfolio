import { BiocodeBrandAndWebsite, BiocodeHero } from './';
import { Head } from '@/components/Head';
import { Info } from '@/components/Info';
import { NextProject } from '@/components/NextProject';
import { type PageProps } from '@/types';
import { SITEMAP } from '@/lib/sitemap';
import { Template } from '@/components/Template';
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
            Front-end Developer. I’m responsible for crafting our design system,
            building our website and developing our software.
          </p>
        }
        type={['Web app', 'Web service', 'Commission']}
        year="2020–"
      />
      <BiocodeBrandAndWebsite images={images} />
      <NextProject id={nextProjectId} />
    </Template>
  );
};
