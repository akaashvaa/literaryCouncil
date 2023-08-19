import NavHelper from '@council/components/helper/navHelper'
import { events } from '@council/constants'


const Layout = ({ children }) => {
  return (
    <>
      <NavHelper navLinks={events} sectionType="events" />
      {children}
    </>
  )
}

export default Layout
