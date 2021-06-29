import { AnimatePresence, motion, useCycle } from 'framer-motion';
import { ArrowRight, ArrowRightLong } from '../Icon';
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
  arrow,
  className,
  children,
  href,
  isActive,
  onClick,
  orientation,
  target,
  tag = 'a',
  templateTransition = true,
  underline,
}) => {
  const { setTemplateTransition } = useAppContext();
  const [hover, setHover] = useCycle(false, true);
  const classes = c(className, 'Link', {
    '-underline': underline,
    'is-active': isActive,
    '-vertical': orientation === 'vertical',
    '-arrow': arrow,
  });
  const Tag = tag == 'span' ? motion.span : motion.a;
  const linkTarget = target
    ? target
    : href.indexOf('http') === 0
    ? '_blank'
    : false;

  return (
    <ConditionalWrapper
      condition={href}
      wrapper={children => (
        <NextLink href={href} passHref scroll={false}>
          {children}
        </NextLink>
      )}
    >
      <Tag
        animate={hover ? 'in' : 'out'}
        className={classes}
        onBlur={() => {
          if (hover) {
            setHover();
          }
        }}
        href={href}
        onClick={e => {
          templateTransition
            ? setTemplateTransition(true)
            : setTemplateTransition(false);
          onClick && onClick(e);
        }}
        onFocus={() => {
          if (!hover) {
            setHover();
          }
        }}
        onHoverEnd={() => setHover()}
        onHoverStart={() => setHover()}
        {...(href && linkTarget && { target: linkTarget })}
        {...(linkTarget === '_blank' && { rel: 'external' })}
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
        {arrow && (
          <div className="Link-icon">
            <ArrowRight />
          </div>
        )}
      </Tag>
    </ConditionalWrapper>
  );
};

export default Link;
