import { useEffect, useState } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import {
  scrollSpeed,
  transPrimary,
  transTertiary,
  transPrimaryFast,
  transPrimaryFastest,
  transSecondary,
  transSecondaryFast,
  transSecondaryFastest,
} from '../../lib/config';
import { isInView } from '../../lib/utility';
import { motion, useAnimation } from 'framer-motion';
import Link from '../Link';
import ConditionalWrapper from '../ConditionalWrapper';

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
  inView: {
    y: 0,
    opacity: 1,
    transition: transTertiary,
  },
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
  const { scroll } = useLocomotiveScroll();
  const [inView, setInView] = useState(false);

  if (scroll) {
    scroll.on('scroll', args => isInView(args, 'info', () => setInView(true)));
  }

  useEffect(() => {
    () => scroll.off('call', inViewStart);
  }, [scroll]);

  return (
    <motion.div
      animate={inView ? 'inView' : false}
      className="Info"
      data-scroll
      data-scroll-id="info"
      // data-scroll-offset="10%"
      // data-scroll-speed="1"
      // data-scroll-position="top"
      initial="hidden"
    >
      <div className="wrap">
        <div
          data-scroll
          // data-scroll-delay="1"
          data-scroll-position="top"
          data-scroll-speed="0.5" // 1
        >
          <motion.hr className="Info-ruler" variants={infoRulerVariants} />
        </div>
        <div
        // data-scroll
        // data-scroll-delay="0.05"
        // data-scroll-position="top"
        // data-scroll-speed={scrollSpeed} // 1
        >
          <motion.div className="grid" variants={infoGridVariants}>
            <div className="Info-metaCol grid-col:5@l">
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
            </div>
            <motion.div
              className="Info-headingCol grid-col:9@m grid-col:7@l"
              variants={infoGridCellVariants}
            >
              <h2 className="Info-heading h4">{heading}</h2>
              <div className="grid">
                <div className="Info-text grid-col:6@s">{text}</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Info;
