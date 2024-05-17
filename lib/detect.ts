const ua = navigator.userAgent;

/**
 * Chrome
 */
export const isChrome = ua.indexOf('Chrome') > -1;

/**
 * Firefox
 */
export const isFirefox = ua.toLowerCase().indexOf('firefox') > -1;

/**
 * Safari (desktop and mobile)
 */
export const isSafari = ua.indexOf('Safari') > -1 && !isChrome;

/**
 * Brave
 */
const nav: Navigator | any = navigator;
export const isBrave =
  (nav.brave && (async () => await nav.brave.isBrave())) || false;

/**
 * Android
 */
export const isAndroid =
  ua.indexOf('Android') > -1 &&
  ua.indexOf('Mozilla/5.0') > -1 &&
  ua.indexOf('AppleWebKit') > -1;

/**
 * Webkit
 */
export const isWebkit = !!ua.match(/WebKit/i);

/**
 * iOS
 */
export const isIos = /iP(ad|hone|od)/i.test(ua);

/**
 * iPhone
 */
export const isIphone = /iPhone/i.test(ua);

/**
 * iOS Chrome
 */
export const isIosChrome = ua.indexOf('CriOS') >= 0;

/**
 * iOS Firefox
 */
export const isIosFirefox = ua.match('FxiOS');

/**
 * iOS Safari (only)
 */
export const isIosSafari =
  isIos &&
  isWebkit &&
  !/(OPiOS|mercury|EdgiOS)/i.test(ua) &&
  !isIosFirefox &&
  !isBrave &&
  !isIosChrome;

/**
 * iPhone Safari (only)
 */
export const isIphoneSafari =
  isIphone &&
  isWebkit &&
  !/(OPiOS|mercury|EdgiOS)/i.test(ua) &&
  !isIosFirefox &&
  !isBrave &&
  !isIosChrome;

/**
 * Mac
 */
export const isMac = /macintosh/i.test(ua);

/**
 * Windows
 */
export const isWindows = /win/i.test(ua);

/**
 * Desktop Safari
 */
export const isDesktopSafari = isSafari && isMac;

/**
 * Supports theme-color. Intentionally target iPhone & Safari only.
 */
export const hasThemeColor = isIphoneSafari || isDesktopSafari;

/**
 * Tests if touch events are supported, but doesn't necessarily reflect a
 * touchscreen device
 */
export const hasTouch = window.matchMedia('(pointer: coarse)').matches;
