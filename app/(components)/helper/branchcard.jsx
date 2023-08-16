import { motion } from 'framer-motion'
import Image from 'next/image'
import { slideIn } from '../../utils/motion'

const BranchCard = ({ branch, index }) => {
  return (
    <>
      <motion.div
        variants={slideIn('left', 'tween', index * 0.3, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        key={branch.id}
        className=" h-80 w-80 flex flex-col  items-center justify-center  "
      >
        <Image
          className=" rounded-full h-auto "
          src={branch.image}
          alt="photo"
          width={300}
        />
        <h1 className=" absolute text-center bottom-0 font-semibold ">
          {branch.title}
        </h1>
      </motion.div>
    </>
  )
}

export default BranchCard
