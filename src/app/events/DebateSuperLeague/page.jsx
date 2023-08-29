import { eventData } from '@council/constants'
import SecBranchHome from '@council/components/helper/SecHomePage'

const DebateSuperLeague = () => {
  const { img, content } = eventData.debateSuperLeague
  return <SecBranchHome content={content} img={img} />
}

export default DebateSuperLeague
