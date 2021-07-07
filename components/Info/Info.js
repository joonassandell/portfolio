import {
  mq,
  scrollSpeed,
  transPrimary,
  transTertiary,
  transPrimaryFast,
  transPrimaryFastest,
  transSecondary,
  transSecondaryFast,
  transSecondaryFastest,
} from '@/lib/config';
import { motion } from 'framer-motion';
import Link from '../Link';
import ConditionalWrapper from '../ConditionalWrapper';
import { useCallbackRef } from 'use-callback-ref';
import useInView from '@/lib/useInView';
import { useMedia } from 'react-use';

const infoRulerVariants = {
  inView: {
    scaleX: 1,
    transition: transPrimary,
  },
  hidden: {
    scaleX: 0,
  },
};

const infoGridVariants = {
  inView: {
    transition: { staggerChildren: 0.15 },
  },
};

const infoGridCellVariants = {
  inView: delay => ({
    y: 0,
    opacity: 1,
    transition: {
      ...transTertiary,
      ...(delay && { delay }),
    },
  }),
  hidden: {
    opacity: 0,
    y: '5rem',
  },
};

const Info = ({
  client = { name, href },
  employer = { name, href },
  heading,
  role = [],
  smallPrint,
  text,
  year,
}) => {
  const desktop = useMedia(mq.desktop);
  const rulerRef = useCallbackRef(null, ref => ref);
  const rulerInView = useInView(rulerRef, 'infoRuler');
  const gridRef = useCallbackRef(null, ref => ref);
  const gridInView = useInView(gridRef, 'infoGrid');
  const textRef = useCallbackRef(null, ref => ref);
  const textInView = useInView(textRef, 'infoText');

  return (
    <motion.div className="Info" initial="hidden">
      <div className="wrap">
        <div
          data-scroll
          data-scroll-id="infoRuler"
          data-scroll-position="top"
          data-scroll-speed="0.5"
          ref={rulerRef}
        >
          <motion.hr
            animate={rulerInView ? 'inView' : false}
            className="Info-ruler"
            variants={infoRulerVariants}
          />
        </div>
        <div className="grid">
          <motion.div
            animate={gridInView ? 'inView' : false}
            data-scroll
            data-scroll-id="infoGrid"
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
                          <Link href={client.href}>{children}</Link>
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
                    <h6>Employer</h6>
                    <p>
                      <ConditionalWrapper
                        condition={employer.href}
                        wrapper={children => (
                          <Link href={employer.href}>{children}</Link>
                        )}
                      >
                        {employer.name}
                      </ConditionalWrapper>
                    </p>
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
            animate={textInView ? 'inView' : false}
            custom={desktop ? 0.3 : false}
            data-scroll
            data-scroll-id="infoText"
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
    </motion.div>
  );
};

export default Info;
