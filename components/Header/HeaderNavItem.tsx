import {
  type HeaderNavItemProps,
  MAIN_ITEM_IN_VARIANT,
  MAIN_ITEM_OUT_VARIANT,
} from './';
import { LinkRoll } from '@/components/LinkRoll';
import { m } from 'motion/react';

export const HeaderNavItem = ({
  href,
  isOpen,
  onClick,
  openReveal,
  target,
  title,
}: HeaderNavItemProps) => {
  return (
    <li className="Header-nav-item">
      <m.div variants={MAIN_ITEM_OUT_VARIANT}>
        <LinkRoll
          href={href}
          onClick={onClick}
          target={target}
          underline="active"
          {...(isOpen && { hidden: true, tabIndex: -1 })}
        >
          {title}
        </LinkRoll>
      </m.div>
      {openReveal && (
        <m.div
          className="Header-nav-item-reveal"
          variants={MAIN_ITEM_IN_VARIANT}
        >
          <LinkRoll
            href={href}
            onClick={onClick}
            target={target}
            templateTransition={false}
            underline="active"
          >
            {title}
          </LinkRoll>
        </m.div>
      )}
    </li>
  );
};
