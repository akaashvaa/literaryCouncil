import NavHelper from '@council/components/helper/navHelper'
import { membersType } from '@council/constants'

const Layout = ({ children }) => {
  return (
    <>
      <NavHelper navLinks={membersType} sectionType="members" />
      <section className="mt-32 h-96 flex flex-col justify-between items-center">
        <div className="flex flex-wrap relative gap-10 md:px-32 px-5 py-10 justify-center items-center ">
          {children}
        </div>
      </section>
    </>
  )
}

export default Layout
