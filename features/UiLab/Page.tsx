import { Box } from './';
import { Head } from '@/components/Head';
import { Heading } from '@/components/Heading';
import { Hr } from '@/components/Hr';
import { Link } from '@/components/Link';
import { SITEMAP } from '@/lib/sitemap';
import { Template, TemplateArea } from '@/components/Template';
import { Text } from '@/components/Text';
import { ThemeProvider } from 'next-themes';
import { useSetThemeColor } from '@/components/App';
import Lego from './lego.svg';

export const UiLabPage = () => {
  const { id, meta } = SITEMAP.uiLab;
  useSetThemeColor(meta.themeColor);

  return (
    <Template id={id}>
      <Head
        description={meta.description}
        ogImage={meta.ogImage}
        title={meta.title}
        zoom={false}
      />
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        disableTransitionOnChange
        enableColorScheme={false}
        enableSystem={false}
        value={{ dark: 'dark' }}
      >
        <div className="Template-bg">
          <div className="Template-bg-1" />
          <div className="Template-bg-2" />
        </div>
        <TemplateArea gridRowGap={false}>
          <div className="grid-col">
            <div className="Template-headingArea">
              <Heading className="Template-heading" size="display">
                UI Lab
              </Heading>
              <div className="Template-legos">
                <Lego className="Template-lego Template-lego--3" />
                <Lego className="Template-lego Template-lego--1" />
                <Lego className="Template-lego Template-lego--2" />
              </div>
            </div>
          </div>
          <div className="grid-col grid-col:8@m grid-col:6@l">
            <Heading className="Template-subtitle mb:0" size="h5" tag="h2">
              <Link href="https://github.com/joonassandell/ui-lab">
                <em>User interface laboratory</em>
              </Link>{' '}
              is a showcase of various UI component experiments and interactive
              design concepts.
            </Heading>
          </div>
        </TemplateArea>
        <TemplateArea gridRowGap="m" id="dynamic-pay-button">
          <div className="grid-col grid-col:4@m">
            <Hr animate={false} className="mb:ml" />
            <Text className="mb" size="l" tag="h2">
              <span className="Template-highlightColor">01</span> Dynamic Pay
              Button
            </Text>
            <Text className="mb:xs" color="mute">
              <p>
                A dynamic button that expands to a <q>wallet</q> for quickly
                purchasing and choosing payment methods. Try dragging the credit
                cards to switch between the active one.
              </p>
            </Text>
          </div>
          <div className="grid-col grid-col:8@m grid-col:7@l -end">
            <Box
              aria-label="Dynamic Pay Button component"
              source="https://github.com/joonassandell/ui-lab/tree/main/app/dynamic-pay-button"
              src="dynamic-pay-button"
            />
          </div>
        </TemplateArea>
        <TemplateArea gridRowGap="m" id="tba" pb="2xl-5xl">
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
          <div className="grid-col grid-col:8@m grid-col:7@l -end">
            <Box>
              <Text color="mute">
                <p>To be announced…</p>
              </Text>
            </Box>
          </div>
        </TemplateArea>
      </ThemeProvider>
    </Template>
  );
};
