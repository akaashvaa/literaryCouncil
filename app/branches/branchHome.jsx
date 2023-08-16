import Image from 'next/image'

const BrancHome = ({ img, content }) => {
  return (
    <div className="flex flex-col sm:flex-row md:w-3/4 justify-center mx-5 items-center gap-10 ">
      <h1 className="mb-5">{content}</h1>
      <Image
        src={img}
        alt="image"
        placeholder="blur"
        width={300}
        className=" rounded-full md:w-auto h-auto"
      />
    </div>
  )
}
export default BrancHome
