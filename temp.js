const setTransition = value => {
  setAppState(prevState => ({
    ...prevState,
    transition: value,
  }));

  if (value === 'template') {
    setAppState(prevState => ({
      ...prevState,
      fromTemplateTransition: true,
    }));
  }

  if (isBoolean(value) && value) {
    setAppState(prevState => ({
      ...prevState,
      fromTemplateTransition: false,
    }));
  }
};

// if (transition === 'template') {
//   html.classList.add('is-transition:template');
// }

// if (scroll) {
//   scroll.on('scroll', args => {
//     // console.log(scroll.scroll.isScrolling);classList.contains('is-inScrollView');
//     if (scroll.scroll.isScrolling) {
//       html.classList.remove('is-transition:template');
//     }
//     // console.log(args);
//     // console.log(html);
//   });
// }

const { appState } = useAppContext();
// const fixJump = appState.fromTemplateTransition && !preTransition;
const fixJump = appState.fromTemplateTransition && !preTransition;

if (scroll.scroll.stop) scroll.start();
// scroll.scrollTo(0, { duration: 0, disableLerp: true });

// if (scroll) {
//   scroll.on('scroll', () => {
//     if (scroll.scroll.isScrolling && html.classList.contains(hackClass)) {
//       html.classList.remove(hackClass);
//       html.classList.add(hackClassAfterDelay);

//       setTimeout(() => {
//         html.classList.remove(hackClassAfterDelay);
//       }, 100);
//     }
//   });
// }

// return (
//   <AnimatePresence
//     onExitComplete={() => {
//       if (scrollLock) setScrollLock(false);

//       if (scroll) {
//         if (templateTransition) {
//           html.classList.add(hackClass);
//         }

//         scroll.destroy();
//         scroll.init();
//       }

//       if (transition) setTransition(false);
//     }}
