import React from 'react'
import { branchRoute } from '../../constants'
import BrancHome from '../branchHome'

const KavitaClub = () => {
  const { img, content } = branchRoute.kavitaClub
  return (
    <section className="mt-32 h-96 flex flex-col justify-between items-center">
      <BrancHome img={img} content={content} />
    </section>
  )
}

export default KavitaClub
