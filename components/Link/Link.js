import { AnimatePresence, motion, useCycle } from 'framer-motion';
import {
  inVariant,
  inVariantX,
  outVariant,
  outVariantX,
} from './Link.animations';

import { default as NextLink } from 'next/link';
import c from 'classnames';
import { forwardRef } from 'react';
import { useAppContext } from '../../containers/App';

const Link = forwardRef(({ ...props }, ref) => {
  const { setTemplateTransition } = useAppContext();
  const [isHover, setHover] = useCycle(false, true);
  const classes = c(props.className, 'Link', {
    '-underline': props.underline,
  });
  const Tag = props.tag == 'span' ? motion.span : motion.a;
  const defaultClick = !props.disableDefaultClick;

  return (
    <Tag
      animate={isHover ? 'in' : 'out'}
      className={classes}
      href={props.href}
      {...(!defaultClick && { onClick: props.onClick })}
      {...(defaultClick && {
        onClick: e => {
          props.templateTransition
            ? setTemplateTransition(true)
            : setTemplateTransition(false);
          props.onClick(e);
        },
      })}
      onHoverEnd={() => setHover()}
      onHoverStart={() => setHover()}
      ref={ref}
    >
      <motion.span
        className="Link-text"
        variants={props.orientation === 'vertical' ? outVariantX : outVariant}
      >
        {props.children}
      </motion.span>
      <AnimatePresence>
        {isHover && (
          <motion.span
            animate="in"
            className="Link-text Link-text--reveal"
            exit="out"
            initial="initial"
            key="Link-text--reveal"
            variants={props.orientation === 'vertical' ? inVariantX : inVariant}
          >
            {props.children}
          </motion.span>
        )}
      </AnimatePresence>
    </Tag>
  );
});

const NextLinkWrap = ({
  className,
  children,
  disableDefaultClick,
  href,
  onClick,
  orientation,
  tag = 'a',
  templateTransition = true,
  underline,
}) => {
  if (href) {
    return (
      <NextLink href={href} passHref>
        <Link
          className={className}
          disableDefaultClick={disableDefaultClick}
          {...(onClick && { onClick: onClick })}
          orientation={orientation}
          templateTransition={templateTransition}
          tag={tag}
          underline={underline}
        >
          {children}
        </Link>
      </NextLink>
    );
  }

  return (
    <Link
      className={className}
      disableDefaultClick={disableDefaultClick}
      href={href}
      {...(onClick && { onClick: onClick })}
      orientation={orientation}
      templateTransition={templateTransition}
      tag={tag}
      underline={underline}
    >
      {children}
    </Link>
  );
};

export default NextLinkWrap;
