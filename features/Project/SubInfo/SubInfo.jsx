import { m } from 'framer-motion';
import { Link } from '@/components/Link';
import { Text } from '@/components/Text';
import { Heading } from '@/components/Heading';
import { ConditionalWrapper } from '@/components/ConditionalWrapper';
import { useInView } from '@/lib/useInView';
import { useRef } from 'react';
import { rulerVariants, gridVariants, colVariants } from './SubInfo.animations';

export const SubInfo = ({
  client,
  heading,
  role = [],
  type = [],
  year,
  text,
}) => {
  const { name, href } = client || {};
  const rulerRef = useRef(null);
  const rulerInView = useInView(rulerRef);
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef);

  return (
    <div className="SubInfo grid-col grid-col:6@l">
      <m.hr
        animate={rulerInView ? 'animate' : ''}
        className="SubInfo-ruler"
        initial="initial"
        ref={rulerRef}
        variants={rulerVariants}
      />
      <m.div
        animate={gridInView ? 'animate' : ''}
        className="grid -gap:ro:l"
        initial="initial"
        ref={gridRef}
        variants={gridVariants}
      >
        {heading && (
          <div className="grid-col">
            <Heading className="mb:0" size="h4">
              {heading}
            </Heading>
          </div>
        )}
        <m.div
          className="grid-col grid-col:6 grid-col:4@s"
          variants={colVariants}
        >
          <Text marginBottom="xxSmall" color="light" size="small">
            Client & Year
          </Text>
          <Text size="small">
            <p>
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
            </p>
          </Text>
        </m.div>
        <m.div
          className="grid-col grid-col:6 grid-col:4@s"
          variants={colVariants}
        >
          <Text marginBottom="xxSmall" color="light" size="small">
            Role
          </Text>
          <Text size="small">
            <ul>
              {role.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </Text>
        </m.div>
        <m.div
          className="grid-col grid-col:6 grid-col:4@s -en"
          variants={colVariants}
        >
          <Text marginBottom="xxSmall" color="light" size="small">
            Project type
          </Text>
          <Text size="small">
            <ul>
              {type.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </Text>
        </m.div>
        <m.div
          className="SubInfo-text grid-col grid-col:6@m -start:5@s grid-col:8@l -start:1@l"
          variants={colVariants}
        >
          {text}
        </m.div>
      </m.div>
    </div>
  );
};
