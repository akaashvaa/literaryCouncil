'use client'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import StarsComp from './helper/StarsComp'
import HeadSectionTag from './helper/headSection'

const FirstImpression = () => {
  return (
    <div
      className="w-full h-screen top-0  
      inset-0   "
    >
      <Canvas camera={{ position: [0, 0, Math.PI / 4] }}>
        <Suspense fallback={null}>
          <StarsComp className="w-full " />
        </Suspense>
        <ambientLight intensity={0.4} />
      </Canvas>
      {/* decreasing the bottom opacity of the 3d space */}
      {/* <div
        className="absolute inset-0 h -[500px] -translate-y-18"
        style={{
          background:
            'linear-gradient(rgba(243, 243, 243,0), rgba(243, 243, 243,0.7))',
        }}
      /> */}
      <HeadSectionTag />
    </div>
  )
}
export default FirstImpression
