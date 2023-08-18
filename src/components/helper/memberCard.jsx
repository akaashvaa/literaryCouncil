import Image from 'next/image'

const MemberCard = ({ member }) => {
  return (
    <div className=" shadow-md  bg-wh-primary  flex flex-col rounded-xl gap-3 items-center">
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
    </div>
  )
}
export default MemberCard
