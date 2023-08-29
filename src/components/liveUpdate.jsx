'use client'
import React from 'react'
import Image from 'next/image'
import openLink from '@assets/openLink.svg'
import { motion } from 'framer-motion'
import { textVariant2 } from '@council/utils/motion'
import { styles } from '@council/app/styles'

export default function LiveUpdates() {
  return (
    <section
      id="branches"
      className="md:px-32 px-8 py-24 shadow-inner bg-[#f3f2f2d3]"
    >
      <motion.div variants={textVariant2()} initial="hidden" animate="show">
        <p
          className={`text-green-700  ${styles.sectionSubText} font-bold transform rotate-x-30 origin-bottom`}
        >
          Live Updates
        </p>
      </motion.div>
      <div className="flex mt-10 flex-wrap md:px-32 px-5 gap-10 justify-center items-center">
        <div className="flex w-1/2 flex-col bg-wh-primary  drop-shadow-md rounded-lg gap-2 font-extralight ">
          <div className="flex  justify-between items-center p-2">
            <p>Winner is announced for the event</p>
            <a href="" className=" cursor-pointer">
              <Image src={openLink} alt="openLink" width={15} />
            </a>
          </div>
          <hr />
        </div>
      </div>
    </section>
  )
}
