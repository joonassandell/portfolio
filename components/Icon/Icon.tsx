import { type ElementType } from 'react';
import { type IconProps } from './';
import ArrowDownIcon from './icons/arrow-down.svg';
import ArrowRightIcon from './icons/arrow-right.svg';
import ArrowUpIcon from './icons/arrow-up.svg';
import c from 'clsx';
import CheckIcon from './icons/check.svg';
import CopyIcon from './icons/copy.svg';
import DownloadIcon from './icons/download.svg';
import DribbbleIcon from './icons/dribbble.svg';
import GithubIcon from './icons/github.svg';
import InstagramIcon from './icons/instagram.svg';
import LinkedInIcon from './icons/linkedin.svg';
import SoundCloudIcon from './icons/soundcloud.svg';
import XIcon from './icons/x.svg';

const Icon = ({
  className,
  Icon,
  name,
}: IconProps & {
  Icon: ElementType;
  name: string;
}) => <Icon className={c(`Icon Icon--${name}`, className)} />;

export const ArrowDown = (props: IconProps) => (
  <Icon Icon={ArrowDownIcon} name="arrowDown" {...props} />
);

export const ArrowRight = (props: IconProps) => (
  <Icon Icon={ArrowRightIcon} name="arrowRight" {...props} />
);

export const ArrowUp = (props: IconProps) => (
  <Icon Icon={ArrowUpIcon} name="arrowUp" {...props} />
);

export const Download = (props: IconProps) => (
  <Icon Icon={DownloadIcon} name="download" {...props} />
);

export const X = (props: IconProps) => (
  <Icon Icon={XIcon} name="x" {...props} />
);

export const Instagram = (props: IconProps) => (
  <Icon Icon={InstagramIcon} name="instagram" {...props} />
);

export const SoundCloud = (props: IconProps) => (
  <Icon Icon={SoundCloudIcon} name="soundCloud" {...props} />
);

export const LinkedIn = (props: IconProps) => (
  <Icon Icon={LinkedInIcon} name="linkedIn" {...props} />
);

export const Github = (props: IconProps) => (
  <Icon Icon={GithubIcon} name="github" {...props} />
);

export const Dribbble = (props: IconProps) => (
  <Icon Icon={DribbbleIcon} name="dribbble" {...props} />
);

export const Check = (props: IconProps) => (
  <Icon Icon={CheckIcon} name="check" {...props} />
);

export const Copy = (props: IconProps) => (
  <Icon Icon={CopyIcon} name="copy" {...props} />
);
