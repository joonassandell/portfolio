import { ArrowRight, Check, Copy } from '@/components/Icon';
import { Button } from '@/components/Button';
import { getLink } from '@/lib/utils';
import { Head } from '@/components/Head';
import { Heading } from '@/components/Heading';
import { Link } from '@/components/Link';
import { type PageProps } from '@/types';
import { SCROLL_SPEED } from '@/lib/config';
import { SomeIcons } from '@/components/SomeIcons';
import { Template, TemplateMain, TemplateSection } from '@/components/Template';
import { Text } from '@/components/Text';
import { TextReveal } from '@/components/TextReveal';
import { useCopyToClipboard } from 'react-use';
import { useSetThemeColor } from '@/components/App';
import { useState } from 'react';

export const ContactPage = ({ id, themeColor, title }: PageProps) => {
  useSetThemeColor(themeColor);
  const [, copyToClipboard] = useCopyToClipboard();
  const [icon, setIcon] = useState(<Copy />);

  const handleCopy = () => {
    copyToClipboard('me@joonassandell.com');
    setIcon(<Check />);
    setTimeout(() => setIcon(<Copy />), 2000);
  };

  return (
    <Template id={id}>
      <Head
        description="My goal is to create unique, appealing, accessible, and user-friendly products while staying up to date with the latest standards and trends in today’s rapidly evolving digital world."
        title={title}
      />
      <TemplateMain>
        <TemplateSection className="Template-top" grid={false}>
          <Heading
            aria-hidden
            className="white-space:nowrap mb:0"
            data-s
            data-s-direction="horizontal"
            data-s-position="left"
            data-s-speed={SCROLL_SPEED}
            size="display"
            tag="h1"
          >
            <TextReveal text={['Get in touch ✳︎ Get in touch']} />
          </Heading>
        </TemplateSection>
        <TemplateSection paddingBottom="10vw" paddingTop="5vw">
          <div className="grid-col grid-col:8@m grid-col:6@l grid-col:5@xl">
            <Text animate size="l">
              <p>
                I enjoy connecting with new people online and participating in
                events. The easiest way to reach me is via email but
                alternatively feel free to send me a message through{' '}
                <Link href={getLink('twitter', 'social').url}>Twitter</Link>.
              </p>
              <p className="flex flex-direction:column flex-direction:row@s gap">
                <Button
                  disabled={icon.type.name != Copy.name}
                  icon={icon}
                  onClick={handleCopy}
                  variant="negative"
                >
                  Copy e-mail
                </Button>
                <Button
                  href={getLink('twitter', 'social').url}
                  icon={<ArrowRight />}
                >
                  Send me a DM
                </Button>
              </p>
            </Text>
          </div>
          <div className="grid-col grid-col:6@l">
            <Text animate>
              <p className="mb:2xs">On social platforms</p>
              <p className="color:gray:mute">
                Let's connect and get in touch 👋
              </p>
              <SomeIcons />
            </Text>
          </div>
        </TemplateSection>
      </TemplateMain>
    </Template>
  );
};
