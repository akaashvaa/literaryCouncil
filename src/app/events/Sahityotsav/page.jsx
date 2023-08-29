import { eventData } from '@council/constants'
import SecBranchHome from '@council/components/helper/SecHomePage'

const Sahityotsav = () => {
  const { img, content } = eventData.sahityotsav
  return <SecBranchHome content={content} img={img} />
}

export default Sahityotsav
