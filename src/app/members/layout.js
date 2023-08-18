import NavHelper from '@council/components/helper/navHelper'
import { branches } from '@council/constants'

const Layout = ({ children }) => {
  return (
    <>
      <NavHelper navLinks={branches} sectionType="branches" />
      {children}
    </>
  )
}

export default Layout
