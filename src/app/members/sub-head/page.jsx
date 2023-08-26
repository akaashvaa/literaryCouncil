import React from 'react'
import { members } from '@council/constants'
import MemberCard from '@council/components/helper/memberCard'

const SubHead = () => {
  const { subHead } = members
  return (
    <>
      {subHead.map((member, i) => (
        <div key={i}>
          <MemberCard member={member} i={i} />
        </div>
      ))}
    </>
  )
}

export default SubHead
