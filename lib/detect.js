const win = window;
const ua = win.navigator.userAgent;
const doc = document;
const html = doc.documentElement;

/**
 * Tests if touch events are supported, but doesn't necessarily reflect a
 * touchscreen device
 */
export const hasTouch = !!(
  'ontouchstart' in win ||
  (win.navigator && win.navigator.msPointerEnabled && win.MSGesture) ||
  (win.DocumentTouch && doc instanceof DocumentTouch)
);

/**
 * Internet Explorer (11)
 */
export const isIE = window.document.documentMode;

/**
 * Edge
 */
export const isEdge = /edge\//i.test(ua);

/**
 * Firefox
 */
export const isFirefox = 'InstallTrigger' in window;

/**
 * iOS
 */
export const isIOS = /iP(ad|hone|od)/i.test(ua);

/**
 * Android
 */
export const isAndroid =
  ua.indexOf('Android') > -1 &&
  ua.indexOf('Mozilla/5.0') > -1 &&
  ua.indexOf('AppleWebKit') > -1;

/**
 * Mac
 */
export const isMac = /mac/i.test(navigator.platform);

/**
 * Windows
 */
export const isWindows = /win/i.test(navigator.platform);

/**
 * Dialog
 */
export const hasDialog = 'show' in document.createElement('dialog');

/**
 * Object fit
 */
export const hasObjectFit = 'objectFit' in html.style !== false;

/**
 * Detect scrollbar width
 */
const getScrollBarWidth = () => {
  const scrollDiv = document.createElement('div');
  scrollDiv.style.height = '100px';
  scrollDiv.style.overflow = 'scroll';
  scrollDiv.style.position = 'absolute';
  scrollDiv.style.top = '-999px';
  scrollDiv.style.width = '100px';

  html.appendChild(scrollDiv);

  const scrollBarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;

  html.removeChild(scrollDiv);

  return scrollBarWidth;
};

export const scrollBarWidth = getScrollBarWidth();
