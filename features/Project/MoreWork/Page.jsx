import { MoreWorkHero, SubInfo } from '@/features/Project';
import { Template, TemplateMain, TemplateSection } from '@/components/Template';
import { getImage, getSitemap } from '@/lib/utility';
import { NextProject } from '@/components/NextProject';
import { MQ } from '@/lib/config';
import { Info } from '@/components/Info';
import { Figure } from '@/components/Figure';
import { Title } from '@/components/Title';

export const MoreWorkPage = ({ images, id, title, year }) => {
  const { id: nextProjectId } = getSitemap('biocode');

  return (
    <Template id={id}>
      <Title title={title} />
      <TemplateMain>
        <MoreWorkHero />
        <Info
          client={{ name: 'Various' }}
          type={['Web services', 'Web applications', 'Commissions']}
          heading="So you wanted to see more, nice! This collection brings together a range of designs, primarily focused on websites and applications that I've crafted for a diverse set of clients."
          text={
            <p>
              I assume you have already noticed my keen focus on creating
              polished interfaces and meaningful experiences. So, I might as
              well deliver you some more.
            </p>
          }
          role={[
            'UI/UX/Brand designs',
            'Web development',
            'Concept strategies',
          ]}
          smallPrint="Some projects may present initial designs and prototypes."
          year={year}
        />
        <TemplateSection gridRowGap="default" paddingTop="10vw">
          <SubInfo
            client={{ name: 'Hankkija' }}
            type={['Web service', 'Commission']}
            text={
              <p>
                Hankkija Finnish Feed Innovations have their roots in the long
                tradition of developing novel solutions in Finnish bioscience
                industry. I had the honor to design and develop their new
                international website. The fresh user interface innovated the
                client to expand the design to other marketing materials as
                well.
              </p>
            }
            role={['UI/UX design', 'Web development']}
            year={2020}
          />
          <div className="grid-col grid-col:7@m grid-col:6@l">
            <Figure
              alt="Hankkija website in mobile"
              scrolling={false}
              sizes={`${MQ.m} 60vw, 100vw`}
              {...getImage('joonassandell-hankkija-mobile', images)}
            />
          </div>
          <div className="grid-col grid-col:7@m">
            <Figure
              alt="Hankkija homepage"
              scrolling={false}
              sizes={`${MQ.m} 60vw, 100vw`}
              {...getImage('joonassandell-hankkija-home', images)}
            />
          </div>
          <div className="grid-col grid-col:10 grid-col:5@m">
            <Figure
              alt="Another Hankkija homepage"
              scrolling={false}
              sizes={`${MQ.m} 40vw, 80vw`}
              {...getImage('joonassandell-hankkija-home-2', images)}
            />
          </div>
          <div className="grid-col grid-col:10 -start:3 grid-col:6@m -start:4@m">
            <Figure
              alt="Hankkija subpages"
              scrolling={false}
              sizes={`${MQ.m} 33vw, 80vw`}
              {...getImage('joonassandell-hankkija-views', images)}
            />
          </div>
        </TemplateSection>
      </TemplateMain>
      <NextProject id={nextProjectId} />
    </Template>
  );
};
