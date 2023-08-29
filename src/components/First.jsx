'use client'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import SeasonCanvas from '@council/components/helper/canvas/seasonCanvas'
import HeadSectionTag from '@council/components/helper/headSection'
import SandCanvas from '@council/components/helper/canvas/sandCanvas'
import getSeasonByMonth from './helper'

const FirstImpression = () => {
  const check = getSeasonByMonth() === 'none'
  return (
    <div
      className="w-full h-screen top-0  
      inset-0   "
    >
      <Canvas camera={{ position: [0, 0, Math.PI / 4] }}>
        <Suspense fallback={null}>
          {check ? <SandCanvas /> : <SeasonCanvas />}
        </Suspense>
        <ambientLight intensity={0.4} />
      </Canvas>
      <HeadSectionTag />
    </div>
  )
}
export default FirstImpression
