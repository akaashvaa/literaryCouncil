import { motion } from 'framer-motion'
import Image from 'next/image'
import { slideIn } from '../../utils/motion.js'

import { useRouter } from 'next/navigation'

const BranchCard = ({ branch, index, routePoint }) => {
  const router = useRouter()
  return (
    <>
      <motion.div
        variants={slideIn('left', 'tween', index * 0.3, 0.5)}
        initial="hidden"
        whileInView="show"
        whileHover={{ scale: 1.02 }}
        viewport={{ once: true }}
        key={branch.id}
        onClick={() => router.push(routePoint)}
        className=" h-80 w-80 flex flex-col  items-center justify-center cursor-pointer"
      >
        <Image
          className=" rounded-full h-auto "
          src={branch.image}
          alt="photo"
          width={300}
        />
        <p className=" absolute flex text-center bottom-0  font-light self-center">
          {branch.title}
        </p>
      </motion.div>
    </>
  )
}

export default BranchCard
