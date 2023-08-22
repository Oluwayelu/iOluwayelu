export const stagger = {
  hidden: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
  show: {
    transition: {
      staggerChildren: 0.07,
      staggerDirection: 1,
      delayChildren: 0.2,
    },
  },
};

export const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const items = {
  show: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  hidden: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const barVariant = (width: string) => {
  return {
    initial: {
      width: 0,
    },
    animate: {
      width: width,
      transition: {
        duration: 1,
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };
};

export const textVariant = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeIn",
      duration: 0.5,
    },
  },
};

export const textContainer = {
  hidden: {
    opacity: 0,
  },
  show: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
  }),
};

export const fadeIn = (
  direction: "left" | "right" | "up" | "down" = "right",
  scale = false
) => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    transition: {
      y: { stiffness: 1000 },
      x: { stiffness: 1000 },
    },
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.7,
      type: "tween",
      ease: "easeInOut",
      x: { stiffness: 1000, velocity: -100 },
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  whileInView: {
    opacity: [0, 1],
    x:
      direction === "left"
        ? [100, 0]
        : direction === "right"
        ? [-100, 0]
        : [0, 0],
    y:
      direction === "up" ? [100, 0] : direction === "down" ? [-100, 0] : [0, 0],
    scale: scale ? [0, 1] : [1, 1],
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
});
