'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { navLinks } from '@council/constants'
import { navVarient, slideIn } from '@council/utils/motion.js'

import logo from '@assets/logo.png'
import lit from '@assets/lit2.png'
import close from '@assets/close2.png'
import menu from '@assets/menu2.png'

const Navbar = () => {
  const router = useRouter()
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)

  return (
    <motion.nav
      className=" md:px-5 w-[80%] px-5 py-3 flex  justify-between top-5 rounded-[50px] fixed items-center z-30  drop-shadow-md bg-bl-secondary text-white  backdrop-blur-md 
     transition-all duration-500 ease-in-out"
      variants={slideIn('up', 'tween', 0.1, 0.3)}
      initial="hidden"
      whileInView="show"
      whileTap={{ rotate: 360 }}
    >
      <div
        className="
     flex xs:flex-row justify-center flex-col gap-1  items-center md:justify-start  "
      >
        <motion.div
          variants={navVarient()}
          initial="hidden"
          whileInView="show"
          whileTap={{ rotate: 45 }}
        >
          <Image
            src={logo}
            alt="literaryLogo"
            width={250}
            priority={true}
            height={270}
            className="w-7  h-9 xs:flex hidden"
          />
        </motion.div>
        <Image
          src={lit}
          alt="literaryFontLogo"
          width={230}
          onClick={() => router.push('/')}
          className=" px-4  cursor-pointer"
        />
      </div>
      <ul className="list-none  flex-row gap-9 hidden md:flex justify-center px-5">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className=" hover:scale-105 hover:drop-shadow-sm text-[1em] font-medium cursor-pointer"
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="md:hidden flex justify-end items-center">
        <Image
          src={toggle ? close : menu}
          alt="menu"
          width={25}
          className=" cursor-pointer"
          onClick={() => {
            setToggle(!toggle)
          }}
        />
        <div
          className={`${
            !toggle ? 'hidden' : 'flex'
          } p-8 absolute top-16  m-4 rounded-xl border-2 border-bl-secondary  bg-bl-primary `}
        >
          <ul className="list-none flex flex-1 flex-col gap-4 items-start justify-end ">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? 'text-white' : 'text-bl-primary'
                }font-poppins font-medium text-[1em] cursor-pointer`}
                onClick={() => {
                  setToggle(!toggle)
                  setActive(nav.title)
                }}
              >
                <motion.div whileHover={{ color: '#444444', scale: 1.1 }}>
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </motion.div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
