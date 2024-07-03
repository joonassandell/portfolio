import { type HeaderFooterNavItemProps } from './';
import { LinkRoll } from '@/components/LinkRoll';
import { useUrlState } from '@/lib/useUrlState';

export const HeaderFooterNavItem = ({
  href,
  onClick,
  title,
}: HeaderFooterNavItemProps) => {
  const { active } = useUrlState(href);

  return (
    <li>
      <LinkRoll
        href={href}
        onClick={onClick}
        templateTransition={false}
        underline={active}
      >
        {title}
      </LinkRoll>
    </li>
  );
};
