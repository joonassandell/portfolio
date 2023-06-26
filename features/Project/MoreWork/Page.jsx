import { MoreWorkHero, SubInfo } from '@/features/Project';
import { Template, TemplateMain, TemplateSection } from '@/components/Template';
import { getImage, getSitemap } from '@/lib/utility';
import { NextProject } from '@/components/NextProject';
import { MQ } from '@/lib/config';
import { Info } from '@/components/Info';
import { Figure } from '@/components/Figure';
import { Text } from '@/components/Text';
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
          smallPrint="Some projects may present initial designs and prototypes"
          year={year}
        />
        <TemplateSection id="hw-company" gridRowGap="l" paddingTop="15vw">
          <SubInfo
            client={{ name: 'HW-Company' }}
            heading="HW-Company"
            role={['UI/UX design', 'Web development']}
            text={
              <p>
                HW-Company Ltd is a wholesale service company that imports and
                sells internationally known and high-quality accessories, shoes
                and equipment for outdoor activities.
              </p>
            }
            type={['Web service', 'E-commerce', 'Commission']}
            year={2018}
          />
          <div className="grid-col grid-col:7@m grid-col:6@l">
            <Figure
              alt="HW-Company home page animation"
              src="/more-work/joonassandell-hw-company-home-animation.mp4"
            />
          </div>
          <div className="grid-col grid-col:8@m">
            <Figure
              alt="HW-Company home page"
              sizes={`${MQ.m} 70vw, 100vw`}
              {...getImage('joonassandell-hw-company-home', images)}
            />
          </div>
          <div className="grid-col grid-col:10 grid-col:4@m">
            <Figure
              alt="HW-Company products page"
              inViewOffset={0.5}
              sizes={`${MQ.m} 33vw, 80vw`}
              {...getImage('joonassandell-hw-company-products', images)}
            />
            <Text animate className="mt:xl">
              <p>
                I was asked to design and develop website for the companys newly
                updated brand. The main goal was to improve HW-Company's brand,
                improve usability, and give website users a comprehensive
                picture of HW-Company's activities around the world.
              </p>
              <Text color="light">
                <small>
                  Built together with awesome people from Porkka & Kuutsa
                </small>
              </Text>
            </Text>
          </div>
        </TemplateSection>
        <TemplateSection id="omoroi" gridRowGap="l" paddingTop="20vw">
          <div className="grid-col grid-col:10@m grid-col:6@l">
            <Figure
              alt="Omoroi homepage"
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
              src="/more-work/joonassandell-omoroi-home-animation.mp4"
            />
          </div>
          <div className="grid-col grid-col:10 -end grid-col:6@m">
            <Figure
              alt="Omoroi mobile views"
              inViewOffset={0.5}
              sizes={`${MQ.m} 50vw, 80vw`}
              {...getImage('joonassandell-omoroi-mobile', images)}
            />
          </div>
        </TemplateSection>
        <TemplateSection id="hankkija" gridRowGap="l" paddingTop="20vw">
          <SubInfo
            client={{ name: 'Hankkija' }}
            heading="Hankkija"
            role={['UI/UX design', 'Web development']}
            text={
              <p>
                Hankkija Finnish Feed Innovations have their roots in the long
                tradition of developing novel solutions in Finnish bioscience
                industry.
              </p>
            }
            type={['Web service', 'Commission']}
            year={2020}
          />
          <div className="grid-col grid-col:7@m grid-col:6@l">
            <Figure
              alt="Hankkija website in phone"
              sizes={`${MQ.l} 50vw, ${MQ.m} 60vw, 100vw`}
              {...getImage('joonassandell-hankkija-mobile', images)}
            />
          </div>
          <div className="grid-col grid-col:7@m">
            <Figure
              alt="Hankkija homepage"
              sizes={`${MQ.m} 60vw, 100vw`}
              {...getImage('joonassandell-hankkija-home', images)}
            />
          </div>
          <div className="grid-col grid-col:10 grid-col:5@m">
            <Figure
              alt="Another Hankkija homepage"
              inViewOffset={0.5}
              sizes={`${MQ.m} 40vw, 80vw`}
              {...getImage('joonassandell-hankkija-home-2', images)}
            />
          </div>
          <div className="grid-col grid-col:10 -start:3 grid-col:6@m">
            <Figure
              alt="Hankkija subpages"
              sizes={`${MQ.m} 33vw, 80vw`}
              {...getImage('joonassandell-hankkija-views', images)}
            />
          </div>
          <div className="grid-col grid-col:10@s grid-col:4@m">
            <Text animate>
              <p>
                I had the honor to design and develop Hankkija's new
                international website. The fresh user interface innovated the
                client to expand the design to other marketing materials as
                well.
              </p>
            </Text>
          </div>
        </TemplateSection>
        <TemplateSection id="hukka" gridRowGap="l" paddingTop="20vw">
          <div className="grid-col grid-col:10@m grid-col:6@l">
            <Figure
              alt="Hukka dashboard mobile view"
              sizes={`${MQ.l} 50vw, ${MQ.m} 80vw, 100vw`}
              {...getImage('joonassandell-hukka-mobile', images)}
            />
          </div>
          <SubInfo
            client={{ name: 'Luke', href: 'https://luke.fi' }}
            heading="Hukka"
            role={['UI/UX design', 'App development']}
            text={
              <p>
                Natural Resources Institute Finland (Luke) is a research
                organisation that builds sustainable future and well-being from
                renewable natural resources.
              </p>
            }
            type={['Web application']}
            year={2019}
          />
          <div className="grid-col grid-col:3@m">
            <Text animate>
              <p>
                Luke needed an application for their food waste research
                project, so we build them one with Laravel and React.
              </p>
              <p>
                In the feedback survey 97% of the users mentioned that the user
                interface was extremely easy to use. 💪
              </p>
              <Text color="light">
                <small>
                  Built together with awesome people from Mediasignal
                </small>
              </Text>
            </Text>
          </div>
          <div className="grid-col grid-col:9@m -end">
            <Figure
              alt="Hukka dashboard desktop view"
              sizes="80vw"
              {...getImage('joonassandell-hukka', images)}
            />
          </div>
        </TemplateSection>
        <TemplateSection
          id="academic-bookstore"
          gridRowGap="l"
          paddingTop="15vw"
        >
          <SubInfo
            client={{ name: 'Bonnier Books' }}
            heading="Academic Bookstore"
            role={['UI/UX design', 'Web development', 'App development']}
            text={
              <p>
                The Academic Bookstore's ambition is to be a quality bookstore
                in modern time. The Academic Bookstore has a long-standing
                commitment to reading and life-long learning.
              </p>
            }
            type={['Web service', 'E-commerce', 'Commission']}
            year={2016}
          />
          <div className="grid-col grid-col:7@m grid-col:6@l">
            <Figure
              alt="Initial Academic bookstore home page"
              sizes={`${MQ.l} 50vw, ${MQ.m} 80vw, 100vw`}
              {...getImage(
                'joonassandell-academic-bookstore-home-initial',
                images,
              )}
            />
          </div>
          <div className="grid-col grid-col:8@m">
            <Figure
              alt="Academic bookstore home page"
              sizes={`${MQ.m} 70vw, 100vw`}
              {...getImage('joonassandell-academic-bookstore-home', images)}
            />
          </div>
          <div className="grid-col grid-col:4@m">
            <Text animate>
              <p>
                Bonnier Books signed a deal to acquire the operations of Finnish
                bookstore chain Academic Bookstore from Stockmann. The client
                wanted us to create them a new website to reflect this change in
                operations.
              </p>
              <p>
                This change required rapid actions, so we quickly crafted
                initial webpage which then developed to an e-commerce store.
              </p>
              <p>
                We also developed a web application called "Lukupassi" to
                encourage people to read more.
              </p>
              <Text color="light">
                <small>
                  Crafted together with professionals from Mediasignal
                </small>
              </Text>
            </Text>
          </div>
        </TemplateSection>
        <TemplateSection
          id="academic-bookstore-brand-images"
          paddingTop="10vw"
          wrap={false}
        >
          <div className="grid-col grid-col:5 grid-col:3@m">
            <Figure
              alt="Academic bookstore brand imagery of children reading"
              mask
              sizes={`${MQ.m} 25vw, 40vw`}
              transition="clip"
              {...getImage('joonassandell-academic-bookstore-brand-3', images)}
            />
          </div>
          <div className="grid-col grid-col:6 grid-col:4@m -align:end">
            <Figure
              alt="Academic bookstore brand imagery of woman reading"
              mask
              inViewOffset={0.5}
              scrollSpeed="negative"
              sizes={`${MQ.m} 33vw, 50vw`}
              transition="clip"
              {...getImage('joonassandell-academic-bookstore-brand-2', images)}
            />
          </div>
          <div className="grid-col grid-col:6 grid-col:5@m">
            <Figure
              alt="Academic bookstore brand imagery of man reading"
              mask
              inViewOffset={0.5}
              sizes={`${MQ.m} 40vw, 50vw`}
              transition="clip"
              {...getImage('joonassandell-academic-bookstore-brand', images)}
            />
          </div>
        </TemplateSection>
        <TemplateSection id="rubik" gridRowGap="l" paddingTop="15vw">
          <SubInfo
            client={{ name: 'Mediasignal' }}
            heading="Rubik"
            role={['Product design', 'App development']}
            text={
              <>
                <p>
                  Rubik is a product information management (PIM) system which
                  helps clients to easily manage, integrate and share their
                  product portfolios. I was leading the product design and was
                  partially involved in the front-end development.
                </p>
                <Text color="light">
                  <small>Built together with people from Mediasignal</small>
                </Text>
              </>
            }
            type={['Web application', 'Commission']}
            year={2016}
          />
          <div className="grid-col grid-col:9@m grid-col:6@l">
            <Figure
              alt="Hukka dashboard mobile view"
              sizes={`${MQ.l} 50vw, ${MQ.m} 80vw, 100vw`}
              {...getImage('joonassandell-rubik-products-custom', images)}
            />
          </div>
          <div className="grid-col grid-col:9@m -start:4@m grid-col:8@l -start:1@l">
            <Figure
              alt="HW-Company home page"
              sizes={`${MQ.l} 70vw, ${MQ.m} 80vw, 100vw`}
              {...getImage('joonassandell-rubik-products', images)}
            />
          </div>
        </TemplateSection>
      </TemplateMain>
      <NextProject id={nextProjectId} />
    </Template>
  );
};
