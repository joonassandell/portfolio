export const headerAnim = {
  navButtonActive: {
    animate: { 
      opacity: 1,
      y: 0,
    },
    enter: {
      opacity: 1,
      y: 0,
    },
    initial: { 
      opacity: 0,
      y: 24,
    },
    exit: { 
      y: -24,
      opacity: 0, 
    },
    transition: {
      bounce: 0, 
      delay: 0.2,
      duration: 0.7,
      // ease: 'circInOut', // 'anticipate'
      type: 'spring', 
    },
  }
}