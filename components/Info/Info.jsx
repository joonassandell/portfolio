import { MQ } from '@/lib/config';
import { motion } from 'framer-motion';
import { Link } from '@/components/Link';
import { Text } from '@/components/Text';
import { ConditionalWrapper } from '@/components/ConditionalWrapper';
import { useInView } from '@/lib/useInView';
import { useMedia } from 'react-use';
import { useRef } from 'react';
import {
  infoRulerVariants,
  infoGridVariants,
  infoGridCellVariants,
} from './Info.animations';

export const Info = ({
  client = { name, href },
  heading,
  role = [],
  smallPrint,
  type = [],
  text,
  year,
}) => {
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
        data-scroll-speed="0.5"
        ref={rulerRef}
      >
        <motion.hr
          animate={rulerInView ? 'inView' : ''}
          className="Info-ruler"
          initial="hidden"
          variants={infoRulerVariants}
        />
      </div>
      <div className="grid">
        <motion.div
          animate={gridInView ? 'inView' : ''}
          className="Info-meta grid-col grid-col:5@l"
          data-scroll
          initial="hidden"
          ref={gridRef}
          variants={infoGridVariants}
        >
          <div className="grid">
            <motion.div
              className="grid -gap:column:0 grid-col grid-col:6 grid-col:8@s grid-col:9@m grid-col:5@l"
              variants={infoGridCellVariants}
            >
              <div className="grid-col grid-col:3@s grid-col:4@m grid-col:12@l">
                <Text marginBottom="xxSmall" color="light">
                  Client
                </Text>
                <Text>
                  <p>
                    <ConditionalWrapper
                      condition={client.href}
                      wrapper={children => (
                        <Link href={client.href} underline>
                          {children}
                        </Link>
                      )}
                    >
                      {client.name}
                    </ConditionalWrapper>
                  </p>
                </Text>
              </div>
              <div className="grid-col grid-col:3@s grid-col:4@m grid-col:12@l">
                <Text marginBottom="xxSmall" color="light">
                  Year
                </Text>
                <Text>
                  <p>{year}</p>
                </Text>
              </div>
              <div className="grid-col grid-col:4@s grid-col:4@m grid-col:12@l">
                <Text marginBottom="xxSmall" color="light">
                  Project type
                </Text>
                <Text>
                  <ul className="resetList">
                    {type.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </Text>
              </div>
            </motion.div>
            <motion.div
              className="grid -gap:column:0 grid-col grid-col:6 grid-col:4@s grid-col:3@m grid-col:5@l"
              variants={infoGridCellVariants}
            >
              <div className="grid-col">
                <Text marginBottom="xxSmall" color="light">
                  Role
                </Text>
                <Text className="grid-col">
                  <ul className="resetList">
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
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          animate={textInView ? 'inView' : ''}
          className="grid-col grid-col:9@m grid-col:7@l"
          custom={desktop ? 0.3 : false}
          data-scroll
          initial="hidden"
          ref={textRef}
          variants={infoGridCellVariants}
        >
          <h2 className="Info-heading h4">{heading}</h2>
          <div className="grid">
            <Text className="Info-text grid-col grid-col:6@s">{text}</Text>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
