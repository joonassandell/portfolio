import { AnimatePresence, motion, useCycle } from 'framer-motion';
import {
  inVariant,
  inVariantX,
  outVariant,
  outVariantX,
} from './Link.animations';
import { default as NextLink } from 'next/link';
import c from 'classnames';
import { useAppContext } from '../../containers/App';
import ConditionalWrapper from '../ConditionalWrapper';

const Link = ({
  className,
  children,
  href,
  onClick,
  orientation,
  tag = 'a',
  templateTransition = true,
  underline,
}) => {
  const { setTemplateTransition } = useAppContext();
  const [hover, setHover] = useCycle(false, true);
  const classes = c(className, 'Link', {
    '-underline': underline,
  });
  const Tag = tag == 'span' ? motion.span : motion.a;

  return (
    <ConditionalWrapper
      condition={href}
      wrapper={children => (
        <NextLink href={href} passHref>
          {children}
        </NextLink>
      )}
    >
      <Tag
        animate={hover ? 'in' : 'out'}
        className={classes}
        href={href}
        onClick={e => {
          templateTransition
            ? setTemplateTransition(true)
            : setTemplateTransition(false);
          onClick ? onClick(e) : false;
        }}
        onHoverEnd={() => setHover()}
        onHoverStart={() => setHover()}
      >
        <motion.span
          className="Link-text"
          variants={orientation === 'vertical' ? outVariantX : outVariant}
        >
          {children}
        </motion.span>
        <AnimatePresence>
          {hover && (
            <motion.span
              animate="in"
              className="Link-text Link-text--reveal"
              exit="out"
              initial="initial"
              key="Link-text--reveal"
              variants={orientation === 'vertical' ? inVariantX : inVariant}
            >
              {children}
            </motion.span>
          )}
        </AnimatePresence>
      </Tag>
    </ConditionalWrapper>
  );
};

export default Link;
