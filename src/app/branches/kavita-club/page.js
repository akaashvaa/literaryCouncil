import React from 'react'
import { branchRoute } from '../../../constants'
import BranchHome from '@council/components/branchHome'

const KavitaClub = () => {
  const { img, content } = branchRoute.kavitaClub
  return (
    <section className="mt-32 h-96 flex flex-col justify-between items-center">
      <BranchHome img={img} content={content} />
    </section>
  )
}

export default KavitaClub
