import { ArrowRight } from '@/components/Icon';
import { Button } from '@/components/Button';
import { Figure } from '@/components/Figure';
import { Head } from '@/components/Head';
import { Heading } from '@/components/Heading';
import { JUMP_FIX_VARIANTS, SCROLL_SPEED } from '@/lib/config';
import { m } from 'framer-motion';
import { type PageProps } from '@/types';
import { Template, TemplateMain, TemplateSection } from '@/components/Template';
import { Text } from '@/components/Text';
import { useApp, useSetThemeColor } from '@/components/App';
import { useInView } from '@/lib/useInView';
import { useRef } from 'react';
import lineCube from '@/public/about/line-cube.png';
import profile from '@/public/about/joonassandell-profile.png';

export const ApproachPage = ({ id, themeColor, title }: PageProps) => {
  useSetThemeColor(themeColor);
  const { transition } = useApp();
  const lineCubeAnim = useRef(null);
  const lineCubeInView = useInView(lineCubeAnim, 0, false);

  return (
    <Template id={id}>
      <Head
        description="My goal is to create unique, appealing, accessible, and user-friendly products while staying up to date with the latest standards and trends in today’s rapidly evolving digital world."
        title={title}
      />
      <TemplateMain>
        <TemplateSection className="Template-top" grid={false}>
          <Heading
            className="Template-heading Template-heading--desktop visible@l"
            size="h2"
            tag="h1"
          >
            <Text className="Template-heading-subtitle" tag="span">
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
            <div
              aria-hidden
              className="Template-cube"
              data-s
              data-s-position="top"
              data-s-speed={SCROLL_SPEED}
            >
              <m.div
                animate={lineCubeInView ? 'animate' : ''}
                ref={lineCubeAnim}
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
              Layouts that stand out from the crowd, creative{' '}
            </span>
            <Figure
              alt="Joonas Sandell"
              className="Template-profileMobile hidden@l"
              scrollPosition="top"
              sizes="25vw"
              {...profile}
            />
            <span className="hidden@l">
              use of code, and carefully crafted prototypes make me a confident
              design engineer.
            </span>
          </Heading>
        </TemplateSection>
        <TemplateSection gridRowGap={false} paddingBottom="10vw" paddingTop="l">
          <div className="grid-col grid-col:6@m grid-col:4@l">
            <Text animate className="mb:m">
              <p>
                In my approach to design, I generally prioritise adherence to UI
                conventions while infusing subtle, unique elements that enhance
                user engagement. I firmly believe that good design should be
                intuitive and seamless, striving for invisibility while ensuring
                that every interaction feels polished and refined.
              </p>
            </Text>
            <Text animate className="mb:m">
              <p>
                <em>“Good design is invisible”</em> like some say and I believe
                that’s a good mindset to have when building a successful
                product.
              </p>
            </Text>
            <Text animate className="mb:m">
              <p>
                In designing interfaces and end-to-end websites, I consider a
                multitude of factors, including accessibility, UX principles,
                target group, value for end users, consistency, conversion rate
                and business logic. While I recognise the importance of
                aesthetics, I firmly believe that data-driven content reigns
                supreme, collaborating closely with copywriters and marketing
                team to ensure that messaging is concise and impactful without
                compromising visual appeal.
              </p>
            </Text>
          </div>
          <div className="grid-col grid-col:6@m grid-col:4@l">
            <Text animate className="mb:m">
              <p>
                When it comes to coding, I adhere to best practices, writing
                clean, maintainable code with meaningful variable names and
                thorough documentation. I prioritise simplicity over complexity,
                actively seeking to streamline solutions and avoid shortcuts or
                hacks whenever possible.
              </p>
            </Text>
            <Text animate className="mb:m">
              <p>
                I’m both systematic and adaptive in my approach, valuing
                organization and adherence to project guidelines while remaining
                flexible enough to accommodate evolving requirements. For me,
                the DX is paramount, and I am dedicated to fostering an
                environment where everyone can contribute effectively to
                building exceptional products.
              </p>
            </Text>
            <Text animate className="mb:m">
              <p>
                To put it simply, for me, it’s both how it works and how it
                looks.
              </p>
              <Button href="/about" icon={<ArrowRight />}>
                About me
              </Button>
            </Text>
          </div>
          <m.div
            animate="animate"
            className="Template-profile grid-col grid-col:4@l visible@l"
            initial={transition === 'template' && 'initial'}
            variants={JUMP_FIX_VARIANTS}
          >
            <Figure
              alt="Joonas Sandell"
              borderRadius="var(--border-radius-pill)"
              inViewOffset={-1}
              mask
              sizes="25vw"
              {...profile}
            />
          </m.div>
        </TemplateSection>
      </TemplateMain>
    </Template>
  );
};
