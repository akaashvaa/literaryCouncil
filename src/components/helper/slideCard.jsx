'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import knitLogo from '../../../public/knitLogo.png'
import next from '../../../public/next.png'
import previous from '../../../public/previous.png'

export default function SlideCard({ listContent, cardNo = 1 }) {
  const [slideNo, setSlideNo] = useState(cardNo)

  const nextSlide = () => {
    if (slideNo !== listContent.length) {
      setSlideNo(slideNo + 1)
    } else setSlideNo(1)
  }
  const prevSlide = () => {
    if (slideNo !== 1) {
      setSlideNo(slideNo - 1)
    } else setSlideNo(listContent.length)
    // console.log(slideNo)
  }
  return (
    <>
      <div className="flex  sm:flex-row flex-col overflow w-full py-7 gap-10 justify-center items-center ">
        <div className=" relative justify-center items-center sm:w-[60%]  ">
          <div className=" absolute  inset-0 bg-wh-93 blur-xl opacity-60 rounded-3xl  "></div>
          <div className="flex bg-white  backdrop-blur  rounded-md">
            {listContent.map((el, index) => (
              <div
                key={el.id}
                className={`flex flex-col justify-start items-start py-7 gap-10  sm:px-10 px-3  rounded-lg   ${
                  slideNo === index + 1 ? '' : 'hidden'
                }`}
              >
                <div
                  className="flex gap-10    px-3
                "
                >
                  <Image src={knitLogo} alt="photo" width={60} />
                  <div className="flex flex-col gap-2">
                    <span>{el.name}</span>
                    <span>{el.Position}</span>
                  </div>
                </div>
                <h1 className="font-thin flex justify-center items-center  ">
                  {el.description}
                </h1>
              </div>
            ))}
          </div>
        </div>
        <div className="sm:w-[85%] w-fit gap-10  relative sm:absolute justify-between items-center  flex">
          <Image
            src={previous}
            alt="previous"
            width={50}
            className="mx-3 slide cursor-pointer rounded-full shadow-sm  shadow-slate-700"
            onClick={prevSlide}
          />
          <Image
            src={next}
            alt="next"
            width={50}
            className="mx-3 slide cursor-pointer rounded-full shadow-sm  shadow-slate-700"
            onClick={nextSlide}
          />
        </div>
        {/* <button
            className="px-5 aspect-square rounded-full shadow-sm  shadow-slate-700 bg-[#dfdeb5f3] "
            onClick={prevSlide}
            >
            &#x2190;
            </button> 
            <button
            className=" px-5 bg-[#dfdeb5f3]  aspect-square rounded-full  shadow-sm  shadow-slate-500"
            onClick={nextSlide}
            >
            &#x2192;
          </button> */}
      </div>
    </>
  )
}
