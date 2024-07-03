import { ArrowRight } from '@/components/Icon';
import { Figure } from '@/components/Figure';
import { getImage, getSitemap } from '@/lib/utils';
import { Head } from '@/components/Head';
import { Info } from '@/components/Info';
import { Link } from '@/components/Link';
import { MoreWorkHero } from './';
import { MQ } from '@/lib/config';
import { NextProject } from '@/components/NextProject';
import { type PageProps } from '@/types';
import { SubInfo } from '@/components/SubInfo';
import { Template, TemplateMain, TemplateSection } from '@/components/Template';
import { Text } from '@/components/Text';
import { useSetThemeColor } from '@/components/App';
import sitemap from './sitemap';

export const MoreWorkPage = ({ images }: PageProps) => {
  const { id: nextProjectId } = getSitemap('biocode');
  const archive = getSitemap('archive');
  useSetThemeColor(sitemap.meta.themeColor);

  return (
    <Template id={sitemap.id} variant="unstyled">
      <Head title={sitemap.meta.title} />
      <TemplateMain>
        <MoreWorkHero />
        <Info
          client={{ name: 'Various' }}
          heading="So you wanted to see more, nice! This collection brings together a range of designs, primarily focused on websites and applications that I’ve crafted for a diverse set of clients."
          role={[
            'UI/UX/Brand designs',
            'Web development',
            'Concept strategies',
          ]}
          smallPrint="Some projects may present initial designs and prototypes."
          text={
            <p>
              I assume you have already noticed my keen focus on creating
              polished interfaces and meaningful experiences. So, I thought I
              might as well deliver you some more.
            </p>
          }
          type={['Web services', 'Web applications', 'Commissions']}
          year={sitemap.year}
        />
        <TemplateSection gridRowGap="l" id="hw-company" pt="15vw">
          <SubInfo
            client={{ name: 'HW-Company' }}
            heading="HW-Company 🏌️"
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
          <div className="grid-col grid-col:9@m -end grid-col:6@l">
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
          <div className="grid-col grid-col:4@m">
            <Text animate>
              <p>
                I was asked to design and develop website for the companys newly
                updated brand. The main goal was to improve HW-Company’s brand,
                improve usability, and give website users a comprehensive
                picture of HW-Company’s activities around the world.
              </p>
              <Text color="mute" size="xs" tag="small">
                Built together with awesome people from Porkka & Kuutsa.
              </Text>
            </Text>
          </div>
          <div className="grid-col grid-col:7@m -start:6@m -start:5@l">
            <Figure
              alt="HW-Company products page"
              sizes={`${MQ.m} 60vw, 100vw`}
              {...getImage('joonassandell-hw-company-products', images)}
            />
          </div>
        </TemplateSection>
        <TemplateSection gridRowGap="l" id="omoroi" pt="15vw">
          <div className="grid-col grid-col:8@m grid-col:6@l">
            <Figure
              alt="Omoroi homepage"
              sizes={`${MQ.l} 50vw, ${MQ.m} 70vw, 100vw`}
              {...getImage('joonassandell-omoroi-home', images)}
            />
          </div>
          <SubInfo
            client={{ href: 'https://omoroi.fi', name: 'Omoroi' }}
            heading="Omoroi 👨🏻‍💻"
            role={['UI/UX design', 'Web development']}
            text={
              <p>
                Omoroi is your friend in software development and automation and
                they love developing software and everything that comes with it.
                Omoroi wanted me to design and develop them a website that
                reflected their company brand, so I delivered one with some
                "version control" inspired aesthetics.
              </p>
            }
            type={['Web service']}
            year={2020}
          />
          <div className="grid-col grid-col:6@m -start:1@m">
            <Figure
              alt="Omoroi homepage animation"
              src="/more-work/joonassandell-omoroi-home-animation.mp4"
            />
          </div>
          <div className="grid-col grid-col:6@m">
            <Figure
              alt="Omoroi mobile views"
              inViewOffset={0.5}
              sizes={`${MQ.m} 50vw, 100vw`}
              {...getImage('joonassandell-omoroi-mobile', images)}
            />
          </div>
        </TemplateSection>
        <TemplateSection gridRowGap="l" id="hankkija" pt="15vw">
          <SubInfo
            client={{ name: 'Hankkija' }}
            heading="Hankkija 🍃"
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
                I had the honor to design and develop Hankkija’s new
                international website. The fresh user interface innovated the
                client to expand the design to other marketing materials as
                well.
              </p>
            </Text>
          </div>
        </TemplateSection>
        <TemplateSection gridRowGap="l" id="hukka" pt="15vw">
          <div className="grid-col grid-col:8@m grid-col:6@l">
            <Figure
              alt="Hukka dashboard mobile view"
              sizes={`${MQ.l} 50vw, ${MQ.m} 70vw, 100vw`}
              {...getImage('joonassandell-hukka-mobile', images)}
            />
          </div>
          <SubInfo
            client={{ name: 'Luke' }}
            heading="Hukka 🥒"
            role={['UI/UX design', 'App development']}
            text={
              <p>
                Natural Resources Institute Finland (Luke) is a research
                organisation that builds sustainable future and well-being from
                renewable natural resources.
              </p>
            }
            type={['Web application', 'Commission']}
            year={2019}
          />
          <div className="grid-col grid-col:4@m grid-col:4@l">
            <Text animate>
              <p>
                Luke needed an application for their food waste research
                project, so we build them one with Laravel and React.
              </p>
              <p>
                In the feedback survey 97% of the users mentioned that the user
                interface was extremely easy to use. 💪
              </p>
              <Text color="mute" size="xs" tag="small">
                Built together with awesome people from Mediasignal.
              </Text>
            </Text>
          </div>
          <div className="grid-col grid-col:9@m grid-col:8@l -end">
            <Figure
              alt="Hukka dashboard desktop view"
              sizes={`${MQ.l} 70vw, ${MQ.m} 80vw, 100vw`}
              {...getImage('joonassandell-hukka', images)}
            />
          </div>
        </TemplateSection>
        <TemplateSection gridRowGap="l" id="academic-bookstore" pt="15vw">
          <SubInfo
            client={{ name: 'Bonnier Books' }}
            heading="Academic Bookstore 📚"
            role={['UI/UX design', 'Web development', 'App development']}
            text={
              <p>
                The Academic Bookstore’s ambition is to be a quality bookstore
                in modern time. The Academic Bookstore has a long-standing
                commitment to reading and life-long learning.
              </p>
            }
            type={['Web service', 'E-commerce', 'Commission']}
            year={2016}
          />
          <div className="grid-col grid-col:8@m grid-col:6@l -end -align:center">
            <Figure
              alt="Academic bookstore initial home page"
              sizes={`${MQ.l} 50vw, ${MQ.m} 70vw, 100vw`}
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
              <Text color="mute" size="xs" tag="small">
                Crafted together with professionals from Mediasignal.
              </Text>
            </Text>
          </div>
        </TemplateSection>
        <TemplateSection pt="2xl">
          <div className="grid-col grid-col:6">
            <Figure
              alt="Academic bookstore brand imagery of woman reading"
              scroll="mask"
              scrollImageSpeed={-2}
              sizes="50vw"
              transition="clip"
              {...getImage('joonassandell-academic-bookstore-brand-2', images)}
            />
          </div>
          <div className="grid-col grid-col:6 -align:end">
            <Figure
              alt="Academic bookstore brand imagery of man reading"
              scroll="mask"
              sizes="50vw"
              transition="clip"
              {...getImage('joonassandell-academic-bookstore-brand', images)}
            />
          </div>
        </TemplateSection>
        <TemplateSection gridRowGap="l" id="rubik" pt="15vw">
          <SubInfo
            client={{ name: 'Mediasignal' }}
            heading="Rubik 📦"
            role={['Product design', 'App development']}
            text={
              <>
                <p>
                  Rubik is a product information management (PIM) system which
                  helps clients to easily manage, integrate and share their
                  product portfolios. I was leading the product design and was
                  partially involved in the front-end development.
                </p>
                <Text color="mute" size="xs" tag="small">
                  Built together with people from Mediasignal.
                </Text>
              </>
            }
            type={['Web application', 'Commission']}
            year={2017}
          />
          <div className="grid-col grid-col:11 grid-col:9@m grid-col:6@l">
            <Figure
              alt="Rubik products page"
              sizes={`${MQ.l} 50vw, ${MQ.m} 80vw, 90vw`}
              {...getImage('joonassandell-rubik-products-custom', images)}
            />
          </div>
          <div className="grid-col grid-col:11 -start:2 grid-col:9@m -start:4@m grid-col:8@l -start:1@l">
            <Figure
              alt="Rubik customized products page"
              sizes={`${MQ.m} 70vw, ${MQ.m} 80vw, 90vw`}
              {...getImage('joonassandell-rubik-products', images)}
            />
          </div>
        </TemplateSection>
        <TemplateSection gridRowGap="l" id="takk" pt="15vw">
          <div className="grid-col grid-col:8@m grid-col:6@l">
            <Figure
              alt="TAKK homepage in laptop"
              sizes={`${MQ.l} 50vw, ${MQ.m} 70vw, 100vw`}
              {...getImage('joonassandell-takk-home', images)}
            />
          </div>
          <SubInfo
            client={{ name: 'TAKK' }}
            heading="TAKK 👩🏻‍🎓"
            role={['UI/UX design', 'Web development']}
            text={
              <p>
                Tampere Adult Education Centre, TAKK, is a multisectoral
                vocational educator and working life developer. Annually, there
                are over 11k students, and the number of employees is around
                260.
              </p>
            }
            type={['Web service', 'Commission']}
            year={2017}
          />
          <div className="grid-col grid-col:4@m grid-col:4@l">
            <Text animate>
              <p>
                The service offers target group-specific information and easy
                access to TAKK’s training offerings.
              </p>
              <p>
                TAKK appreciated our versatile expertise, from planning tasks to
                demanding technical forms of implementation.
              </p>
              <Text color="mute" size="xs" tag="small">
                Built together with people from Mediasignal.
              </Text>
            </Text>
          </div>
          <div className="grid-col grid-col:9@m -end grid-col:8@l">
            <Figure
              alt="TAKK home page animation"
              src="/more-work/joonassandell-takk-home.mp4"
            />
          </div>
        </TemplateSection>
        <TemplateSection gridRowGap="l" id="finnpark" pt="15vw">
          <SubInfo
            client={{ name: 'Finnpark' }}
            heading="Parking Guidance App 🛞"
            role={['Product design', 'App development']}
            text={
              <p>
                Finnpark designs and produces smart parking services that make
                movement easier and offer offices for parking and business
                needs. We built a parking hall guiding service for the client
                which helps drivers to navigate easily to the wanted
                destination.
              </p>
            }
            type={['Web application', 'Commission']}
            year={2015}
          />
          <div className="grid-col grid-col:11 grid-col:8@m -start:5@m grid-col:6@l -start:7@l">
            <Figure
              alt="Finnpark kivisydän guidance service first phase in TV"
              sizes={`${MQ.l} 50vw, ${MQ.m} 70vw, 90vw`}
              {...getImage('joonassandell-finnpark-parking-guidance', images)}
            />
          </div>
          <div className="grid-col grid-col:11 -start:2 grid-col:8@m -start:1@m">
            <Figure
              alt="Finnpark kivisydän guidance service second phase in TV"
              sizes={`${MQ.m} 70vw, 90vw`}
              {...getImage('joonassandell-finnpark-parking-guidance-2', images)}
            />
          </div>
          <div className="grid-col grid-col:4@m">
            <Text animate>
              <p>
                Among many parking applications we built for Finnpark, this one
                was the most interesting to me because this platform and
                environment differed from the usual applications I was used to
                building. I was responsible for the UI/UX design and front-end
                development.
              </p>
              <Text color="mute" size="xs" tag="small">
                Crafted together with professionals from Mediasignal.
              </Text>
            </Text>
          </div>
        </TemplateSection>
        <TemplateSection gridRowGap="l" id="archive" pb="15vw" pt="15vw">
          <div className="grid-col grid-col:6@l">
            <Figure
              alt="Jatke homepage in laptop"
              sizes={`${MQ.l} 50vw, 100vw`}
              {...getImage('joonassandell-archive', images)}
            />
          </div>
          <SubInfo
            client={{ name: 'Various' }}
            heading="Glimpses from the past 📜"
            role={['UI/UX design', 'Web development']}
            text={
              <>
                <p>
                  Want to see even more? Then checkout the
                  <Link href={archive.url}>archive</Link> featuring clients such
                  as Fair Trade, Avecra, City of Tampere and Vapriikki.
                </p>
                <Link
                  href={archive.url}
                  icon={<ArrowRight />}
                  underline={false}
                >
                  Archive
                </Link>
              </>
            }
            type={['Web services', 'Web applications', 'Commissions']}
            year={archive.year}
          />
        </TemplateSection>
      </TemplateMain>
      <NextProject id={nextProjectId} />
    </Template>
  );
};
