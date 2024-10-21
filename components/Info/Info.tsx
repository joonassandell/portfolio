import { Button } from '@/components//Button';
import { ConditionalWrapper } from '@/components/ConditionalWrapper';
import { Heading } from '@/components/Heading';
import { Hr } from '@/components/Hr';
import { type InfoProps } from './';
import { Link } from '@/components/Link';
import { m } from 'framer-motion';
import { MOVE_IN_VARIANTS, MQ } from '@/lib/config';
import { Text } from '@/components/Text';
import { useInView } from '@/lib/useInView';
import { useMedia } from 'react-use';
import { useParallax } from '@/lib/useParallax';
import { useRef } from 'react';

export const Info = ({
  client,
  heading,
  role = [],
  smallPrint,
  tech,
  text,
  toc,
  type = [],
  year,
}: InfoProps) => {
  const { href, name } = client || {};
  const mqL = useMedia(MQ.l, false);
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef);
  const tocRef = useRef(null);
  const tocInView = useInView(tocRef);
  const { ref, value: y } = useParallax({
    offset: 'start-center',
    speed: 'slow',
  });

  return (
    <div className="Info" ref={ref}>
      <div className="grid -gap:row:l wrap align-items:start">
        <Hr className="grid-col mb:xs mb:ml@m" style={{ y }} />
        <m.div
          animate={gridInView && 'animate'}
          className="grid grid-col grid-col:5@l"
          initial="initial"
          ref={gridRef}
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <m.div
            className="grid -gap:column:0 place-content:space-between grid-col grid-col:6 grid-col:9@m grid-col:5@l"
            variants={MOVE_IN_VARIANTS}
          >
            <div className="grid-col grid-col:4@m grid-col:12@l">
              <Text className="mb:2xs" color="mute" size="s" tag="p">
                Client
              </Text>
              <Text className="mb:0" size="s" tag="p">
                <ConditionalWrapper
                  condition={Boolean(href)}
                  wrapper={children => (
                    <Link href={href as URL['href']}>{children}</Link>
                  )}
                >
                  {name}
                </ConditionalWrapper>
              </Text>
            </div>
            <div className="grid-col grid-col:4@m grid-col:12@l">
              <Text className="mb:2xs" color="mute" size="s" tag="p">
                Year
              </Text>
              <Text className="mb:0" size="s" tag="p">
                {year}
              </Text>
            </div>
            <div className="grid-col grid-col:4@m grid-col:12@l grid -gap:column:0">
              <div className="grid-col">
                <Text className="mb:2xs" color="mute" size="s" tag="p">
                  Project type
                </Text>
                <Text size="s" tag="ul">
                  {type.map((type, i) => (
                    <li key={i}>{type}</li>
                  ))}
                </Text>
              </div>
              {tech && (
                <div className="grid-col visible@m hidden@l">
                  <Text className="mb:2xs" color="mute" size="s" tag="p">
                    Tech
                  </Text>
                  <Text className="grid-col" size="s" tag="ul">
                    {tech.map((tech, i) => (
                      <li key={i}>{tech}</li>
                    ))}
                  </Text>
                </div>
              )}
            </div>
          </m.div>
          <m.div
            className="grid -gap:column:0 place-content:space-between grid-col grid-col:6 grid-col:4@s grid-col:3@m grid-col:5@l"
            variants={MOVE_IN_VARIANTS}
          >
            <div className="grid-col">
              <Text className="mb:2xs" color="mute" size="s">
                Role
              </Text>
              <Text className="grid-col" size="s" tag="ul">
                {role.map((role, i) => (
                  <li key={i}>{role}</li>
                ))}
              </Text>
            </div>
            {tech && (
              <div className="grid-col hidden@m:max@l">
                <Text className="mb:2xs" color="mute" size="s" tag="p">
                  Tech
                </Text>
                <Text className="grid-col" size="s" tag="ul">
                  {tech.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </Text>
              </div>
            )}
            <Text className="grid-col" color="mute" size="xs" tag="small">
              {smallPrint}
            </Text>
          </m.div>
        </m.div>
        <div className="grid-col grid-col:9@m grid-col:7@l grid -gap:0">
          <Heading
            animate
            className="grid-col mb:m"
            custom={{ delay: mqL ? 0.4 : 0 }}
            size="h4"
            tag="h2"
          >
            {heading}
          </Heading>
          <Text
            animate
            className="Info-text grid-col grid-col:8@s grid-col:7@l"
            custom={{ delay: mqL ? 0.4 : 0 }}
          >
            {text}
          </Text>
        </div>
      </div>
      {toc && (
        <m.div
          animate={tocInView && 'animate'}
          className="grid -gap:row:l wrap@l pr:0 scrollbar white-space:nowrap"
          custom={{ delay: mqL ? 0.4 : 0 }}
          initial="initial"
          ref={tocRef}
          variants={MOVE_IN_VARIANTS}
        >
          <div className="grid-col grid-col:7@l -end flex gap">
            <div className="Info-toc flex gap:s">
              {toc.map((toc, i) => (
                <Button href={toc.href} key={i} size="s">
                  {toc.text}
                </Button>
              ))}
            </div>
          </div>
        </m.div>
      )}
    </div>
  );
};
