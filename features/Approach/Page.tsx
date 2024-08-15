import { ArrowRight } from '@/components/Icon';
import { Button } from '@/components/Button';
import { Figure } from '@/components/Figure';
import { Head } from '@/components/Head';
import { Heading } from '@/components/Heading';
import { m } from 'framer-motion';
import { SITEMAP } from '@/lib/sitemap';
import { Template, TemplateMain, TemplateSection } from '@/components/Template';
import { Text } from '@/components/Text';
import { useInView } from '@/lib/useInView';
import { useParallax } from '@/lib/useParallax';
import { useRef } from 'react';
import { useSetThemeColor } from '@/components/App';
import lineCube from '@/public/images/line-cube.png';
import profile from '@/public/images/joonassandell-profile-4.jpg';

export const ApproachPage = () => {
  const { id, meta } = SITEMAP.approach;
  useSetThemeColor(meta.themeColor);
  const lineCubeAnim = useRef(null);
  const lineCubeInView = useInView(lineCubeAnim, 0, false);
  const { ref, value: y } = useParallax({ offset: 'start-start' });

  return (
    <Template id={id}>
      <Head description={meta.description} title={meta.title} />
      <TemplateMain>
        <TemplateSection className="Template-top" grid={false} ref={ref}>
          <Heading className="Template-heading visible@l" size="h2" tag="h1">
            <Text className="Template-heading-subtitle" size="m" tag="span">
              Approach
            </Text>
            My goal is to create unique, appealing, accessible and user-friendly
            products while staying up to date with the latest standards and
            trends in today’s rapidly evolving digital world. Layouts that stand
            out from the crowd, creative use of code, and carefully crafted
            prototypes make me a confident design engineer.
          </Heading>
          <Heading
            className="Template-heading Template-heading--mobile mb:0"
            size="h4"
            tag="div"
          >
            <div aria-hidden className="Template-cube">
              <m.div
                animate={lineCubeInView ? 'animate' : ''}
                ref={lineCubeAnim}
                style={{ y }}
                variants={{
                  animate: {
                    rotate: 360,
                    transition: {
                      duration: 20,
                      ease: 'linear',
                      repeat: Infinity,
                    },
                  },
                }}
              >
                <Figure
                  alt="Abstract line cube"
                  borderRadius={false}
                  placeholder={false}
                  sizes="25vw"
                  {...lineCube}
                />
              </m.div>
            </div>
            <span className="hidden@l">
              My goal is to create unique, appealing, accessible and
              user-friendly products while staying up to date with the latest
              standards and trends in today’s rapidly evolving digital world.
              Layouts that stand out from the crowd, creative use of code,{' '}
            </span>
            <Figure
              alt="Joonas Sandell"
              animate={false}
              className="Template-profileMobile hidden@l"
              sizes="25vw"
              {...profile}
            />
            <span className="hidden@l">
              and carefully crafted prototypes make me a confident design
              engineer.
            </span>
          </Heading>
        </TemplateSection>
        <TemplateSection gridRowGap={false} pb="10vw" pt="l">
          <div className="grid-col grid-col:6@m grid-col:4@l">
            <Text animate tag="p">
              In my approach to design, I generally prioritise adherence to UI
              conventions while infusing subtle, unique elements that enhance
              user engagement. I firmly believe that good design should be
              intuitive and seamless, striving for invisibility while ensuring
              that every interaction feels polished and refined.
            </Text>
            <Text animate tag="p">
              <q>Good design is invisible</q> like some say and I believe that’s
              a good mindset to have when building a successful product.
            </Text>
            <Text animate tag="p">
              In designing interfaces and end-to-end websites, I consider a
              multitude of factors, including accessibility, UX principles,
              target group, value for end users, consistency, conversion rate
              and business logic. While I recognise the importance of
              aesthetics, I firmly believe that data-driven content reigns
              supreme, collaborating closely with copywriters and marketing team
              to ensure that messaging is concise and impactful without
              compromising visual appeal.
            </Text>
          </div>
          <div className="grid-col grid-col:6@m grid-col:4@l">
            <Text animate tag="p">
              When it comes to coding, I adhere to best practices, writing
              clean, maintainable code with meaningful variable names and
              thorough documentation. I prioritise simplicity over complexity,
              actively seeking to streamline solutions and avoid shortcuts or
              hacks whenever possible.
            </Text>
            <Text animate tag="p">
              I’m both systematic and adaptive in my approach, valuing
              organization and adherence to project guidelines while remaining
              flexible enough to accommodate evolving requirements. For me, the
              DX is paramount, and I am dedicated to fostering an environment
              where everyone can contribute effectively to building exceptional
              products.
            </Text>
            <Text animate>
              <p>
                To put it simply, for me, it’s both how it works and how it
                looks.
              </p>
              <Button href="/about" icon={<ArrowRight />}>
                About me
              </Button>
            </Text>
          </div>
          <div className="Template-profile grid-col grid-col:4@l visible@l">
            <Figure
              alt="Joonas Sandell profile picture"
              borderRadius="var(--border-radius-pill)"
              inViewOffset={-1}
              scroll="mask"
              scrollMaxClientHeight={560}
              sizes="25vw"
              {...profile}
            />
          </div>
        </TemplateSection>
      </TemplateMain>
    </Template>
  );
};
