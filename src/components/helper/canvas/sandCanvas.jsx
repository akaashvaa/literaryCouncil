import { useState, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'

const SandCanvas = () => {
  const ref = useRef()
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(10000), { radius: 1.1 })
  )

  for (let i = 0; i < sphere.length; i += 3) {
    // Randomize snowflake positions
    sphere[i] = Math.random() * 2 - 1
    sphere[i + 1] = Math.random() * 2 - 1
    sphere[i + 2] = Math.random() * 2 - 1
  }
  useFrame((state, delta) => {
    // Update snowflake positions
    for (let i = 0; i < sphere.length; i += 3) {
      sphere[i + 1] -= delta * 0.15 // Move snowflake up by delta units (from bottom to top)
      if (sphere[i + 1] < -1) {
        sphere[i + 1] = 1 + Math.random() * 0.1 // Reset snowflake position to a random value near the top
      }
    }
    ref.current.geometry.attributes.position.needsUpdate = true // Update the positions in the GPU
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#7D5A44"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

export default SandCanvas
