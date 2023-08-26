'use client'
import HeaderComponent from '@council/components/headerComp'
import About from '@council/components/about'
import Message from '@council/components/message'
import Branches from '@council/components/branches'
import Events from '@council/components/events'
import Achievements from '@council/components/achievements'
import Members from '@council/components/members'
import Contact from '@council/components/footer'
import FirstImpression from '@council/components/First'
import { AnimateSharedLayout } from 'framer-motion'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

export default function Home() {
  const [loading, setLoading] = useState(true)
  return (
    <main className="flex flex-col">
      <div className="flex  flex-col ">
        <HeaderComponent />
        <AnimatePresence>
          {loading && (
            <motion.div
              key="modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FirstImpression setLoading={setLoading} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className=" flex flex-col transition-all duration-500 ease-in-out ">
        <About />
        <Message />
        <Branches />
        <Events />
        <Achievements />
        <Members />
      </div>
      <Contact />
    </main>
  )
}
