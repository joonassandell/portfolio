import { default as NextLink } from "next/link";
import { forwardRef } from "react";
import { useAppContext } from "../../containers/App";

const LinkWithTransition = forwardRef(
  ({ children, transition, onClick, href }, ref) => {
    const { setTemplateTransition } = useAppContext();

    return (
      <a
        href={href}
        onClick={(e) => {
          if (transition) {
            setTemplateTransition(true);
          } else {
            setTemplateTransition(false);
          }
          onClick(e);
        }}
        ref={ref}
      >
        {children}
      </a>
    );
  }
);

const Link = ({ children, href, transition = true }) => {
  return (
    <NextLink href={href} passHref>
      <LinkWithTransition transition={transition}>
        {children}
      </LinkWithTransition>
    </NextLink>
  );
};

export default Link;
