import {
  ctrlItemInVariant,
  ctrlItemOutVariant,
  type HeaderNavItemProps,
} from './';
import { LinkRoll } from '@/components/LinkRoll';
import { m } from 'framer-motion';
import { urlState } from '@/lib/useUrlState';
import { useRouter } from 'next/router';

export const HeaderNavItem = ({
  href,
  isOpen,
  onClick,
  openReveal,
  target,
  title,
}: HeaderNavItemProps) => {
  const router = useRouter();

  return (
    <li className="Header-nav-item">
      <m.div variants={ctrlItemOutVariant}>
        <LinkRoll
          href={href}
          onClick={onClick}
          target={target}
          underline={urlState(href, router).active}
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
            underline={urlState(href, router).active}
          >
            {title}
          </LinkRoll>
        </m.div>
      )}
    </li>
  );
};
