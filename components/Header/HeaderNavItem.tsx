import {
  type HeaderNavItemProps,
  mainItemInVariant,
  mainItemOutVariant,
} from './';
import { LinkRoll } from '@/components/LinkRoll';
import { m } from 'framer-motion';

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
      <m.div variants={mainItemOutVariant}>
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
        <m.div className="Header-nav-item-reveal" variants={mainItemInVariant}>
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
