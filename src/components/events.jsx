'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { events } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { styles } from '../app/styles'

export default function Events() {
  return (
    <section id="events" className="  py-24 bg- md:px-32 px-8">
      <motion.div
        variants={textVariant(0.25)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <p className={styles.sectionSubText}>Our Top Orgainized Events</p>
        <h1 className={`${styles.sectionHeadText} pb-5`}>Our Events</h1>
      </motion.div>

      <div className="sm:grid  md:px-32 px-5 gap-10 grid-cols-3   ">
        {events.map((event, i) => (
          <Link key={event.id} href={`/events/${event.id}`}>
            <div className="relative hover:scale-105 transition-all ease-in-out ">
              <motion.div
                variants={fadeIn('right', 'tween', i * 0.3, 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="col-span-1   sm:my-2 my-10 py-5 row-span-1 shadow-md hover:shadow-lg rounded-full flex justify-center items-end  bg-wh-primary"
              >
                <h1 className=" ">{event.title}</h1>
              </motion.div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
