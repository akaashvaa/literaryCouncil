import Image from 'next/image'
import next from '@assets/next1.png'
import previous from '@assets/prev1.png'

const BtnNextPrev = ({ prevSlide, nextSlide }) => {
  const btnStyle =
    'mx-3 slide-btn cursor-pointer rounded-full shadow-sm bg-white shadow-slate-700 active:scale-105 '
  return (
    <div className="sm:w-[85%] w-fit gap-10  relative sm:absolute justify-between items-center  flex">
      <Image
        src={previous}
        alt="previous"
        width={50}
        className={btnStyle}
        onClick={prevSlide}
      />
      <Image
        src={next}
        alt="next"
        width={50}
        className={btnStyle}
        onClick={nextSlide}
      />
      {/* <button
            className="px-5 aspect-square rounded-full  bg-[#DDDCE0] "
            onClick={prevSlide}
          >
            &#x2190;
          </button>
          <button
            className=" px-5 bg-[#dddce0c5]  aspect-square rounded-full  "
            onClick={nextSlide}
          >
            &#x2192;
          </button> */}
    </div>
  )
}

export default BtnNextPrev
