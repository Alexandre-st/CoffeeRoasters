const background = {
  initial: {
    y: -100,
    opacity: 0,
  },
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  closed: {
    y: -100,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const fadeIn = (delay) => {
  return {
    initial: {
      y: -100,
      opacity: 0,
    },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
        delay: delay,
      },
    },
  };
};

export { background, fadeIn };
