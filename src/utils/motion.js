export const textVariant = (delay) => {
  return {
    hidden: {
      y: -100,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1.15,
        delay: delay,
      },
    },
  }
}
export const navVarient = () => {
  return {
    hidden: {
      y: -10,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      rotate: 360,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20,
        bounce: 0.55,
        ease: 'easeOut',
      },
    },
  }
}

export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === '-left' ? 100 : direction === 'right' ? 100 : 0,
      y: direction === 'up' ? -100 : direction === 'down' ? 100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        ease: 'linear',
        type: type,
        delay: delay,
        duration: duration,
        ease: 'easeOut',
      },
    },
  }
}

export const zoomIn = (delay, duration) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'tween',
        delay: delay,
        duration: duration,
        ease: 'easeIn',
      },
    },
  }
}

export const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
      y: direction === 'up' ? '-100%' : direction === 'down' ? '100%' : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,

      transition: {
        ease: 'easeInOut',
        type: type,
        delay: delay,
        duration: duration,
      },
    },
  }
}

export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  }
}
