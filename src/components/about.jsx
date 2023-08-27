'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { textVariant, fadeIn } from '../utils/motion'
import { styles } from '../app/styles'

const About = () => {
  return (
    <section id="about" className="flex flex-col py-24 md:px-32 px-8 ">
      <motion.div
        variants={textVariant(0.25)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <p className={styles.sectionSubText}>Our Story </p>
        <h1 className={`${styles.sectionHeadText} pb-5`}>About Us</h1>
      </motion.div>

      <motion.div
        variants={fadeIn('down', 'spring', 0.3, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col py-7 justify-center items-center  w-full  "
      >
        <div className="sm:w-[60%] rounded-lg">
          <div className="flex flex-col justify-center items-center py-7 text-[1.2em]  sm:px-10 px-3 gap-10   rounded-lg">
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              quam voluptatibus officia accusantium dolorem minus saepe,
              doloremque, quas consequatur aspernatur quidem. Et recusandae odit
              minima, cupiditate autem reprehenderit ab ducimus!
            </h1>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
export default About
