import Navhelper from '../(components)/helper/navHelper'
import { events } from '../constants'

const Layout = ({ children }) => {
  return (
    <>
      <Navhelper navLinks={events} sectionType="events" />
      {children}
    </>
  )
}

export default Layout
