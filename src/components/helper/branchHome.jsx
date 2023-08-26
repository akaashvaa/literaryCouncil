import React from 'react'
import Image from 'next/image'

const BranchHome = ({ img, content }) => {
  return (
    <div className="flex flex-col gap-20 justify-center items-center">
      <div className="flex flex-col sm:flex-row  justify-between md:w-3/4 items-center gap-10 ">
        <h1 className="basis-1/2 ">{content}</h1>
        <Image
          src={img}
          alt="image"
          placeholder="blur"
          width={300}
          className=" rounded-full md:w-auto h-auto"
        />
      </div>
    </div>
  )
}

export default BranchHome
