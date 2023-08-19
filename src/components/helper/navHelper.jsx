'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../../public/logo.png'
import { useRouter } from 'next/navigation'

const NavHelper = ({ navLinks, sectionType }) => {
  const router = useRouter()
  return (
    <section className="flex  flex-col gap-5 justify-evenly items-center my-5  mx-3 mb-24">
      <Link href={`/#${sectionType}`}>
        <Image src={logo} alt="logo" width={40} />
      </Link>
      <ul className="list-none  flex-row gap-9 flex justify-center px-5">
        {navLinks.map((nav) => (
          <span key={nav.id} onClick={(e) => router.push(`/${sectionType}/${nav.id}`)}
            className=" active:scale-105 
             hover:drop-shadow-md sm:text-[1em] text-sm  cursor-pointer bg-primary sm:px-10 px-5 py-4 shadow-sm rounded-lg text-center flex  items-center"
          >{nav.title}</span>
        ))}
      </ul>
    </section>
  )
}
export default NavHelper