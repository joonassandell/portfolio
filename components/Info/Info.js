import { useEffect, useState } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import {
  transPrimary,
  transTertiary,
  transPrimaryFast,
  transPrimaryFastest,
  transSecondary,
  transSecondaryFast,
  transSecondaryFastest,
} from '../../lib/config';
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
    transition: { staggerChildren: 0.1 },
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
  const [inView, setInView] = useState(null);

  const inViewStart = el => {
    console.log('call');
    if (inView != el) {
      setInView(el);
    }
  };

  if (scroll) {
    scroll.on('call', inViewStart);

    // scroll.on('scroll', args => {
    //   // console.log(args);
    //   if (typeof args.currentElements['info'] === 'object') {
    //     setInView(args.currentElements['info'].id);
    //   }
    // });
  }

  useEffect(() => {
    () => {
      scroll.off('call', inViewStart);
    };
  }, [scroll]);

  return (
    <motion.div
      animate={inView === 'info' ? 'inView' : false}
      className="Info"
      data-scroll
      data-scroll-id="info"
      data-scroll-call="info"
      data-scroll-position="top"
      initial="hidden"
    >
      <div className="wrap">
        <motion.hr className="Info-ruler" variants={infoRulerVariants} />
        <motion.div className="grid" variants={infoGridVariants}>
          <div className="Info-metaCol grid-col5@l">
            <div className="grid">
              <motion.div
                className="grid-col6 grid-col8@s grid-col9@m grid-col5@l"
                variants={infoGridCellVariants}
              >
                <div className="grid">
                  <div className="grid-col3@s grid-col4@m grid-col12@l">
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
                  <div className="grid-col3@s grid-col4@m grid-col12@l">
                    <h6>Year</h6>
                    <p>{year}</p>
                  </div>
                  <div className="grid-col4@s grid-col4@m grid-col12@l">
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
                className="Info-roleCol grid-col6 grid-col4@s grid-col3@m grid-col5@l"
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
            className="Info-headingCol grid-col grid-col9@m grid-col7@l"
            variants={infoGridCellVariants}
          >
            <h2 className="h4">{heading}</h2>
          </motion.div>
          <motion.div
            className="Info-textCol grid-col grid-col6@s grid-col4@l -start6@l"
            variants={infoGridCellVariants}
          >
            {text}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Info;
