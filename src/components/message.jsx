'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { textVariant, slideIn } from '../utils/motion.js'

import { styles } from '../app/styles.js'
import { messages } from '../constants/index.js'

import MessageCard from './helper/messageCard.jsx'
import BtnNextPrev from './helper/btnNextPrev.jsx'

export default function Message() {
  const [slideNo, setSlideNo] = useState(1)

  const nextSlide = () => {
    if (slideNo !== messages.length) {
      setSlideNo(slideNo + 1)
    } else setSlideNo(1)
  }
  const prevSlide = () => {
    if (slideNo !== 1) {
      setSlideNo(slideNo - 1)
    } else setSlideNo(messages.length)
    // console.log(slideNo)
  }
  return (
    <section
      id="message"
      className="flex flex-col md:px-32 px-8 py-24 bg-bl-primary text-white"
    >
      <motion.div
        variants={textVariant(0.25)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <p className={styles.sectionSubText}>Greetings </p>
        <h1 className={`${styles.sectionHeadText} pb-5`}>Message</h1>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col justify-center  items-center  w-full  "
      >
        <div className="flex sm:flex-row flex-col overflow w-full py-7 gap-10 justify-center items-center ">
          <div className=" relative justify-center items-center sm:w-[60%]  ">
            {messages.map((message, index) => (
              <MessageCard
                key={index}
                message={message}
                index={index}
                slideNo={slideNo}
              />
            ))}
          </div>
          <BtnNextPrev nextSlide={nextSlide} prevSlide={prevSlide} />
        </div>

        <div className="  gap-5 py-5 sm:flex  hidden">
          {messages.map((_, i) => (
            <div
              key={i}
              onClick={() => setSlideNo(i + 1)}
              className={`w-3  cursor-pointer h-3 rounded-full ${
                slideNo == i + 1 ? ' bg-bl-secondary ' : 'bg-[#dddce0c5]'
              } `}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
