import { motion } from 'framer-motion'
import Image from 'next/image'

const MessageCard = ({ message, index, slideNo }) => {
  const isVisible = slideNo === index + 1

  return (
    <motion.div
      key={message.id}
      initial={{
        x: isVisible ? (index + 1) * 100 : 0,
        opacity: isVisible ? 0 : 1,
      }}
      animate={{
        x: isVisible ? 0 : (index + 1) * -100,
        opacity: isVisible ? 1 : 0,
      }}
      className={`flex flex-col shadow-lg justify-start bg-bl-secondary items-start py-7 gap-10 sm:px-10 px-3 rounded-xl ${
        isVisible ? '' : 'hidden'
      }`}
    >
      <div className="flex gap-10 px-3">
        <Image
          src={message.img}
          alt="photo"
          width={60}
          className="rounded-full"
        />
        <div className="flex flex-col gap-2">
          <span>{message.name}</span>
          <span>{message.Position}</span>
        </div>
      </div>
      <h1 className="flex justify-center text-[1.1em] items-center">
        {message.description}
      </h1>
    </motion.div>
  )
}

export default MessageCard
