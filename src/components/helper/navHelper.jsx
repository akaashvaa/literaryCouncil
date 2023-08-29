'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../../public/logo.png'
import { useRouter } from 'next/navigation'

const NavHelper = ({ navLinks, sectionType }) => {
  const router = useRouter()
  const [activeNav, setActiveNav] = useState('')

  useEffect(() => {
    const currentUrlLastPart = window.location.pathname.split('/').pop()
    // console.log(currentUrlLastPart)
    setActiveNav(currentUrlLastPart)
  }, [])

  const handleNavClick = (navId) => {
    setActiveNav(navId)
    // console.log(navId)
    router.push(`/${sectionType}/${navId}`)
  }

  return (
    <section className="flex  flex-col gap-5 justify-evenly items-center my-5  mx-3 mb-24">
      <Image
        onClick={() => router.push(`/#${sectionType}`)}
        src={logo}
        alt="logo"
        width={40}
        className=" cursor-pointer"
      />

      <ul className="list-none  flex-row gap-9 flex justify-center px-5">
        {navLinks.map((nav) => (
          <span
            key={nav.id}
            onClick={() => handleNavClick(nav.id)}
            className={` 
             sm:text-[1em] text-sm  cursor-pointer shadow-md bg-wh-primary sm:px-10 px-5 py-4 drop-shadow-md  rounded-lg text-center flex  items-center ${
               activeNav === nav.id
                 ? ' drop-shadow-none text-[#777] '
                 : ' hover:scale-105'
             }`}
          >
            {nav.title}
          </span>
        ))}
      </ul>
    </section>
  )
}
export default NavHelper
