import {
  BiocodeBrandAndWebsite,
  BiocodeDesignSystem,
  BiocodeHero,
  BiocodeSoftware,
} from './';
import { Figure } from '@/components/Figure';
import { getImage } from '@/lib/utils';
import { Head } from '@/components/Head';
import { Info } from '@/components/Info';
import { Link } from '@/components/Link';
import { MQ } from '@/lib/config';
import { NextProject } from '@/components/NextProject';
import { type PageProps } from '@/types';
import { SITEMAP } from '@/lib/sitemap';
import { Template, TemplateArea } from '@/components/Template';
import { useSetThemeColor } from '@/components/App';

export const BiocodePage = ({ images }: PageProps) => {
  const { id, meta, title, year } = SITEMAP.biocode;
  const { id: nextProjectId } = SITEMAP.oras;
  useSetThemeColor(meta.themeColor);

  return (
    <Template id={id} variant="unstyled">
      <Head {...meta} />
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
        role={['Product design', 'Software development', 'Web development']}
        smallPrint="Built together with awesome co-workers from Biocode."
        tech={['Next.js, Headless', 'React, GraphQL', 'Framer Motion']}
        text={
          <p>
            I worked for Biocode as a Senior Product Designer and Front-end
            Developer. I was crafting our{' '}
            <Link href="#brand-and-website" underline={false}>
              brand and website
            </Link>
            , maintaining our{' '}
            <Link href="#design-system" underline={false}>
              design system
            </Link>
            , developing our{' '}
            <Link href="#software" underline={false}>
              software
            </Link>{' '}
            and enhancing the overall direction of our product.
          </p>
        }
        toc={[
          {
            href: '#brand-and-website',
            text: 'Brand & Website',
          },
          {
            href: '#design-system',
            text: 'Design System',
          },
          {
            href: '#software',
            text: 'Software',
          },
        ]}
        type={['SaaS', 'Website', 'Branding']}
        year={`2020 – ${year}`}
      />
      <TemplateArea pt="2xl-5xl">
        <div className="grid-col grid-col:10@l -start:2@l">
          <Figure
            alt="Biocode homepage with isometric Biocode software"
            border
            borderRadius="var(--border-radius-app)"
            glare
            priority
            quality={100}
            sizes={`${MQ.l} 80vw, 100vw`}
            {...getImage('joonassandell-biocode-website-home-hero', images)}
          />
        </div>
      </TemplateArea>
      <BiocodeBrandAndWebsite images={images} />
      <BiocodeDesignSystem images={images} />
      <BiocodeSoftware images={images} />
      <NextProject id={nextProjectId} />
    </Template>
  );
};
