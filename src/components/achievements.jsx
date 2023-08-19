'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { textVariant } from '@council/utils/motion'
import { styles } from '@council/app/styles'

import { achievementData } from '@council/constants'
import { AchievementCard } from '@council/components/helper/achievementsCard'
export default function Achievements() {
  return (
    <section className="py-24 md:px-32 px-8 bg-bl-primary text-white" >
      <motion.div variants={textVariant(0.25)} initial="hidden"
        whileInView="show"
        viewport={{ once: true }} >
        <p className={styles.sectionSubText}>what we have Achive So Far</p>
        <h2 className={styles.sectionHeadText}>Our Achievements</h2>
        <div className="mt-20 flex flex-col">
          <VerticalTimeline lineColor={'#20232A'}>
            {achievementData.map((achievement, index) => {
              return <AchievementCard key={index} achievement={achievement} />
            })}
          </VerticalTimeline>
        </div>
      </motion.div>
    </section>
  )
}
