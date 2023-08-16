import HeaderComponent from './(components)/headerComp'
import About from './(components)/about'
import Message from './(components)/message'
import Branches from './(components)/branches'
import Events from './(components)/events'
import Achievements from './(components)/achievements'
import Members from './(components)/members'
import Contact from './(components)/footer'
import FirstImpression from './(components)/First'

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="flex  flex-col ">
        <HeaderComponent />
        <FirstImpression />
      </div>

      <div className=" flex flex-col transition-all duration-500 ease-in-out ">
        <About />
        <Message />
        <Branches />
        <Events />
        <Achievements />
        <Members />
      </div>
      <Contact />
    </main>
  )
}
