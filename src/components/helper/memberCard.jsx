'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { slideIn } from '@council/utils/motion'

const MemberCard = ({ member, i }) => {
  return (
    <motion.div
      variants={slideIn('down', 'spring', i * 0.3, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className=" shadow-md  bg-wh-primary  flex flex-col rounded-lg gap-3 items-center  overflow-hidden"
    >
      <div className="relative overflow-hidden ">
        <motion.div whileHover={{ scale: 1.1 }}>
          <Image src={member.img} width={200} alt={member.name} />
        </motion.div>
      </div>

      <div className=" basis-1/2 flex flex-col gap-1 text-center py-2 ">
        <h1 className=" font-semibold">{member.name}</h1>
        <span>{member.Position}</span>
      </div>
    </motion.div>
  )
}
export default MemberCard
