import { ConditionalWrapper } from '@/components/ConditionalWrapper';
import { Heading } from '@/components/Heading';
import { Hr } from '@/components/Hr';
import { Link } from '@/components/Link';
import { m } from 'motion/react';
import { MOVE_IN_VARIANTS } from '@/lib/config';
import { type SubInfoProps } from './';
import { Text } from '@/components/Text';
import { useInView } from '@/lib/useInView';
import { useRef } from 'react';

export const SubInfo = ({
  client,
  heading,
  role = [],
  text,
  type = [],
  year,
}: SubInfoProps) => {
  const { href, name } = client || {};
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef);

  return (
    <div className="SubInfo grid-col grid-col:6@l">
      <Hr className="SubInfo-ruler mb:ml" />
      <m.div
        animate={gridInView && 'animate'}
        className="grid"
        initial="initial"
        ref={gridRef}
        variants={{
          animate: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {heading && (
          <div className="grid-col">
            <Heading className="mb:0" size="h4" variants={MOVE_IN_VARIANTS}>
              {heading}
            </Heading>
          </div>
        )}
        <m.div
          className="grid-col grid-col:6 grid-col:4@s"
          variants={MOVE_IN_VARIANTS}
        >
          <Text className="mb:2xs" color="mute" size="s" tag="p">
            Client & Year
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
            {' ✳︎ '}
            {year}
          </Text>
        </m.div>
        <m.div
          className="grid-col grid-col:6 grid-col:4@s"
          variants={MOVE_IN_VARIANTS}
        >
          <Text className="mb:2xs" color="mute" size="s" tag="p">
            Role
          </Text>
          <Text size="s" tag="ul">
            {role.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </Text>
        </m.div>
        <m.div
          className="grid-col grid-col:6 grid-col:4@s"
          variants={MOVE_IN_VARIANTS}
        >
          <Text className="mb:2xs" color="mute" size="s" tag="p">
            Project type
          </Text>
          <Text size="s" tag="ul">
            {type.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </Text>
        </m.div>
        <Text
          className="SubInfo-text grid-col grid-col:8@s -start:5@s grid-col:6@m grid-col:9@l -start:1@l"
          variants={MOVE_IN_VARIANTS}
        >
          {text}
        </Text>
      </m.div>
    </div>
  );
};
