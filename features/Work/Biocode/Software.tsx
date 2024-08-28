import { Figure } from '@/components/Figure';
import { getImage } from '@/lib/utils';
import { MQ } from '@/lib/config';
import { type PageProps } from '@/types';
import { TemplateArea } from '@/components/Template';

export const BiocodeSoftware = ({ images }: PageProps) => (
  <>
    <TemplateArea>
      <div className="grid-col grid-col:10@l -start:2@l">
        <Figure
          alt="Biocode for producers app in dark mode"
          border
          quality={100}
          sizes={`${MQ.l} 80vw, 100vw`}
          transition="clip"
          {...getImage('joonassandell-biocode-app-producer-crop-dark', images)}
        />
      </div>
    </TemplateArea>
    {/* <TemplateArea gridRowGap="m" pt="2xl-5xl">
          <div className="grid-col grid-col:6 grid-col:3@m">
            <Figure
              alt="Biocode for producers mark"
              border
              inViewOffset={0.3}
              scroll
              scrollSpeedMultiplier={1.2}
              sizes={`${MQ.m} 20vw, 50vw`}
              {...getImage('joonassandell-biocode-producer-mark', images)}
            />
          </div>
          <div className="grid-col grid-col:6 grid-col:3@m">
            <Figure
              alt="Biocode for products mark"
              border
              inViewOffset={0.6}
              scroll
              scrollSpeedMultiplier={1.4}
              sizes={`${MQ.m} 20vw, 50vw`}
              {...getImage('joonassandell-biocode-product-mark', images)}
            />
          </div>
          <div className="grid-col grid-col:6 grid-col:3@m">
            <Figure
              alt="Biocode for reporting mark"
              border
              inViewOffset={0.9}
              scroll
              scrollSpeedMultiplier={1.6}
              sizes={`${MQ.m} 20vw, 50vw`}
              {...getImage('joonassandell-biocode-report-mark', images)}
            />
          </div>
        </TemplateArea> */}
    <TemplateArea className="Template-app" pt={false}>
      <div className="grid-col grid-col:9@m">
        <Figure
          alt="Biocode app sign in page"
          border
          sizes={`${MQ.l} 70vw, 100vw`}
          {...getImage('joonassandell-biocode-app-auth', images)}
        />
      </div>
      <div className="grid-col grid-col:11 grid-col:9@m -end">
        <Figure
          alt="Biocode app for producers overview page"
          border
          sizes="70vw"
          {...getImage('joonassandell-biocode-app-producer-overview', images)}
        />
      </div>
      <div className="grid-col grid-col:10 grid-col:6@m">
        <Figure
          alt="Biocode app for producers assessment page"
          border
          sizes={`${MQ.m} 50vw, 70vw`}
          {...getImage('joonassandell-biocode-app-producer-crop', images)}
        />
      </div>
      <div className="grid-col grid-col:11 grid-col:6@m -end -align:end">
        <Figure
          alt="Example of Biocode's user interface elements"
          border
          sizes={`${MQ.m} 50vw, 90vw`}
          {...getImage('joonassandell-biocode-app-ui', images)}
        />
      </div>
      <div className="grid-col grid-col:11 grid-col:8@m -start:3@m">
        <Figure
          alt="Another example of Biocode's user interface elements"
          border
          sizes={`${MQ.m} 70vw, 90vw`}
          {...getImage('joonassandell-biocode-app-ui-2', images)}
        />
      </div>
      <div className="grid-col grid-col:8@m -end">
        <Figure
          alt="Biocode for producers application teaser image"
          border
          sizes={`${MQ.m} 70vw, 100vw`}
          {...getImage('joonassandell-biocode-app-producer-frame', images)}
        />
      </div>
    </TemplateArea>
  </>
);
