import { mq } from '@/lib/config';
import { motion } from 'framer-motion';
import { Link } from '../Link';
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
  const desktop = useMedia(mq.desktop);
  const rulerRef = useRef(null);
  const rulerInView = useInView(rulerRef);
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef);
  const textRef = useRef(null);
  const textInView = useInView(textRef);

  return (
    <div className="Info">
      <div className="wrap">
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
            data-scroll
            initial="hidden"
            ref={gridRef}
            className="Info-metaCol grid-col:5@l"
            variants={infoGridVariants}
          >
            <div className="grid">
              <motion.div
                className="grid-col:6 grid-col:8@s grid-col:9@m grid-col:5@l"
                variants={infoGridCellVariants}
              >
                <div className="grid">
                  <div className="grid-col:3@s grid-col:4@m grid-col:12@l">
                    <h6>Client</h6>
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
                  </div>
                  <div className="grid-col:3@s grid-col:4@m grid-col:12@l">
                    <h6>Year</h6>
                    <p>{year}</p>
                  </div>
                  <div className="grid-col:4@s grid-col:4@m grid-col:12@l">
                    <h6>Project type</h6>
                    <ul className="resetList">
                      {type.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="Info-roleCol grid-col:6 grid-col:4@s grid-col:3@m grid-col:5@l"
                variants={infoGridCellVariants}
              >
                <h6>Role</h6>
                <ul className="resetList">
                  {role.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
                <p>
                  <small className="Text Text--meta">{smallPrint}</small>
                </p>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            animate={textInView ? 'inView' : ''}
            custom={desktop ? 0.3 : false}
            data-scroll
            initial="hidden"
            ref={textRef}
            className="Info-headingCol grid-col:9@m grid-col:7@l"
            variants={infoGridCellVariants}
          >
            <h2 className="Info-heading h4">{heading}</h2>
            <div className="grid">
              <div className="Info-text grid-col:6@s">{text}</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
