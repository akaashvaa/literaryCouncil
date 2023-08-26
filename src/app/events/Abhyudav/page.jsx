import { branchRoute } from '@council/constants'
import SecBranchHome from '@council/components/helper/SecHomePage'

const Abhyuday = () => {
  const { img, content } = branchRoute.debateClub
  return <SecBranchHome content={content} img={img} />
}

export default Abhyuday
