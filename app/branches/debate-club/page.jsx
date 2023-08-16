import { branchRoute } from '../../constants'
import BrancHome from '../branchHome'

const DebateClub = () => {
  const { img, content } = branchRoute.debateClub
  return (
    <section className="mt-32 h-96 flex flex-col justify-between items-center">
      <BrancHome img={img} content={content} />
    </section>
  )
}

export default DebateClub
