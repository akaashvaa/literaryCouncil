'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { slideIn, zoomIn } from '@council/utils/motion'

function CardHelper({ point }) {
  return (
    <ul className="flex flex-col list-disc px-5">
      <li className="px-2">
        <div className="flex my-3 justify-between">
          <h1 className="font-bold">{point.winnerName}</h1>
          <span>Batch {point.batch}</span>
        </div>
        <ul className=" xs:flex flex-col hidden list-inside m-5">
          {point.positions.map((position, positionIndex) => (
            <li key={`position-${positionIndex}`} className="font-medium m-1">
              {position.eventName} :
              <span className="px-3">{position.rank}</span>
            </li>
          ))}
        </ul>
      </li>
    </ul>
  )
}

export function AchievementCard({ achievement, index }) {
  return (
    <motion.div
      variants={slideIn('left', 'spring', index * 0.3, 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="flex flex-col  p-7  bg-bl-secondary drop-shadow-xl gap-3 rounded-lg"
    >
      <motion.div
        variants={zoomIn(0.5, 1, 1)}
        initial="hidden"
        animate="show"
        className="flex  justify-between items-center bg-bl-primary  px-5 py-3 rounded-lg drop-shadow-lg"
      >
        <div className=" flex flex-col  justify-between items-center">
          <h1 className=" font-medium text-3xl ">{achievement.title}</h1>

          <h3 className="flex m-3 text-lg  ">
            {achievement.eventName} {achievement.year}
          </h3>
        </div>
        <Image
          src={achievement.collegeIcon}
          alt={achievement.title}
          width={50}
          height={50}
          className=" object-contain rounded-full "
        />
      </motion.div>
      <div className="flex flex-col  bg-bl-secondary p-5 rounded-lg">
        {achievement.points.map((point, index) => (
          <CardHelper point={point} key={`experience-point-${index}`} />
        ))}
      </div>
    </motion.div>
  )
}
