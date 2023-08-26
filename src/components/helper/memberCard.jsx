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
      className=" shadow-md  bg-wh-primary  flex flex-col rounded-xl gap-3 items-center"
    >
      <Image
        src={member.img}
        width={200}
        alt={member.name}
        className=" object-cover"
      />
      <div className="flex flex-col gap-1 text-center py-2">
        <h1 className="">{member.name}</h1>
        <span>{member.Position}</span>
      </div>
    </motion.div>
  )
}
export default MemberCard
