export const animateHelper = (
  axis,
  from,
  to,
  duration,
  initialOpacity,
  finalOpacity,
  ease = "linear",
  delay = 0,
  scaleFrom = 1,
  scaleTo = 1
) => ({
  initial: {
    [axis]: from,
    opacity: initialOpacity,
    scale: scaleFrom,
  },
  animate: {
    [axis]: to,
    opacity: finalOpacity,
    scale: scaleTo,
    transition: {
      duration: duration,
      delay: delay,
      ease: ease,
    },
  },
});

export const animateStagger = (duration) => ({
  animate: {
    transition: {
      staggerChildren: duration,
    },
  },
});
