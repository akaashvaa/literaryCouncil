'use client'
import HeaderComponent from '@council/components/headerComp'
import About from '@council/components/about'
import LiveUpdates from '@council/components/liveUpdate'
import Message from '@council/components/message'
import Branches from '@council/components/branches'
import Events from '@council/components/events'
import Achievements from '@council/components/achievements'
import Members from '@council/components/members'
import Contact from '@council/components/footer'
import FirstImpression from '@council/components/First'
import getSeasonByMonth from '@council/components/helper'
export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="flex  flex-col ">
        <HeaderComponent />
        {/* <SandCanvas /> */}
        <FirstImpression />
      </div>

      <div className=" flex flex-col transition-all duration-500 ease-in-out ">
        <About />
        <LiveUpdates />
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
