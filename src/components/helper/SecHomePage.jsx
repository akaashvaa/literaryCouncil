import BranchHome from './branchHome'

const SecHomePage = ({ img, content }) => {
  return (
    <section className="mt-32 h-96 flex flex-col justify-between items-center">
      <BranchHome img={img} content={content} />
    </section>
  )
}

export default SecHomePage
