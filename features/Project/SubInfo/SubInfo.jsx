import { m } from 'framer-motion';
import { Link } from '@/components/Link';
import { Text } from '@/components/Text';
import { Heading } from '@/components/Heading';
import { ConditionalWrapper } from '@/components/ConditionalWrapper';
import { useInView } from '@/lib/useInView';
import { TEXT_VARIANTS_DEFAULT, RULER_VARIANTS } from '@/lib/config';
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
  const rulerRef = useRef(null);
  const rulerInView = useInView(rulerRef, 0.5);
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, 0.5);

  return (
    <div className="SubInfo grid-col grid-col:6@l">
      <m.hr
        animate={rulerInView && 'animate'}
        className="SubInfo-ruler"
        initial="initial"
        ref={rulerRef}
        variants={RULER_VARIANTS}
      />
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
          <m.div className="grid-col" variants={TEXT_VARIANTS_DEFAULT}>
            <Heading className="mb:0" size="h4">
              {heading}
            </Heading>
          </m.div>
        )}
        <m.div
          className="grid-col grid-col:6 grid-col:4@s"
          variants={TEXT_VARIANTS_DEFAULT}
        >
          <Text marginBottom="xxSmall" color="light" size="small" tag="p">
            Client & Year
          </Text>
          <Text size="small" tag="p">
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
          variants={TEXT_VARIANTS_DEFAULT}
        >
          <Text marginBottom="xxSmall" color="light" size="small" tag="p">
            Role
          </Text>
          <Text size="small" tag="ul">
            {role.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </Text>
        </m.div>
        <m.div
          className="grid-col grid-col:6 grid-col:4@s"
          variants={TEXT_VARIANTS_DEFAULT}
        >
          <Text marginBottom="xxSmall" color="light" size="small" tag="p">
            Project type
          </Text>
          <Text size="small" tag="ul">
            {type.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </Text>
        </m.div>
        <m.div
          className="SubInfo-text grid-col grid-col:8@s -start:5@s grid-col:6@m grid-col:8@l -start:1@l"
          variants={TEXT_VARIANTS_DEFAULT}
        >
          <Text>{text}</Text>
        </m.div>
      </m.div>
    </div>
  );
};
