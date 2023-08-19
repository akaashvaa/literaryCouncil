'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { textVariant } from '../utils/motion'
import { styles } from '../app/styles'
import { members } from '../constants'
import MemberCard from './helper/memberCard'
export default function Members() {
  return (
    <section id="members" className="relative md:px-32 px-8 py-24">
      {/* Header */}
      <motion.div
        variants={textVariant(0.25)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <p className={styles.sectionSubText}>The Team</p>
        <h1 className={`${styles.sectionHeadText}  pb-5`}>Members</h1>
      </motion.div>
      {/* Content  */}
      <div className="flex flex-wrap relative gap-10 md:px-32 px-5 py-10 justify-center items-center ">
        {members.map((member, i) => (
          <MemberCard key={i} member={member} />
        ))}
      </div>
    </section>
  )
}
