import { m } from 'framer-motion';
import { Link } from '@/components/Link';
import { Text } from '@/components/Text';
import { Hr } from '@/components/Hr';
import { Heading } from '@/components/Heading';
import { ConditionalWrapper } from '@/components/ConditionalWrapper';
import { useInView } from '@/lib/useInView';
import { TEXT_VARIANTS } from '@/lib/config';
import { useRef } from 'react';

export const SubInfo = ({
  client,
  heading,
  role = [],
  text,
  type = [],
  year,
}) => {
  const { name, href } = client || {};
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef);

  return (
    <div className="SubInfo grid-col grid-col:6@l">
      <Hr className="SubInfo-ruler" />
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
          <m.div className="grid-col" variants={TEXT_VARIANTS}>
            <Heading className="mb:0" size="h4">
              {heading}
            </Heading>
          </m.div>
        )}
        <m.div
          className="grid-col grid-col:6 grid-col:4@s"
          variants={TEXT_VARIANTS}
        >
          <Text marginBottom="2xs" color="light" size="s" tag="p">
            Client & Year
          </Text>
          <Text size="s" tag="p">
            <ConditionalWrapper
              condition={href}
              wrapper={children => (
                <Link href={href} underline>
                  {children}
                </Link>
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
          variants={TEXT_VARIANTS}
        >
          <Text marginBottom="2xs" color="light" size="s" tag="p">
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
          variants={TEXT_VARIANTS}
        >
          <Text marginBottom="2xs" color="light" size="s" tag="p">
            Project type
          </Text>
          <Text size="s" tag="ul">
            {type.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </Text>
        </m.div>
        <m.div
          className="SubInfo-text grid-col grid-col:8@s -start:5@s grid-col:6@m grid-col:8@l -start:1@l mt:s@s"
          variants={TEXT_VARIANTS}
        >
          <Text>{text}</Text>
        </m.div>
      </m.div>
    </div>
  );
};
