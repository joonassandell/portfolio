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
      <Head description={meta.description} title={meta.title} />
      <Styles />
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        disableTransitionOnChange
        enableSystem={false}
        value={{ dark: 'u-dark' }}
      >
        <TemplateMain>
          <div className="Template-bg">
            <div className="Template-bg-1" />
            <div className="Template-bg-2" />
          </div>
          <TemplateSection gridRowGap={false}>
            <div className="grid-col">
              <Heading className="Template-heading" size="display">
                UI Lab
              </Heading>
            </div>
            <div className="grid-col grid-col:8@m grid-col:6@l">
              <Heading className="Template-subtitle mb:0" size="h5" tag="h2">
                <Link href="https://github.com/joonassandell/ui-lab">
                  <em>User interface laboratory</em>
                </Link>{' '}
                is a showcase of various UI component experiments and
                interactive design concepts.
              </Heading>
            </div>
          </TemplateSection>
          <TemplateSection gridRowGap="m" id="dynamic-pay-button" pb="5vw">
            <div className="grid-col grid-col:4@m">
              <Hr animate={false} className="mb:ml" />
              <Text className="mb" size="l" tag="h2">
                <span className="Template-highlightColor">01</span> Dynamic Pay
                Button
              </Text>
              <Text className="mb:xs" color="mute">
                <p>
                  A dynamic button that expands to a <q>wallet</q> for quickly
                  purchasing and choosing payment methods. Try dragging the
                  credit cards to switch between the active one.
                </p>
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
          <TemplateSection gridRowGap="m" id="tba" pb="15vw">
            <div className="grid-col grid-col:4@m">
              <Hr animate={false} className="mb:ml" />
              <Text className="mb" size="l" tag="h2">
                <span className="Template-highlightColor">02</span> TBA
              </Text>
              <Text className="mb:xs" color="mute">
                <p>
                  Nothing here yet but I'm planning on something new. Various
                  ideas:
                </p>
                <ul>
                  <li>Some sort of expanding git history</li>
                  <li>TV Remote Control Display</li>
                  <li>Dynamic Audio Player</li>
                  <li>CTA button that turns into navigation</li>
                </ul>
              </Text>
            </div>
            <div className="grid-col grid-col:7@m -start:6@m">
              <div className="Template-box">
                <div className="Template-box-content">
                  <Text color="mute">
                    <p>To be announced…</p>
                  </Text>
                </div>
                <div className="Template-box-footer">
                  <ThemeToggle />
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

  if (!mounted) return null;

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
