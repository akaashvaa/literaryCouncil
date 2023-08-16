'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { branches } from '../constants'
import { textVariant } from '../utils/motion'
import { styles } from '../styles'
import BranchCard from './helper/branchcard'

export default function Branches() {
  return (
    <section id="branches" className="md:px-32 px-8 py-24">
      <motion.div
        variants={textVariant(0.25)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <p className={styles.sectionSubText}>what's more we are doing</p>
        <h1 className={`${styles.sectionHeadText} pb-5`}>Our Branches</h1>
      </motion.div>
      <div className="flex flex-wrap md:px-32 px-5 gap-10 justify-center items-center">
        {branches.map((branch, i) => (
          <Link key={i} href={`/branches/${branch.id}`}>
            <BranchCard branch={branch} index={i} />
          </Link>
        ))}
      </div>
    </section>
  )
}
