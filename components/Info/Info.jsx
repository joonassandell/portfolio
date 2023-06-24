import { MQ } from '@/lib/config';
import { m } from 'framer-motion';
import { Link } from '@/components/Link';
import { Text } from '@/components/Text';
import { ConditionalWrapper } from '@/components/ConditionalWrapper';
import { useInView } from '@/lib/useInView';
import { useMedia } from 'react-use';
import { useRef } from 'react';
import { rulerVariants, gridVariants, colVariants } from './Info.animations';

export const Info = ({
  client,
  heading,
  role = [],
  smallPrint,
  type = [],
  text,
  year,
}) => {
  const { name, href } = client || {};
  const desktop = useMedia(MQ.desktop, false);
  const rulerRef = useRef(null);
  const rulerInView = useInView(rulerRef);
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef);
  const textRef = useRef(null);
  const textInView = useInView(textRef);

  return (
    <section className="Info wrap">
      <div
        data-scroll
        data-scroll-position="top"
        data-scroll-speed={0.5}
        ref={rulerRef}
      >
        <m.hr
          animate={rulerInView && 'animate'}
          className="Info-ruler"
          initial="initial"
          variants={rulerVariants}
        />
      </div>
      <div className="grid">
        <m.div
          animate={gridInView && 'animate'}
          className="Info-meta grid-col grid-col:5@l"
          initial="initial"
          ref={gridRef}
          variants={gridVariants}
        >
          <div className="grid">
            <m.div
              className="grid -gap:column:0 grid-col grid-col:6 grid-col:9@m grid-col:5@l"
              variants={colVariants}
            >
              <div className="grid-col grid-col:4@m grid-col:12@l">
                <Text marginBottom="xxSmall" color="light" size="small">
                  Client
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
                  </p>
                </Text>
              </div>
              <div className="grid-col grid-col:4@m grid-col:12@l">
                <Text marginBottom="xxSmall" color="light" size="small">
                  Year
                </Text>
                <Text size="small">
                  <p>{year}</p>
                </Text>
              </div>
              <div className="grid-col grid-col:4@m grid-col:12@l">
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
              </div>
            </m.div>
            <m.div
              className="grid -gap:column:0 grid-col grid-col:6 grid-col:4@s grid-col:3@m grid-col:5@l"
              variants={colVariants}
            >
              <div className="grid-col">
                <Text marginBottom="xxSmall" color="light" size="small">
                  Role
                </Text>
                <Text className="grid-col" size="small">
                  <ul>
                    {role.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </Text>
              </div>
              <Text
                className="Info-meta-small grid-col -align:end"
                color="light"
              >
                <p>
                  <small>{smallPrint}</small>
                </p>
              </Text>
            </m.div>
          </div>
        </m.div>
        <m.div
          animate={textInView && 'animate'}
          className="grid-col grid-col:9@m grid-col:7@l grid-col:6@xl"
          custom={desktop ? 0.4 : false}
          initial="initial"
          ref={textRef}
          variants={colVariants}
        >
          <h2 className="Info-heading h4">{heading}</h2>
          <div className="grid">
            <Text className="Info-text grid-col grid-col:7@s">{text}</Text>
          </div>
        </m.div>
      </div>
    </section>
  );
};
