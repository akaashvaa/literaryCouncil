export const textVariant = (delay) => {
  return {
    hidden: {
      y: -100,
      opacity: 0,
      rotateX: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      rotateX: 360,
      transition: {
        type: 'spring',
        duration: 1.15,
        delay: delay,
      },
    },
  }
}
export const textVariant2 = () => {
  return {
    hidden: {
      x: '-20%',
    },
    show: {
      x: '100%',
      transition: {
        duration: 15,
        ease: 'linear',
        repeat: Infinity,
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
        delay: 0.8,
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

export const zoomIn = (scale, delay, duration) => {
  return {
    hidden: {
      scale: scale,
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
        ease: 'easeIn',
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
