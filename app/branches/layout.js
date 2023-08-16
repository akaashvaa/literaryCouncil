import Navhelper from '../(components)/helper/navHelper'
import { branches } from '../constants'

const Layout = ({ children }) => {
  return (
    <>
      <Navhelper navLinks={branches} sectionType="branches" />
      {children}
    </>
  )
}

export default Layout
