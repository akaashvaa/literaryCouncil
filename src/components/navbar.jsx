'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'

import { motion } from 'framer-motion'

import { navLinks } from "@council/constants"
import { navVarient } from '@council/utils/motion.js'


import logo from '@assets/logo.png'
import lit from '@assets/lit2.png'
import close from '@assets/close2.png'
import menu from "@assets/menu2.png"

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)

  return (
    <nav
      className=" md:px-32 px-5 py-10 w-full h-14 flex  justify-between top-0 fixed items-center z-30  text-white bg-bl-primary
     transition-all duration-500 ease-in-out "
    >
      <Link
        href="/"
        onClick={() => {
          setActive('')
          window.scrollTo(0, 0)
        }}
        className="flex  items-center md:justify-start  "
      >
        <motion.div
          variants={navVarient()}
          initial="hidden"
          whileInView="show"
          whileTap="show"
        >
          <Image
            src={logo}
            alt="literaryLogo"
            width={270}
            priority={true}
            height={290}
            className="w-8  h-10"
          />
        </motion.div>
        <Image
          src={lit}
          alt="literaryFontLogo"
          width={230}
          className=" px-4 "
        />
      </Link>

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
          className={`${!toggle ? 'hidden' : 'flex'
            } p-6 black-gradient absolute top-16  mx-4 my-4 bg-primary rounded-xl border-2 border-bl-secondary backdrop-blur-lg  bg-bl-primary `}
        >
          <ul className="list-none flex flex-1 flex-col gap-4 items-start justify-end ">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${active === nav.title ? 'text-white' : 'text-bl-primary'
                  }font-poppins font-medium text-[17px] cursor-pointer`}
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
    </nav>
  )
}

export default Navbar
