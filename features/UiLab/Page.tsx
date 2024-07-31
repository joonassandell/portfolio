import { Button } from '@/components/Button';
import { DynamicPayButton } from '@joonassandell/ui-lab';
import { Github, Moon, Sun } from '@/components/Icon';
import { Head } from '@/components/Head';
import { Heading } from '@/components/Heading';
import { Hr } from '@/components/Hr';
import { Link } from '@/components/Link';
import { SITEMAP } from '@/lib/sitemap';
import { Template, TemplateMain, TemplateSection } from '@/components/Template';
import { Text } from '@/components/Text';
import { ThemeProvider, useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { useLocomotiveScroll } from '@/components/LocomotiveScroll';
import { useSetThemeColor } from '@/components/App';
import dynamic from 'next/dynamic';

const Styles = dynamic(() => import('./Styles').then(c => c.UiLabStyles));

export const UiLabPage = () => {
  const { id, meta } = SITEMAP.uiLab;
  const { scroll } = useLocomotiveScroll();
  useSetThemeColor(meta.themeColor);

  return (
    <Template id={id}>
      <Styles />
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        disableTransitionOnChange
        enableSystem={false}
        value={{ dark: 'u-dark' }}
      >
        <Head description={meta.description} title={meta.title} />
        <TemplateMain>
          <TemplateSection>
            <div className="grid-col grid-col:8@m grid-col:6@l">
              <Heading size="h1">UI Laboratory</Heading>
              <Text className="mb:0" size="l" tag="p">
                A showcase of user interface component ideas and experiments.
                This space serves as a playground for exploring design concepts
                with a bunch of interactive elements.{' '}
                <Link href="https://github.com/joonassandell/ui-lab">
                  View source.
                </Link>
              </Text>
            </div>
          </TemplateSection>
          <TemplateSection gridRowGap="l" id="dynamic-pay-button" pb="15vw">
            <div className="grid-col grid-col:4@m">
              <Hr animate={false} className="mb:ml" />
              <Text className="mb" size="l" tag="h2">
                <span className="color:mute">01</span> Dynamic Pay Button
              </Text>
              <Text className="mb:0" color="mute" tag="p">
                A dynamic button that expands to a "wallet" for quickly
                purchasing and choosing payment methods. Try dragging between
                the credit cards to switch the active payment card.
              </Text>
            </div>
            <div className="grid-col grid-col:7@m -start:6@m">
              <div className="Template-box">
                <div className="Template-box-content">
                  <DynamicPayButton
                    onCardTouchEnd={() => scroll?.start()}
                    onCardTouchStart={() => scroll?.stop()}
                  />
                </div>
                <div className="Template-box-footer">
                  <ThemeToggle />
                  <Button
                    href="https://github.com/joonassandell/ui-lab/tree/main/app/dynamic-pay-button"
                    icon={<Github />}
                    radius="m"
                    size="s"
                  >
                    Source
                  </Button>
                </div>
              </div>
            </div>
          </TemplateSection>
        </TemplateMain>
      </ThemeProvider>
    </Template>
  );
};

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, theme } = useTheme();
  const handleThemeChange = () =>
    setTheme(theme === 'light' ? 'dark' : 'light');

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <Button
      icon={theme === 'light' ? <Moon /> : <Sun />}
      onClick={handleThemeChange}
      radius="m"
      size="square:s"
    >
      {theme === 'light' ? 'Dark mode' : 'Light mode'}
    </Button>
  );
};
