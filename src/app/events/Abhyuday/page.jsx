import { eventData } from '@council/constants'
import SecBranchHome from '@council/components/helper/SecHomePage'

const Abhyuday = () => {
  const { img, content } = eventData.abhyuday
  return <SecBranchHome content={content} img={img} />
}

export default Abhyuday
