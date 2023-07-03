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
export const isIos = /iP(ad|hone|od)/i.test(ua);

/**
 * iPhone
 */
export const isIphone = /iPhone/i.test(ua);

/**
 * Webkit
 */
export const isWebkit = !!ua.match(/WebKit/i);

/**
 * iOS Safari
 */
export const isIosSafari = isIos && isWebkit && !ua.match(/CriOS/i);

/**
 * iOS Mobile Safari
 */
export const isIphoneSafari = isIphone && isWebkit && !ua.match(/CriOS/i);

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
