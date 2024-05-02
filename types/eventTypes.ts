import type * as React from 'react';

export type LinkEvent = React.MouseEvent<HTMLAnchorElement> & {
  target: HTMLLinkElement;
};

export type ButtonEvent = React.MouseEvent<HTMLButtonElement> & {
  target: HTMLButtonElement;
};
