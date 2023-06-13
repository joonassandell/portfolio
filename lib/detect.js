const win = window;
const ua = win.navigator.userAgent;
const doc = document;

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
