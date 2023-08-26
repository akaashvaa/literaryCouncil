import React from 'react'
import { branchRoute } from '../../../constants'
import SecBranchHome from '@council/components/helper/SecHomePage'

const KavitaClub = () => {
  const { img, content } = branchRoute.kavitaClub
  return <SecBranchHome img={img} content={content} />
}

export default KavitaClub
