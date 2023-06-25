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
              polished interfaces and meaningful experiences. So, I thought I
              might as well deliver you some more.
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
        <TemplateSection gridRowGap="l" paddingTop="15vw">
          <SubInfo
            client={{ name: 'Hankkija' }}
            heading="Hankkija"
            role={['UI/UX design', 'Web development']}
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
            type={['Web service', 'Commission']}
            year={2020}
          />
          <div className="grid-col grid-col:7@m grid-col:6@l">
            <Figure
              alt="Hankkija website in phone"
              scrolling={false}
              sizes={`${MQ.l} 50vw, ${MQ.m} 60vw, 100vw`}
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
              inViewOffset={0.5}
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
        <TemplateSection gridRowGap="l" paddingTop="15vw">
          <div className="grid-col grid-col:10@m grid-col:6@l">
            <Figure
              alt="Omoroi homepage"
              scrolling={false}
              sizes={`${MQ.l} 50vw, ${MQ.m} 80vw, 100vw`}
              {...getImage('joonassandell-omoroi-home', images)}
            />
          </div>
          <SubInfo
            client={{ name: 'Omoroi', href: 'https://omoroi.fi' }}
            heading="Omoroi"
            role={['UI/UX design', 'Web development']}
            text={
              <p>
                Omoroi is your friend in software development and automation and
                they love developing software and everything that comes with it.
                Omoroi wanted me to design and develop them a website that
                reflected their company brand, so I delivered one with some
                "version control" inspired aesthetics 🤓
              </p>
            }
            type={['Web service']}
            year={2020}
          />
          <div className="grid-col grid-col:6@m">
            <Figure
              alt="Omoroi homepage animation"
              scrolling={false}
              src="/more-work/joonassandell-omoroi-home-animation.mp4"
            />
          </div>
          <div className="grid-col grid-col:10 -end grid-col:6@m">
            <Figure
              alt="Omoroi mobile views"
              inViewOffset={0.5}
              scrolling={false}
              sizes={`${MQ.m} 50vw, 80vw`}
              {...getImage('joonassandell-omoroi-mobile', images)}
            />
          </div>
        </TemplateSection>
      </TemplateMain>
      <NextProject id={nextProjectId} />
    </Template>
  );
};
