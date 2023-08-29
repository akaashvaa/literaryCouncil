import Image from 'next/image'
import logo from '@assets/logo.png'
import knit from '@assets/knitLogo.png'
import lit from '@assets/lit.png'
import { motion } from 'framer-motion'
import { zoomIn } from '@council/utils/motion.js'

const HeadSectionTag = () => {
  return (
    <motion.div
      variants={zoomIn(0, 0, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="flex flex-col  justify-center items-center self-center absolute right-0 left-0  top-0 bottom-0 "
    >
      <div className="flex gap-10">
        <Image src={logo} placeholder="blur" alt="litlogo" width={110} />
        <Image src={knit} placeholder="blur" alt="knitlogo" width={140} />
      </div>

      <Image
        src={lit}
        placeholder="blur"
        alt="litAphaLogo"
        width={410}
        height={200}
      />
    </motion.div>
  )
}
export default HeadSectionTag
