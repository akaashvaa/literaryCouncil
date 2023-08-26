import React from 'react'
import { members } from '@council/constants'
import MemberCard from '@council/components/helper/memberCard'

const Executive = () => {
  const { executive } = members
  return (
    <>
      {executive.map((member, i) => (
        <div key={i}>
          <MemberCard member={member} i={i} />
        </div>
      ))}
    </>
  )
}

export default Executive
