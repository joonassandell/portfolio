import {
  ctrlItemInVariant,
  ctrlItemOutVariant,
  type HeaderNavItemProps,
} from './';
import { LinkRoll } from '@/components/LinkRoll';
import { m } from 'framer-motion';
import { useUrlState } from '@/lib/useUrlState';

export const HeaderNavItem = ({
  href,
  isOpen,
  onClick,
  openReveal,
  target,
  title,
}: HeaderNavItemProps) => {
  const { active } = useUrlState(href);

  return (
    <li className="Header-nav-item">
      <m.div variants={ctrlItemOutVariant}>
        <LinkRoll
          href={href}
          onClick={onClick}
          target={target}
          underline={active}
          {...(isOpen && { hidden: true, tabIndex: -1 })}
        >
          {title}
        </LinkRoll>
      </m.div>
      {openReveal && (
        <m.div className="Header-nav-item-reveal" variants={ctrlItemInVariant}>
          <LinkRoll
            href={href}
            onClick={onClick}
            target={target}
            templateTransition={false}
            underline={active}
          >
            {title}
          </LinkRoll>
        </m.div>
      )}
    </li>
  );
};
