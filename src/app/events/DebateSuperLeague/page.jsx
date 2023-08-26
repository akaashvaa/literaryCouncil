import { branchRoute } from '@council/constants'
import SecBranchHome from '@council/components/helper/SecHomePage'

const DebateSuperLeague = () => {
  const { img, content } = branchRoute.debateClub
  return <SecBranchHome content={content} img={img} />
}

export default DebateSuperLeague
