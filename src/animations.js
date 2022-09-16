export const animateNav = {
  show: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};
export const animateNavItems = {
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
  show: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 2.5,
    },
  },
  exit: {
    opacity: 0,
  },
};
export const fullScreenAnimation = {
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.5,
      ease: "easeInOut",
      duration: 0.8,
    },
  },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.5,
      ease: "easeInOut",
      duration: 0.8,
    },
  },
  hidden: {
    opacity: 0,
    y: 500,
  },
};
export const topDown = {
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
  whileInView: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 2,
    },
  },
};
export const fadeIn = {
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
  show: {
    opacity: [0, 1],
    transition: {
      ease: "easeInOut",
      duration: 1,
    },
  },
};
export const leftToRight = {
  hidden: {
    opacity: 0,
    x: "-50vw",
    transition: {
      when: "afterChildren",
    },
  },

  show: {
    opacity: 1,
    x: "0vw",
    transition: {
      ease: "easeIn",
      duration: 1,
    },
  },
};
export const fadeInZoom = {
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
  show: {
    opacity: 1,
    scale: [0.5, 1],
    transition: {
      ease: "easeInOut",
      duration: 1,
    },
  },
};
export const animateSkill = {
  show: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};
export const animateSkillItem = {
  hidden: {
    opacity: 0,
  },

  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export const animateAbout = {
  show: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};
export const animateAboutItem = {
  hidden: {
    opacity: 0,
  },

  show: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
export const lineAnimation = {
  hidden: {
    width: 0,
  },

  show: {
    width: "20vw",
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
