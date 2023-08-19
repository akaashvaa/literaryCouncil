import { branchRoute } from '@council/constants'
import BranchHome from '@council/components/branchHome'

const DebateClub = () => {
  const { img, content } = branchRoute.debateClub
  return (
    <section className="mt-32 h-96 flex flex-col justify-between items-center">
      <BranchHome img={img} content={content} />
    </section>
  )
}

export default DebateClub
