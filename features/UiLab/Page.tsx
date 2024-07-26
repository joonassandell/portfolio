import 'ui-lab/index.css';
import { Button } from '@/components/Button';
import { DynamicPayButton } from 'ui-lab';
import { Head } from '@/components/Head';
import { Heading } from '@/components/Heading';
import { Hr } from '@/components/Hr';
import { Moon, Sun } from '@/components/Icon';
import { SITEMAP } from '@/lib/sitemap';
import { Template, TemplateMain, TemplateSection } from '@/components/Template';
import { Text } from '@/components/Text';
import { ThemeProvider, useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { useLocomotiveScroll } from '@/components/LocomotiveScroll';
import { useSetThemeColor } from '@/components/App';

export const UiLabPage = () => {
  const { scroll } = useLocomotiveScroll();
  const { id, meta } = SITEMAP.uiLab;
  useSetThemeColor(meta.themeColor);

  return (
    <Template id={id}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        disableTransitionOnChange
        enableSystem={false}
        value={{ dark: 'ul-dark' }}
      >
        <Head description={meta.description} title={meta.title} />
        <TemplateMain>
          <TemplateSection>
            <div className="grid-col grid-col:8@m grid-col:6@l">
              <Heading size="h1">UI Laboratory</Heading>
              <Text size="l">
                <p>
                  A compilation of milestones from my professional activities,
                  including project launches, feature releases, achievements,
                  album releases, recognitions, and career progress.
                </p>
              </Text>
            </div>
          </TemplateSection>
          <TemplateSection gridRowGap="l" id="dynamic-pay-button" pb="15vw">
            <div className="grid-col grid-col:4@m">
              <Hr animate={false} className="mb:ml" />
              <Text className="mb" size="l" tag="h2">
                <span className="color:mute">01</span> Dynamic Pay Button
              </Text>
              <Text className="mb:0" tag="p">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
                error rerum dolore fugiat odit dolores quisquam.
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
      size="s:square"
    >
      {theme === 'light' ? <>Dark mode</> : <>Light mode</>}
    </Button>
  );
};
