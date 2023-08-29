import { eventData } from '@council/constants'
import SecBranchHome from '@council/components/helper/SecHomePage'

const KavySarita = () => {
  const { img, content } = eventData.kavySarita
  return <SecBranchHome content={content} img={img} />
}

export default KavySarita
