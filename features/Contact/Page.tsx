import { useSetThemeColor } from '@/components/App';
import { Button } from '@/components/Button';
import { Head } from '@/components/Head';
import { Heading } from '@/components/Heading';
import { ArrowRight, Check } from '@/components/Icon';
import { SomeIcons } from '@/components/SomeIcons';
import { Template, TemplateMain, TemplateSection } from '@/components/Template';
import { Text } from '@/components/Text';
import { TextReveal } from '@/components/TextReveal';
import { SCROLL_SPEED } from '@/lib/config';
import { getLink } from '@/lib/utils';
import { type PageProps } from '@/types';
import { useCopyToClipboard } from 'react-use';

export const ContactPage = ({ id, themeColor, title }: PageProps) => {
  useSetThemeColor(themeColor);
  const [, copyToClipboard] = useCopyToClipboard();

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
            tag="div"
          >
            <TextReveal
              text={['Get in touch ✳︎ Contact ✳︎ Contact ✳︎ Contact']}
            />
          </Heading>
        </TemplateSection>
        <TemplateSection className="" paddingBottom="15vw" paddingTop="5vw">
          <div className="grid-col grid-col:7@m grid-col:5@l">
            <Text animate className="mb:m" size="l">
              <p>
                I enjoy connecting with new people online, and participating in
                events. The easiest way to reach me is via email but
                alternatively feel free to send me a message in Twitter.
              </p>
            </Text>
            <Text animate>
              <div className="flex flex-direction:column flex-direction:row@s gap">
                <Button
                  icon={<Check />}
                  onClick={() => copyToClipboard('me@joonassandell.com')}
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
              </div>
            </Text>
          </div>
          <div className="grid-col grid-col:5@m -start:8@">
            <Text animate className="mb:m">
              <p className="mb:2xs">Social media</p>
              <p className="color:gray:600">
                Feel free to follow and send me a message.
              </p>
            </Text>
            <Text animate>
              <SomeIcons />
            </Text>
          </div>
        </TemplateSection>
      </TemplateMain>
    </Template>
  );
};
