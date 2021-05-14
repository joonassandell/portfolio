import { motion } from 'framer-motion';
import { getCSSVarValue } from '../../lib/utility';
import {
  transPrimary,
  transPrimaryFast,
  transPrimaryFastest,
  transSecondary,
  transSecondaryFast,
  transSecondaryFastest,
} from '../../lib/config';
import { useState } from 'react';
import Link from 'next/link';
import { useAppContext } from '../../containers/App';
import c from 'classnames';
import ConditionalWrapper from '../ConditionalWrapper';

const pathInVariants = {
  in: { pathLength: 1, transition: { ...transPrimaryFast, delay: 0.1 } },
  initial: { pathLength: 0, transition: { duration: 0 } },
};

const pointerInVariants = {
  in: {
    offsetDistance: '100%',
    transition: { ...transPrimaryFast, delay: 0.1 },
  },
  initial: { offsetDistance: '0%', transition: { duration: 0 } },
};

const pathOutVariants = {
  in: {
    pathOffset: 1,
    transition: transSecondaryFast,
  },
  initial: {
    pathLength: 1,
    pathOffset: 0,
    transition: { duration: 0 },
  },
};

const pointerOutVariants = {
  in: { x: '1rem', transition: transSecondaryFast },
  initial: { offsetDistance: '100%', x: 0, transition: { duration: 0 } },
};

const ButtonEnter = ({
  className,
  children,
  href,
  onClick,
  templateTransition = false,
}) => {
  const classes = c(className, 'Button Button--enter');
  const { setTemplateTransition } = useAppContext();
  const [arrowHover, setArrowHover] = useState(false);
  const Tag = href ? motion.a : motion.button;

  return (
    <ConditionalWrapper
      condition={href}
      wrapper={children => (
        <Link href={href} passHref>
          {children}
        </Link>
      )}
    >
      <Tag
        className={classes}
        onClick={e => {
          templateTransition
            ? setTemplateTransition(true)
            : setTemplateTransition(false);
          onClick ? onClick(e) : false;
        }}
        onHoverStart={() => setArrowHover(true)}
        onFocus={() => setArrowHover(true)}
        whileHover={{
          boxShadow: `5px 5px 0 0 ${getCSSVarValue('--white')}`,
          transition: {
            ...transPrimaryFastest,
            delay: 0.1,
          },
        }}
        whileTap={{ y: 2 }}
      >
        <motion.div
          animate={arrowHover ? 'in' : 'initial'}
          className="Button-arrow"
          onAnimationComplete={() => setArrowHover(false)}
        >
          <svg
            className="Button-arrow-svgPath"
            // viewBox="0 0 37 34"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              className="Button-arrow-path"
              d="M1 0V28C1 30.7614 3.23858 33 6 33H37"
              initial="initial"
              variants={pathInVariants}
            />
          </svg>
          <svg
            className="Button-arrow-svgPath Button-arrow-svgPath--out"
            // viewBox="0 0 37 34"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              className="Button-arrow-path"
              d="M1 0V28C1 30.7614 3.23858 33 6 33H37"
              initial="initial"
              variants={pathOutVariants}
            />
          </svg>
          <motion.div
            className="Button-arrow-pointer"
            initial="initial"
            variants={pointerInVariants}
          />
          <motion.div
            className="Button-arrow-pointer Button-arrow-pointer--out"
            initial="initial"
            variants={pointerOutVariants}
          />
        </motion.div>
        <div className="hideVisually">{children}</div>
      </Tag>
    </ConditionalWrapper>
  );
};

export default ButtonEnter;
