'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { textVariant, slideIn } from '../utils/motion'
import { styles } from '../styles'
import { messages } from '../constants'
import knitLogo from '../../public/knitLogo.png'
import next from '../../public/next1.png'
import previous from '../../public/prev1.png'

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
      className="flex flex-col md:px-32 px-8 py-24 bg-bl-primary text-white "
    >
      <motion.div
        variants={textVariant(0.25)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <p className={styles.sectionSubText}>Faculty Point of Views</p>
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
            <div className="flex bg-bl-secondary    rounded-md shadow-xl">
              {messages.map((message, index) => (
                <div
                  key={message.id}
                  className={`flex flex-col shadow-lg justify-start items-start py-7 gap-10  sm:px-10 px-3  rounded-xl ${
                    slideNo === index + 1 ? '' : 'hidden'
                  }`}
                >
                  <div
                    className="flex gap-10 px-3
                "
                  >
                    <Image src={knitLogo} alt="photo" width={60} />
                    <div className="flex flex-col gap-2">
                      <span>{message.name}</span>
                      <span>{message.Position}</span>
                    </div>
                  </div>
                  <h1 className="  flex justify-center items-center  ">
                    {message.description}
                  </h1>
                </div>
              ))}
            </div>
          </div>
          <div className="sm:w-[85%] w-fit gap-10  relative sm:absolute justify-between items-center  flex">
            <Image
              src={previous}
              alt="previous"
              width={50}
              className="mx-3 slide-btn cursor-pointer rounded-full shadow-sm bg-white text-white shadow-slate-700"
              onClick={prevSlide}
            />
            <Image
              src={next}
              alt="next"
              width={50}
              className="mx-3 bg-white slide-btn cursor-pointer rounded-full shadow-sm  shadow-slate-700"
              onClick={nextSlide}
            />
          </div>
          {/* <button
            className="px-5 aspect-square rounded-full  bg-[#DDDCE0] "
            onClick={prevSlide}
          >
            &#x2190;
          </button>
          <button
            className=" px-5 bg-[#dddce0c5]  aspect-square rounded-full  "
            onClick={nextSlide}
          >
            &#x2192;
          </button> */}
        </div>

        <div className=" flex  gap-5 py-5 ">
          {messages.map((mess, i) => (
            <div
              key={i}
              onClick={() => setSlideNo(i + 1)}
              className={`w-3  cursor-pointer h-3 rounded-full ${
                slideNo == i + 1 ? ' bg-bl-primary ' : 'bg-[#dddce0c5]'
              } `}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
