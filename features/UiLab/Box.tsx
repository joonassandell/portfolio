import { Button } from '@/components/Button';
import { Github, Moon, Sun } from '@/components/Icon';
import { m } from 'framer-motion';
import { TRANS_PRIMARY_FASTEST, UI_LAB_URL } from '@/lib/config';
import { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';

export const Box = ({ children, source, src }: any) => {
  const { theme } = useTheme();
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const iframe = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    iframe.current?.contentWindow?.postMessage(theme, UI_LAB_URL);
  }, [theme]);

  return (
    <div className="Template-box">
      <div className="Template-box-content">
        {children}
        {src && (
          <m.iframe
            animate={iframeLoaded ? 'animate' : ''}
            className="Template-box-iframe"
            initial="initial"
            loading="lazy"
            onLoad={() => setIframeLoaded(true)}
            ref={iframe}
            src={`${UI_LAB_URL}/${src}?scale=true`}
            transition={TRANS_PRIMARY_FASTEST}
            variants={{
              animate: {
                opacity: 1,
              },
              initial: {
                opacity: 0,
              },
            }}
          />
        )}
      </div>
      <div className="Template-box-footer">
        <ThemeToggle />
        {source && (
          <Button href={source} icon={<Github />} radius="m" size="s">
            Source
          </Button>
        )}
      </div>
    </div>
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
