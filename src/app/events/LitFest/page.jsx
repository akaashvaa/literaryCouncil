import { eventData } from '@council/constants'
import SecBranchHome from '@council/components/helper/SecHomePage'

const LitFest = () => {
  const { img, content } = eventData.listFest
  return <SecBranchHome content={content} img={img} />
}

export default LitFest
